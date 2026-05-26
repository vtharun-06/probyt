"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("default"); // default | image | button | link
  const [label, setLabel] = useState("");
  const [clicking, setClicking] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Outer ring — lags behind (magnetic feel)
  const rx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.5 });
  const ry = useSpring(my, { stiffness: 120, damping: 22, mass: 0.5 });

  // Inner dot — snappy
  const dx = useSpring(mx, { stiffness: 600, damping: 35 });
  const dy = useSpring(my, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };

    const mousedown = () => setClicking(true);
    const mouseup = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const over = (e) => {
      const img = e.target.closest("[data-cursor='image']");
      const btn = e.target.closest("[data-cursor='button']");
      const lnk = e.target.closest("[data-cursor='link']");

      if (img) {
        setType("image");
        setLabel(img.dataset.cursorLabel || "View");
      } else if (btn) {
        setType("button");
        setLabel("");
      } else if (lnk) {
        setType("link");
        setLabel("");
      } else {
        setType("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mousedown", mousedown);
    window.addEventListener("mouseup", mouseup);
    document.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mousedown", mousedown);
      window.removeEventListener("mouseup", mouseup);
      document.removeEventListener("mouseover", over);
    };
  }, [mx, my]);

  const ringSize = {
    default: 36,
    image: 80,
    button: 52,
    link: 44,
  }[type];

  const ringBorder = {
    default: "border-ink/30",
    image: "border-terra",
    button: "border-terra",
    link: "border-ink/50",
  }[type];

  const dotSize = clicking ? 4 : type === "default" ? 6 : type === "button" ? 8 : 6;
  const dotColor = type === "default" ? "bg-ink" : "bg-terra";

  return (
    <div className="hidden md:block">
      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border-2 ${ringBorder} transition-colors duration-200`}
        style={{
          x: rx,
          y: ry,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.1 } }}
      >
        {/* View label inside ring on image hover */}
        {type === "image" && label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-terra text-[10px] font-bold uppercase tracking-widest">{label}</span>
          </div>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full ${dotColor} transition-colors duration-150`}
        style={{
          x: dx,
          y: dy,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? (type === "image" ? 0 : 1) : 0,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.1 } }}
      />
    </div>
  );
}
