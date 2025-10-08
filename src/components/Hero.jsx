import foto1 from "../assets/foto1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${foto1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradasi agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Fade ke putih (untuk transisi halus ke section berikutnya) */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-white"></div>

      {/* Konten teks */}
      <div className="relative z-10 px-6">
        {/* Menggunakan drop-shadow-2xl untuk bayangan yang lebih kuat */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
          SMARTECH
        </h1>
        {/* Menggunakan drop-shadow-lg agar lebih menonjol */}
        <p className="text-lg md:text-2xl mb-6 font-medium drop-shadow-lg">
          Smart Innovation for Smart Campus
        </p>
        <a
          href="#about"
          className="px-8 py-3 bg-cyan-700 text-white rounded-lg hover:bg-slate-100 hover:text-black transition font-semibold shadow-xl" // Menambahkan shadow-xl pada tombol
        >
          Learn More
        </a>
      </div>
    </section>
  );
}