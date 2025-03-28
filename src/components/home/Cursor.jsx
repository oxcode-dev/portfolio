import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <motion.div
            className="hidden md:inline-flex items-center justify-center rounded-full w-12 h-12 fixed z-[99999999] bg-white mix-blend-difference"
            animate={{ x: position.x+10, y: position.y+10 }}
        ></motion.div>
    );
};
