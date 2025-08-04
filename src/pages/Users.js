import { Link } from "react-router-dom";
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

export default function Users() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative", zIndex: 1 }}
    >
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img
               src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6eb5ff&color=fff&size=32`}
              alt={user.name}
              className="avatar"
              style={{ borderRadius: '50%', marginRight: 12, verticalAlign: 'middle' }}
            />
            <Link to={`/users/${user.id}`}>{user.name}</Link> ({user.email})
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
