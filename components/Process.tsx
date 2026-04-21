const steps = [
  {
    num: '01',
    title: 'Profile Analysis',
    desc: 'Our counsellors review your academic data, extracurricular activities and professional experience to identify strengths and craft an impactful application.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'University Selection',
    desc: 'Keeping your goals, qualifications, curriculum interests and cultural preferences in mind, our experts help you select a country, university and programme.',
    icon: '🏛️',
  },
  {
    num: '03',
    title: 'Test Preparation',
    desc: 'Your test scores qualify you to pursue a degree from top universities like Harvard, MIT, Stanford, Yale, ISB, INSEAD. EduQuest has guided thousands to their dream colleges.',
    icon: '📚',
  },
  {
    num: '04',
    title: 'Essays / SOPs / LORs',
    desc: 'We understand a good essay and SOP is not about the quality of language but you as a person and your story. Our experts craft compelling narratives.',
    icon: '✍️',
  },
  {
    num: '05',
    title: 'Interview Preparation',
    desc: 'Our specialists conduct recorded mock interviews with the most recent and commonly asked questions — with real-time and written feedback for improvement.',
    icon: '🎤',
  },
  {
    num: '06',
    title: 'Funding Your Degree',
    desc: 'We start by listing all possible scholarships a student can receive based on background and scores. Last year, our students received over $8 million in scholarships.',
    icon: '💰',
  },
  {
    num: '07',
    title: 'Post Landing Care',
    desc: 'Our dedicated international program coordinators provide adequate post-landing support to ensure a smooth transition in a foreign land.',
    icon: '✈️',
  },
];

export default function Process() {
  return (
    <section className="section-pad bg-white px-0 md:px-12 m-12" id="process">
      <div className="container-max">
        <div className="text-center mb-12 mt-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Study Abroad: Roadmap to Your Dream College
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A structured, 7-step journey from profile assessment to landing at your dream university.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-blue-200 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`md:flex items-start gap-8 md:gap-12 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 ${
                      i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Step number (center) */}
                <div className="hidden md:flex flex-col items-center justify-start pt-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg z-10">
                    {step.num}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}