import React from "react";

const Desc = () => {
  return (
    <div>
      <div className="text-center font-bold text-lg">
        <h1>
          Selamat datang di, <span className="text-red-500">Desa Berjo</span>
        </h1>
      </div>
      <div className="text-justify px-12 lg:px-40 py-6">
        <p>
          Desa Berjo adalah desa wisata yang terletak di Kabupaten Karanganyar
          tepatnya di lereng Gunung Lawu. Berada di ketinggian + 1.500 mdpl,
          dengan suhu udara rata — rata + 22 °C hingga 32 °C. Desa Berjo
          terkenal sebagai daerah tujuan wisata di Kabupaten Karanganyar dan
          Indonesia. Destinasi wisata yang sudah banyak dikenal wisatawan antara
          lain : <span className="font-bold">Candi Sukuh dan Air Terjun Jumog.</span> <br /><br /> Desa Berjo memiliki potensi
          yang belum dikelola dengan baik, satu di antaranya adalah <span className="font-bold">Telaga
          Madirda</span>, dengan status tanah kas desa seluas kurang lebih 7 hektar.
          Telaga ini memiliki banyak potensi yang bisa dioptimalkan sebagai
          bentuk usaha memulihkan ekonomi masyarakat desa.
        </p>
      </div>
    </div>
  );
};

export default Desc;
