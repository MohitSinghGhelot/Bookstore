import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="m-4">
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            Discover your next great read at our bookstore. From timeless classics to modern bestsellers, we bring stories to life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="m-4">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Browse Books
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="m-4">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Bookstore. All rights reserved.
      </div>
    </footer>
  );
}
