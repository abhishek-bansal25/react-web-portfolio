import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Abhishek Bansal</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/projects" className="hover:text-teal-400">Projects</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}