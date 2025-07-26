export default function Contact() {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Let's Talk</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" />
        <button type="submit" className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600">Send Message</button>
      </form>
    </div>
  );
}
