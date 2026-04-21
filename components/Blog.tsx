import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'LSAT EXAM 2026 Preparation Guide for Beginners',
    desc: 'A Complete LSAT 2026 Preparation guide for beginners with syllabus, exam pattern and tips to score 170+',
    date: 'April 19, 2026',
    href: 'https://eduquest.org.in/lsat-2026-preparation-guide-for-beginners/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/Untitled-design-logo-2.png',
    tag: 'LSAT',
  },
  {
    title: 'LSAT 2026 Preparation Guide for Indian Students',
    desc: 'Dates, Syllabus Strategy & Score Goals — comprehensive LSAT exam 2026 preparation guide for Indian students',
    date: 'April 18, 2026',
    href: 'https://eduquest.org.in/lsat-2026-preparation-guide-for-indian-students-dates-syllabus-strategy-score-goals-lsat-exam-2026/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/eduquest-logo-pic.png',
    tag: 'LSAT',
  },
  {
    title: 'UCAT Exam 2026: Complete Guide — Fees, Dates, Syllabus & Preparation Strategy',
    desc: 'For Indian Students Targeting UK, Australia & New Zealand Medical Schools — everything you need to know.',
    date: 'April 18, 2026',
    href: 'https://eduquest.org.in/ucat-exam-2026-complete-guide-fees-dates-syllabus-preparation-strategy/',
    img: 'https://eduquest.org.in/wp-content/uploads/2026/04/UCAT-Exam-2026-1.webp',
    tag: 'UCAT',
  },
];

const tagColors: Record<string, string> = {
  LSAT: 'bg-yellow-100 text-yellow-700',
  UCAT: 'bg-red-100 text-red-700',
  SAT: 'bg-blue-100 text-blue-700',
  AP: 'bg-green-100 text-green-700',
};

export default function Blog() {
  return (
    <section className="section-pad bg-white px-0 md:px-12  m-12" id="blog">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between m-12 gap-4">
          <div>
            <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Useful Articles</h2>
            <p className="text-gray-500 mt-2">Want to know more about AP &amp; digital SAT preparation? Check out our blog.</p>
          </div>
          <a
            href="https://eduquest.org.in/blog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            View All Articles <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-44 bg-gray-50">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[a.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                    {a.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar size={12} /> {a.date}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}