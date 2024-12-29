import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-mechanic-dark text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          First Choice Premium
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-mechanic-light transition-colors">Home</Link>
          <Link to="/services" className="hover:text-mechanic-light transition-colors">Services</Link>
          <Link to="/booking" className="hover:text-mechanic-light transition-colors">Book Now</Link>
          <Link to="/contact" className="hover:text-mechanic-light transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;