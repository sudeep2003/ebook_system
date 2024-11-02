// app/admin/layout.js

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <nav className="w-1/4 p-4">
        <ul>
          <li><a href="/admin/books">Manage Books</a></li>
          <li><a href="/admin/users">Manage Users</a></li>
        </ul>
      </nav>
      <main className="w-3/4 p-4">{children}</main>
    </div>
  );
}
