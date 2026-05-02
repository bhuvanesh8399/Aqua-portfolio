import { motion } from "framer-motion";

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mx-auto min-h-[calc(100vh-5rem)] w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
