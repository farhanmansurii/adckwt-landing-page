'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AnimatedTitle = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  additionalHeading,
  additionalHeadingClassName,
  wrapperClassName,
}: {
  title: string;
  subtitle: string;
  titleClassName: string;
  subtitleClassName: string;
  additionalHeading?: string;
  additionalHeadingClassName?: string;
  wrapperClassName?:string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={wrapperClassName}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: !isInView ? 0 : 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.25, delay: 0.25 }}
    >
      {additionalHeading && (
        <motion.h3 className={additionalHeadingClassName}>
          {additionalHeading}
        </motion.h3>
      )}
      <motion.h3 className={titleClassName}>{title}</motion.h3>
      <motion.p className={subtitleClassName}>{subtitle}</motion.p>
    </motion.div>
  );
};
