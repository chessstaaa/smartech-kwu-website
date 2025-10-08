export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Have a question or want to collaborate? Reach out to us — we’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Kontak */}
          <div className="bg-white shadow-md rounded-xl p-8 text-left">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-2">
              📍 Bojongsantos Street No.82, Bandung, West Java
            </p>
            <p className="text-gray-600 mb-2">📞 +62 812 3456 7890</p>
            <p className="text-gray-600 mb-4">✉️ info@smartech.id</p>
            <p className="text-gray-600">Open Hours: Mon–Sat, 08.00 – 16.00</p>
          </div>

          {/* Form Kontak */}
          <form className="bg-white shadow-md rounded-xl p-8 text-left">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="youremail@example.com"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-700 text-white font-semibold py-2 rounded-lg hover:bg-cyan-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
