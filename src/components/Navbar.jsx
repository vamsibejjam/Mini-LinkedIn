import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl bg-white shadow px-4 py-3 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
        <Link to="/">
          <h1 className="text-xl font-bold text-blue-600">MiniLinkedIn</h1>
        </Link>
        <div className="flex items-center gap-6 sm:gap-10 md:gap-20">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 text-sm sm:text-base"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-blue-600 text-xl"
          >
            <FaUserCircle />
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:bg-gray-200 hover:text-black px-3 py-1 rounded text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
