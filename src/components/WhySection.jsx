export default function WhySection() {
  const reasons = [
    {
      title: "Unique and Eye-Catching",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      title: "Convenient and Easy to Use",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      title: "Perfect for Fans and Collectors",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        What Makes Our Product Attractive?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{r.title}</h3>
            <p className="text-gray-600 text-justify">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
