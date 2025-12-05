import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-violet-600 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Company Info */}
        <div>
          <p className="text-gray-100 leading-relaxed">
            We're a creative team building modern digital experiences.
            Our mission is to craft elegant, efficient, and user-friendly web solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-center">Quick Links</h2>
          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="transition-all duration-300 hover:text-violet-200 hover:underline underline-offset-4">Home</a>
            </li>
            <li>
              <a href="#" className="transition-all duration-300 hover:text-violet-200 hover:underline underline-offset-4">About</a>
            </li>
            <li>
              <a href="#" className="transition-all duration-300 hover:text-violet-200 hover:underline underline-offset-4">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2">
            <li>
              📞 <span className="ml-2">+91 98765 43210</span>
            </li>
            <li>
              📧 <span className="ml-2">support@mybrand.com</span>
            </li>
            <li>
              📍 <span className="ml-2">123, Park Street, Kolkata, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-200 mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
