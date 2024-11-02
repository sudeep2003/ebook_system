// app/auth/login/page.js
"use client"
import React, { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // On successful login, redirect to user dashboard or homepage
      alert("Login successful! Redirecting to your dashboard.");
      window.location.href = '/dashboard'; // Or use Next.js router
    } else {
      // Show error message if login failed
      const errorData = await response.json();
      alert(`Login failed: ${errorData.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className=" bg-slate-500 space-y-4 p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold">Login</h2>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 mt-1 rounded-md"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 mt-1 rounded-md"
          />
        </label>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}