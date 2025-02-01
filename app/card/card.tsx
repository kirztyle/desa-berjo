"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HiburanCards() {
  const [hiburanData, setHiburanData] = useState([]);

  useEffect(() => {
    fetch("/data/wisata.json")
      .then((response) => response.json())
      .then((data) => setHiburanData(data.wisata_desa_berjo));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Hiburan di Wisata Desa Berjo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hiburanData.map((hiburan) => (
          <div key={hiburan.id} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <Image 
              src={hiburan.gambar} 
              alt={hiburan.nama} 
              width={300} 
              height={200} 
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">{hiburan.nama}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
