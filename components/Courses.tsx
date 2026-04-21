import {  Monitor,  ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'SAT / New Digital SAT Coaching',
    desc: 'Comprehensive prep with full-length digital practice tests, personalised feedback and expert faculty.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '📐',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    title: 'ACT Coaching',
    desc: 'Targeted preparation for all ACT sections — English, Math, Reading, Science and Writing.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '🎯',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    title: 'AP Coaching',
    desc: 'One-on-one and group coaching for 20+ AP subjects. Perfect scores guaranteed by our expert tutors.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '🏆',
    color: 'bg-green-50 text-green-600 border-green-100',
  },
  {
    title: 'PSAT Coaching',
    desc: 'Unique 4-year and 5-year integrated programs holistically preparing students for global academic success.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '📊',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    title: 'UCAT Coaching',
    desc: 'Specialised coaching for UK Medical admissions. Covering all 5 UCAT subtests with timed practice.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '🩺',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    title: 'LSAT Coaching',
    desc: 'Expert-led LSAT prep with logical reasoning, analytical writing and full mock exams.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '⚖️',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  },
  {
    title: 'TMUA Coaching',
    desc: 'For students targeting Maths, CS, Economics, Engineering at Cambridge, Warwick or LSE.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '📏',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    title: 'SSAT Exams',
    desc: 'Structured SSAT coaching for students targeting top boarding and private schools globally.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '📚',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    title: 'Tuition Classes',
    desc: 'IB, IGCSE, GCSE, CBSE, ICSE and international curriculum support with experienced tutors.',
    modes: 'Online Live · Hybrid · Classroom',
    icon: '🎓',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
  },
];

export default function Courses() {
  return (
    <section className="section-pad bg-white px-0 md:px-12 m-12 py-4" id="courses">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            SAT · ACT · PSAT · AP · UCAT · LSAT & More
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Expert Admission Counselling | Test Series | Comprehensive Test Prep for global universities
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border text-2xl mb-4 ${course.color}`}>
                {course.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{course.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
                <Monitor size={12} />
                {course.modes}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
              >
                Book a Demo <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}