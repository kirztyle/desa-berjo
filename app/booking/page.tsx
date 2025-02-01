"use client";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", tickets: 1 });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    setMessage(data.success ? "Booking berhasil!" : "Terjadi kesalahan.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg">
      <h1 className="text-xl font-bold mb-4">Pesan Tiket Curug Nangka</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border p-2 rounded" type="text" placeholder="Nama" required 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input className="border p-2 rounded" type="email" placeholder="Email" required 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input className="border p-2 rounded" type="date" required 
          onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        <input className="border p-2 rounded" type="number" min="1" placeholder="Jumlah Tiket" required 
          onChange={(e) => setFormData({ ...formData, tickets: +e.target.value })} />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit" disabled={loading}>
          {loading ? "Memproses..." : "Pesan Sekarang"}
        </button>
      </form>
      {message && <p className="mt-3 text-green-500">{message}</p>}
    </div>
  );
}
