export default function Products() {
  const product = {
    name: "NFC AmongUs",
    desc: "NFC AmongUs is a smart, compact, and stylish NFC reader designed for seamless digital interactions. Effortlessly connect, share, and access information with just a tap—perfect for smart offices, events, and tech enthusiasts who value both performance and design.",
    img: "https://source.unsplash.com/400x300/?nfc,technology,reader",
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Product</h2>
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition max-w-sm">
            <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm text-justify">{product.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
