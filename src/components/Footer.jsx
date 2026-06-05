import React from 'react';
import { 
  FaHome, FaGraduationCap, FaBriefcase, FaCode, 
  FaUser, FaCertificate, FaLaptopCode, FaEnvelope, 
  FaPhoneAlt, FaLinkedin, FaGithub 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Projects', href: '#projects', icon: <FaLaptopCode /> },
    { name: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  const contactLinks = [
    { name: '+91 8519913550', href: 'tel:+918519913550', icon: <FaPhoneAlt /> },
    { name: 'nikhil.cp66@gmail.com', href: 'mailto:nikhil.cp66@gmail.com', icon: <FaEnvelope /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nikhil-chinnaposani', icon: <FaLinkedin /> },
    { name: 'GitHub', href: 'https://github.com/Chinnaposani-Nikhil', icon: <FaGithub /> },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a href="#home" className="text-3xl font-heading font-black text-white flex items-center gap-1">
              Nikhil<span className="text-primary">.dev</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs italic">
              "Aspiring Software Engineer passionate about building scalable web applications and solving real-world problems."
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Navigation</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              {navigationLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors group"
                >
                  <span className="text-slate-500 group-hover:text-primary transition-colors">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  target={link.name === 'LinkedIn' || link.name === 'GitHub' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-all shrink-0">
                    {link.icon}
                  </div>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Nikhil Chinnaposani. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="https://linkedin.com/in/nikhil-chinnaposani" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Chinnaposani-Nikhil" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
