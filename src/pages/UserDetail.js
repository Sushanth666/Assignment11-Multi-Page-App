import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const users = [
  { id: 1, name: "John", email: "john35@example.com" },
  { id: 2, name: "Smith", email: "smith56@example.com" },
  { id: 3, name: "Sree", email: "sree66@example.com" },
  { id: 4, name: "Ciran", email: "ciran12@example.com" },
  { id: 5, name: "Ravi", email: "ravi70@example.com" },
  { id: 6, name: "Mugil", email: "mugil46@example.com" },
  // Add more users as needed
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));
  const navigate = useNavigate();

  if (!user) return <div style={{ textAlign: "center" }}>User not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="user-card"
      style={{
        background: "#fff",
        padding: 32,
        borderRadius: 12,
        boxShadow: "0 4px 18px rgba(30,60,100,0.09)",
        maxWidth: 350,
        margin: "30px auto",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}
    >
      <img
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6eb5ff&color=fff&size=70`}
        alt={user.name}
        className="avatar"
        style={{ borderRadius: '100%', marginBottom: 10 }}
      />
      <h2 style={{ margin: "12px 0 0 0" }}>{user.name}'s Details</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate("/users")}>Go Back</button>
    </motion.div>
  );
}
