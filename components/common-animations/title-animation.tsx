'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
 const FADE_UP_ANIMATION_VARIANTS = {
   hidden: { opacity: 0, y: 10 },
   show: { opacity: 1, y: 0, transition: { type: "spring" } },
 };
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
      transition={{ staggerChildren: 0.15, delay: 0.25 }}
    >
      {additionalHeading && (
        <motion.h3
          variants={FADE_UP_ANIMATION_VARIANTS}
          className={additionalHeadingClassName}
        >
          {additionalHeading}
        </motion.h3>
      )}
      <motion.h3
        variants={FADE_UP_ANIMATION_VARIANTS}
        className={titleClassName}
      >
        {title}
      </motion.h3>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className={subtitleClassName}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

