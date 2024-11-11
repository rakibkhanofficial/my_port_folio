import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterLink {
  title: string;
  href: string;
}

const FooterComponent = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/rakibkhanofficial",
      label: "GitHub"
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/rakibkhanofficial/",
      label: "LinkedIn"
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      href: "mailto:khanrakib218@gmail.com",
      label: "Email"
    }
  ];

  const footerLinks: FooterLink[] = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 backdrop-blur-sm backdrop-filter"
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-white/5 dark:bg-white/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Rakib Khan
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Rampura, Dhaka, Bangladesh</li>
              <li className="text-gray-600 dark:text-gray-300">+880 1687014788</li>
              <li className="text-gray-600 dark:text-gray-300">khanrakib218@gmail.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200/20 dark:border-gray-700/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <BiCopyright className="mr-1" />
              <span>{new Date().getFullYear()} Rakib Khan. All rights reserved.</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Made with ❤️ using React & TypeScript
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterComponent;
