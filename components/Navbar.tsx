'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: 'https://eduquest.org.in/about-us/' },
  { label: 'EduQuest × Aptech', href: "https://eduquest.org.in/eduquest-aptech/"},
  {
    label: 'Test Prep',
    href: '#',
    children: [
      { label: 'AP Coaching', href: 'https://eduquest.org.in/ap-coaching/' },
      { label: 'Pre-AP Coaching', href: 'https://eduquest.org.in/pre-ap-coaching-in-gurgaon/' },
      { label: 'SAT Coaching', href: 'https://eduquest.org.in/sat/' },
      { label: 'IPMAT Coaching', href: 'https://eduquest.org.in/ipmat-coaching-and-profile-building-eduquest-2026/' },
      { label: 'ACT Coaching', href: 'https://eduquest.org.in/act/' },
      { label: 'TMUA Coaching', href: 'https://eduquest.org.in/tmua/' },
      { label: 'UCAT Coaching', href: 'https://eduquest.org.in/ucat-exam-2025/' },
      { label: 'IELTS Coaching', href: 'https://eduquest.org.in/ielts/' },
      { label: 'PTE Coaching', href: 'https://eduquest.org.in/pte/' },
      { label: 'TOEFL Coaching', href: 'https://eduquest.org.in/toefl/' },
      { label: 'DASA/CIWG', href: 'https://eduquest.org.in/dasa-and-ciwg-quota/' },
    ],
  },
  {
    label: 'Online Tuition',
    href: '#',
    children: [
      { label: 'Online Home Tuition', href: 'https://eduquest.org.in/online-home-tuition/' },
      { label: 'Online Tuition Classes', href: 'https://eduquest.org.in/online-tuition-classes-india/' },
      { label: 'Olympiads', href: 'https://eduquest.org.in/olympiad/' },
      { label: 'IB', href: 'https://eduquest.org.in/ib-international-baccalaureate/' },
      { label: 'Indian Curricula', href: 'https://eduquest.org.in/indian-curricula/' },
      { label: 'International Curricula', href: 'https://eduquest.org.in/international-curricula/' },
    ],
  },
  { label: 'Profile Building', href: 'https://eduquest.org.in/profile-building-programs/' },
  { label: 'Study Abroad', href: 'https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/' },
  { label: 'Blog', href: 'https://eduquest.org.in/blog' },
  { label: 'Contact Us', href: 'https://eduquest.org.in/contact-us/' },
  { label: 'EduQuest Summer Career Accelerator Program', href:"https://eduquest.org.in/eduquest-summer-career-accelerator-program/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-blue text-white text-xs px-2 py-2 hidden md:block">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919958041888" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={12} /> +91-9958041888
            </a>
            <a href="tel:+919717738553" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={12} /> +91-9717738553
            </a>
            <a href="mailto:contact@eduquest.org.in" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail size={12} /> contact@eduquest.org.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="http://eduquest-2026.web.app/" target="_blank" rel="noreferrer" className="hover:text-blue-200 font-medium">Practice Kiln</a>
            <a href="https://eduquest.org.in/free-download/" target="_blank" rel="noreferrer" className="hover:text-blue-200 font-medium">Free Guide Book</a>
            <a href="https://eduquest.org.in/franchise/" target="_blank" rel="noreferrer" className="hover:text-blue-200 font-medium">Franchise</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
                alt="EduQuest Logo"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue rounded-md hover:bg-brand-blue-light transition-colors"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="mt-0.5 opacity-60" />}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px] z-50 animate-fade-in">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-blue-dark transition-colors"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="container-max py-3 space-y-1">
              <div className="flex gap-2 pb-3 border-b border-gray-100 mb-2">
                <a href="tel:+919958041888" className="flex items-center gap-1 text-xs text-brand-blue font-medium">
                  <Phone size={12} /> +91-9958041888
                </a>
              </div>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-blue rounded-md hover:bg-brand-blue-light"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-blue-light pl-3">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noreferrer"
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-blue"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-blue rounded-md hover:bg-brand-blue-light"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href="#contact"
                  className="block w-full text-center bg-brand-blue text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-brand-blue-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}