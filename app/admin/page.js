// app/admin/page.js

import { useSession, signIn } from "next-auth/react";
import { isAdmin } from "../utils/auth";

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (!session) {
    signIn(); // Redirects to login if not authenticated
    return null;
  }

  if (!isAdmin(session)) {
    return <p>Not Authorized</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
