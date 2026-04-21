'use client';
import { useState } from 'react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

const interests = [
  'AP', 'Pre-AP', 'TMUA', 'Profile Building', 'UG Admission Counselling',
  'SAT / New Digital SAT', 'PSAT', 'ACT Online', 'ACT Classroom', 'UCAT', 'LSAT', 'Others',
];

const highlights = [
  'Guaranteed Scholarship',
  'Ivy League, Russell Group, Go8 and U15 Admissions Guidance',
  'SAT/ACT, AP, Profile Building, Admission Counselling, IELTS/TOEFL/PTE',
  'SOP & LOR Assistance',
  'Guidance for 2,000+ Universities India & Abroad',
];

const badges = [
  { label: 'Success Ratio', value: '98%', icon: '✅' },
  { label: 'Happy Students', value: '15K+', icon: '😊' },
  { label: 'In Scholarships', value: '$8M+', icon: '🏆' },
  { label: 'Years of Service', value: '10+', icon: '⭐' },
];

export default function Hero() {
  const [form, setForm] = useState({ interest: '', name: '', mobile: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-12  md:py-20">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <Star size={13} fill="currentColor" />
              India&apos;s #1 Study Abroad & Test Prep Consultant
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Fulfil Your <span className="text-brand-blue">Study Abroad</span> Dream with EduQuest
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Learn why more and more families are choosing EduQuest as their preferred partner in the university application process.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <CheckCircle2 size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://eduquestthailand.com/personality-assessment-test/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-blue-dark transition-colors text-sm"
              >
                Take Free Personality Test <ArrowRight size={16} />
              </a>
              <a
                href="https://test.eduquest.org.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
              >
                Mock Test Prep
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {badges.map((b) => (
                <div key={b.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-2xl font-extrabold text-brand-blue">{b.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5 uppercase tracking-wide">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Sign Up to Score</h2>
            <p className="text-brand-blue font-semibold text-lg mb-6">Faster · Higher · Better</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-500 text-sm">Our team will contact you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Your name"
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
                  By submitting, you agree to our privacy policy. We&apos;ll never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}