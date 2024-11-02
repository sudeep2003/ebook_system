import { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const updateUserRole = async (id, newRole) => {
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: newRole }),
    });
    if (res.ok) {
      setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)));
    }
  };

  const deleteUser = async (id) => {
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - Role: {user.role}
            <button onClick={() => updateUserRole(user.id, user.role === "user" ? "admin" : "user")}>
              {user.role === "user" ? "Promote to Admin" : "Demote to User"}
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
