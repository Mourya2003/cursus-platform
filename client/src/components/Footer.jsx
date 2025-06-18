import React from "react";
import logo from "../assets/logo1.svg"; // Adjust the path as necessary
const Footer = () => (
  <footer className="mt-8 bg-gray-100 text-gray-800 py-8">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <div className="space-y-2">
            <a href="/about_us" className="block hover:text-blue-600 transition">About</a>
            <a href="/our_blog" className="block hover:text-blue-600 transition">Blog</a>
            <a href="/career" className="block hover:text-blue-600 transition">Careers</a>
            <a href="/press" className="block hover:text-blue-600 transition">Press</a>
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <div className="space-y-2">
            <a href="/help" className="block hover:text-blue-600 transition">Help</a>
            <a href="/coming_soon" className="block hover:text-blue-600 transition">Advertise</a>
            <a href="/coming_soon" className="block hover:text-blue-600 transition">Developers</a>
            <a href="/contact_us" className="block hover:text-blue-600 transition">Contact Us</a>
          </div>
        </div>
        {/* Column 3 */}
        <div>
          <div className="space-y-2">
            <a href="/terms_of_use" className="block hover:text-blue-600 transition">Copyright Policy</a>
            <a href="/terms_of_use" className="block hover:text-blue-600 transition">Terms</a>
            <a href="/terms_of_use" className="block hover:text-blue-600 transition">Privacy Policy</a>
            <a href="/sitemap" className="block hover:text-blue-600 transition">Sitemap</a>
          </div>
        </div>
        {/* Column 4 */}
        <div>
          <div className="space-y-2">
            <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Teach on Cursus</a>
            {/* Language Dropdown - Placeholder */}
            <div className="mt-2">
              <div className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Language</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="footer_bottm border-t pt-6 border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a href="/">
              <img src={logo} alt="Cursus" className="h-8" />
            </a>
            <p className="text-sm">
              © 2020 <strong>Cursus</strong>. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
