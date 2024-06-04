"use client";
import { FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
interface MagneticWrapperProps {
  className?: string;
  children: ReactNode;
}

const MagneticWreapper: FC<MagneticWrapperProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;
  return (
    <motion.div
      className="relative"
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWreapper;
