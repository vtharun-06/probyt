import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DB_ID = process.env.NOTION_WAITLIST_DB_ID;

export async function addToWaitlist(email, whatsapp = "") {
  return notion.pages.create({
    parent: { database_id: DB_ID },
    properties: {
      Email: {
        title: [{ text: { content: email } }],
      },
      WhatsApp: {
        rich_text: [{ text: { content: whatsapp } }],
      },
      Timestamp: {
        date: { start: new Date().toISOString() },
      },
      Source: {
        select: { name: "Website" },
      },
    },
  });
}

export async function getWaitlistCount() {
  const response = await notion.databases.query({
    database_id: DB_ID,
    page_size: 1,
  });
  // Notion doesn't return total count directly — use a generous estimate
  // For exact count, we'd paginate. This queries for has_more + next_cursor.
  // Simple approach: paginate through all and count.
  let count = 0;
  let cursor = undefined;
  let hasMore = true;
  while (hasMore) {
    const res = await notion.databases.query({
      database_id: DB_ID,
      page_size: 100,
      start_cursor: cursor,
    });
    count += res.results.length;
    hasMore = res.has_more;
    cursor = res.next_cursor;
  }
  return count;
}
