export default function Projects() {
  const projects = [
    { title: 'Expense Tracker', tech: 'React Native', emoji: '📱' },
    { title: 'Portfolio Site', tech: 'React Web + Tailwind', emoji: '🌐' },
    { title: 'ChatBot UI', tech: 'React Native + AI', emoji: '🤖' },
  ];

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white shadow p-6 rounded border hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.emoji} {proj.title}</h3>
            <p className="text-gray-600">Built with {proj.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}