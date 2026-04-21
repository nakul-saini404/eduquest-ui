'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is The EduQuest?',
    a: "We are an independent education consulting company that helps applicants plan their journey at the school, college or postgraduate level. At the heart of The EduQuest is our commitment to finding the 'best-fit' institution for every applicant. We are committed to helping our applicants and their families by first understanding their cultural backgrounds, financial plans, long-term goals, interests, academic performance and professional expertise.",
  },
  {
    q: 'What makes EduQuest different from other advisory services?',
    a: "We have an international team of highly educated consultants with over 20 years of consolidated experience. We recognise that every applicant is different — each is assigned a senior consultant and essay expert who work with fewer than ten clients at a time to ensure quality. We are data-driven, virtual, and maintain the highest ethical standards. Last year, our students received more than $8 million in scholarships.",
  },
  {
    q: 'How will EduQuest work with me?',
    a: "We have a team-based approach. Each applicant is assigned a primary consultant, who is their single point of contact and oversees all aspects of the application process. Our wider team includes an Essay Expert who polishes your essays, a Country Specialist with in-depth knowledge of admission processes, Leadership Support from our most experienced team member, and Individual Specialists for resumes, interviews and letters of recommendation.",
  },
  {
    q: 'When should I contact EduQuest?',
    a: "The earlier, the better. We advise parents and students as early as Grade 8 on pre-application strategy and profile development. For undergraduate applicants, we recommend contacting us at least six months prior to the regular deadline (i.e., by June 1), or earlier if you are considering early action/early decision. Business school applicants should contact us by April 1 of the year they plan to apply.",
  },
  {
    q: 'Will EduQuest help me choose the country I should study in?',
    a: "Yes, absolutely. Higher education institutions in popular destinations have unique characteristics, strengths and requirements. We help you brainstorm and strategise geography/location, taking into consideration factors such as your goals, family circumstances, finances, language and cultural issues, academic performance and interests.",
  },
  {
    q: 'Why should I use an education consultant?',
    a: "The college application process is complicated with various nuances. As experts in the field, an education consultant can provide in-depth insights about each institution and its ethos, while also giving you insight into the application requirements and process. Many education consultants have built relationships with admissions officers and may have up-to-date information about the latest admissions trends.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-gray-50 px-0 md:px-12 m-12" id="faq">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Have questions about our services, process or fees? We&apos;ve got answers.
            </p>
            <div className="bg-brand-blue rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
              <p className="text-blue-200 text-sm mb-4">Talk to one of our expert consultants for free — no obligation.</p>
              <a
                href="tel:+919958041888"
                className="inline-block bg-white text-brand-blue font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call +91-9958041888
              </a>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-brand-blue transition-transform ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}