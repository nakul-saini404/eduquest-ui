const reasons = [
  {
    num: '01',
    title: 'Expert SAT/ACT Coaching',
    desc: 'Our faculty includes top-percentile scorers and Ivy League graduates who know exactly what it takes.',
    icon: '🎯',
  },
  {
    num: '02',
    title: 'Unlimited Support',
    desc: 'Unmatched mentorship and doubt-clearing sessions until you hit your target score.',
    icon: '🔄',
  },
  {
    num: '03',
    title: 'Global University Network',
    desc: 'Strong associations with 2,000+ universities and institutes across USA, UK, Canada, Australia, and Singapore.',
    icon: '🌐',
  },
  {
    num: '04',
    title: 'One-to-One Mentorship',
    desc: 'Personalised attention to every student with dedicated consultant and essay expert assignments.',
    icon: '👨‍🏫',
  },
  {
    num: '05',
    title: 'Fast Results',
    desc: 'Our structured programs are designed to deliver measurable score improvements in the shortest time.',
    icon: '⚡',
  },
  {
    num: '06',
    title: 'Rigorous Practice Sessions',
    desc: 'Full-length mock exams mirroring the real test, with detailed analytics and improvement roadmaps.',
    icon: '📝',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-gray-50 px-0 md:px-12 m-12" id="why-us">
      <div className="container-max">
        <div className="text-center m-12 pt-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Why EduQuest
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We have understood students&apos; need for the right education, right direction, and well-rounded awareness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{r.icon}</span>
                <span className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">
                  {r.num}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}