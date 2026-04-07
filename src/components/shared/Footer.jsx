import { Mail, Phone,  ArrowRight, Calendar, Share2 } from 'lucide-react';



const Footer = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'Importance of Arts Integrating',
      date: '20 April, 2024',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Development Student Best Achievement',
      date: '20 April, 2024',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Resource Center', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Instructor', href: '#' },
    { label: 'Become A Teacher', href: '#' },
  ];

  const usefulLinks = [
    { label: 'All Courses', href: '#' },
    { label: 'Digital Marketing', href: '#' },
    { label: 'Design & Branding', href: '#' },
    { label: 'Storytelling & Voice Over', href: '#' },
    { label: 'News & Blogs', href: '#' },
  ];
  return (
    <footer className="bg-gradient-to-r from-[#163634] to-[#192A29] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border border-slate-600 rounded-2xl p-8 md:p-12 mb-16 ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Subscribe Our Newsletter For</h3>
              <h3 className="text-3xl md:text-4xl font-bold">Latest Updates</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Get In Touch!</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Fusce varius, dolor tempor interdum tristique bibendum.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:(702) 123-1478" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(702) 123-1478</span>
              </a>
              <a href="mailto:info@company.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@company.com</span>
              </a>
            </div>
            {/* <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Share2, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Company Info</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Useful Links</h4>
            <ul className="space-y-4">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase">Recent Post</h4>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <a key={post.id} href="#" className="flex gap-3 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 EdCore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;