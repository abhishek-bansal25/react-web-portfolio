export default function Home() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Abhishek Bansal</h1>
      <p className="text-lg mb-6 text-gray-700">React Native / React Developer | UI, Performance, and Systems Enthusiast</p>
      <div className="space-x-4">
        <a href="/projects" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">See Projects</a>
        <a href="/contact" className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Contact Me</a>
      </div>
      <section className="mt-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-800">
          <span className="bg-gray-100 px-4 py-2 rounded">React</span>
          <span className="bg-gray-100 px-4 py-2 rounded">React Native</span>
          <span className="bg-gray-100 px-4 py-2 rounded">Tailwind</span>
          <span className="bg-gray-100 px-4 py-2 rounded">Node.js</span>
          <span className="bg-gray-100 px-4 py-2 rounded">Firebase</span>
        </div>
      </section>
    </div>
  );
}