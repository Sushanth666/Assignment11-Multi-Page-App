import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: "40px 0", position: "relative", zIndex: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          background: 'linear-gradient(90deg,#6eb5ff 0%, #2b6cb0 100%)',
          color: 'white',
          borderRadius: 18,
          padding: '48px 0 32px 0',
          margin: '24px 0',
          boxShadow: '0 8px 24px rgba(30,60,100,0.10)',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <h1 style={{ fontSize: 38, margin: 0 }}>Modern React Multi-Page App</h1>
        <p style={{ fontSize: 22, opacity: 0.92 }}>
          Demonstrating beautiful navigation and interactive pages.
        </p>
      </motion.div>
      <h2 style={{ fontSize: 38, margin: 0 }}>Welcome to the Home Page</h2>
      <p style={{ fontSize: 22, opacity: 0.92 }}>This simple React multi-page app uses modern navigation & styling!</p>
      <p style={{ fontSize: 38, margin: 0 }}>ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.

</p>
    </motion.div>
  );
}
