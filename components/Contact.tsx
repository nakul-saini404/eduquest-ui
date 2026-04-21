'use client';
import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const interests = [
  'AP', 'Pre-AP', 'TMUA', 'Profile Building', 'UG Admission Counselling',
  'SAT / New Digital SAT', 'PSAT', 'ACT Online', 'ACT Classroom', 'UCAT', 'LSAT', 'Others',
];

export default function Contact() {
  const [form, setForm] = useState({ interest: '', name: '', mobile: '', email: '', city: '' });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-blue px-12 m-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Maximize Your Chances of Scoring SAT 1450+
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Sign Up to Score <strong className="text-white">Faster · Higher · Better</strong>
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Free personalised consultation with expert counsellor',
                'Expert faculty with 20+ years of consolidated experience',
                'Proven track record — SAT 1590–1600, ACT 36',
                '$8M+ in scholarships secured for our students',
                'Guidance for 2,000+ universities worldwide',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-blue-100 text-sm">
                  <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a href="tel:+919958041888" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                +91-9958041888
              </a>
              <a href="tel:+919717738553" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                +91-9717738553
              </a>
              <a href="mailto:contact@eduquest.org.in" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} />
                </div>
                contact@eduquest.org.in
              </a>
              <div className="flex items-start gap-3 text-blue-200 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            {done ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-500 text-sm">Our team will contact you within 1–2 business days.</p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-6 text-brand-blue font-semibold text-sm underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Request a Callback</h3>
                <p className="text-gray-400 text-sm mb-6">Fill in your details and we&apos;ll get back to you shortly.</p>
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m Interested in</label>
                    <select
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="">Select a course...</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        required
                        placeholder="Your city"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-brand-blue-dark transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    Request a Callback <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our privacy policy. We will never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}