import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: "40px 0", position: "relative", zIndex: 1 }}
    >
      <h2>About This App</h2>
      <p>
        This project demonstrates a multi-page React application with modern routing,
        animated transitions, and stylish UI elements.
      </p>
      <p>Why we Use React?</p>
      <p>Before React, web development faced issues like slow DOM updates and messy state management. Traditional JavaScript manually tweaked the DOM, bogging down performance, while frameworks like Angular tangled code with two-way data binding. </p>
        <p>React fixes this with:</p>
        <p> Virtual DOM: Speeds up rendering by updating only what changes.</p> 
         <p>One-Way Data Binding: Keeps data flow simple and predictable.</p> 
          <p>Components: Reusable UI blocks for cleaner, scalable code.</p>
          <p>Key Benefits:</p>
          <p>JSX: Intuitive HTML-in-JS syntax.</p>
          <p>Hooks: Easy state management.</p>
          <p>Ecosystem: Tools like React Native and Router.</p>
    </motion.div>
  );
}
