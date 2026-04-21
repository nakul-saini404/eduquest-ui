import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const profiles = [
  {
    name: 'Rohit',
    bg: 'CSE/ISC – New Delhi',
    admit: 'Mech. Engineering, University of Toronto',
    story:
      'Rohit joined us with a multitude of interests but no direction. Through our personalized mentorship, we developed his profile and demonstrated his academic prowess in material engineering, leading to a hyper-specialisation in foldable structures.',
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Torronto.jpg',
    logoAlt: 'University of Toronto',
  },
  {
    name: 'Kavya',
    bg: 'IB – Mumbai',
    admit: 'Env. Engineering, NUS',
    story:
      "Kavya joined as a budding environmental scientist with interests in art and culture. Our work revolved around connecting these interests through an uncommon intersection — revamping a local wasteland into a bustling ecological and cultural center.",
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/NUS.png',
    logoAlt: 'NUS',
  },
  {
    name: 'Shalini',
    bg: 'ICSE/IB – Mumbai',
    admit: 'Mixed Streams, Brown University',
    story:
      "A runner and theater artist, Shalini was worried her lack of national awards would hold her back. Despite having no SAT score, we wove a compelling personal narrative showcasing academic focus and extracurricular resilience. Brown (Ivy League) accepted her.",
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/1024px-Cornell_University_seal_svg.webp',
    logoAlt: 'Brown University',
  },
  {
    name: 'Ayush',
    bg: 'CBSE/ISC – Kolkata',
    admit: 'Business, UBC Sauder',
    story:
      'Looking to study business with a sub-40% result in 11th grade math, we built a business profile centred around engagement with a beverage distributor, a beach cleanup campaign and polymer research — getting him into Canada\'s best business school.',
    logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/UBC.webp',
    logoAlt: 'UBC',
  },
];

export default function SuccessProfiles() {
  return (
    <section className="section-pad bg-white px-0 md:px-12 m-12" id="profiles">
      <div className="container-max">
        <div className="text-center m-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Student Profiles
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            A Few Profiles from Our 2020 Cohort
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every student has a unique story. Here&apos;s how we turned their potential into Ivy League and world-class acceptances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((p) => (
            <div key={p.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{p.bg}</p>
                </div>
                <Image
                  src={p.logo}
                  alt={p.logoAlt}
                  width={64}
                  height={64}
                  className="w-14 h-14 object-contain rounded-lg bg-white border border-gray-100 p-1"
                />
              </div>
              <div className="inline-block bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                🎓 {p.admit}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.story}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all">
                Join Now <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}