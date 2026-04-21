'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, X, BookOpen } from 'lucide-react';
import Image from 'next/image';

/* ─── TIMELINE DATA (text extracted from uploaded images) ───────────────── */
const timelineTabs = [
  {
    id: 'all',
    label: 'Class 8th–12th',
    note: null,
    slogan: null,
    steps: [
      { month: 'April', milestone: true, title: '8TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 8 Preparation', desc: null },
      {
        month: 'June – September', milestone: false, title: 'Profile Building Discussion',
        desc: 'Discussion on profile building so that student makes up his mind and start taking small steps for better profiling.\n\nNote: Begin preparing for the AP exam in August for the exam in May.',
      },
      { month: 'October', milestone: true, title: '8 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: false, title: '9TH STANDARD', desc: null },
      { month: 'May', milestone: false, title: 'PSAT 9 Preparation', desc: 'Attempt first AP and start preparing for others' },
      { month: 'June – July', milestone: false, title: 'Do Summer School', desc: null },
      { month: 'August – September', milestone: false, title: 'Concrete Steps on Profile Building', desc: null },
      { month: 'October', milestone: true, title: '9 – PSAT ATTEMPT', desc: null },
      { month: 'January – February', milestone: false, title: 'Choose Summer School', desc: null },
      { month: 'April', milestone: true, title: '10th Standard Start (yay :D)', desc: null },
      {
        month: 'May – September', milestone: false, title: 'Key Activities',
        desc: '• Attempt AP Exam\n• Prepare for your SAT/ACT exam\n• Go to summer school\n• Concrete steps on profile building',
      },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      {
        month: 'August', milestone: true, title: 'SAT/ACT Attempt 2 (take this at least now)',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 IFF', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '10',
    label: 'Class 10th',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '10th Standard Start (yay :D)', desc: null },
      { month: 'May', milestone: false, title: 'Attempt AP Exam', desc: null },
      { month: 'June', milestone: false, title: 'Prepare for your SAT/ACT exam', desc: null },
      { month: 'July', milestone: false, title: 'Go to Summer School', desc: null },
      { month: 'August', milestone: false, title: 'Prepare for your SAT/ACT exam', desc: null },
      { month: 'September', milestone: false, title: 'Concrete steps on profile building', desc: null },
      { month: 'October / December', milestone: true, title: 'SAT/ACT Attempt 1 (take this)', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for your Summer School', desc: null },
      { month: 'April', milestone: false, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      {
        month: 'August', milestone: true, title: 'SAT/ACT Attempt 2 (take this at least now)',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 3 IFF', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '11',
    label: 'Class 11th',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'April', milestone: true, title: '11TH STANDARD', desc: null },
      { month: 'June – July', milestone: false, title: 'Summer School', desc: null },
      { month: 'August', milestone: true, title: 'SAT/ACT Attempt 1', desc: 'Note: Begin preparing for the AP exam in August for the exam in May.' },
      {
        month: 'September', milestone: false, title: 'College Research & Scholarship Tips',
        desc: 'Tip: Make an excel sheet containing all college and course details. Max 12 colleges (5–6 Dream Universities, 6–7 Target, 3–4 Safe)\n\nGoogle search tip: Enter "<college name> international undergraduate student scholarships" to get scholarship info.',
      },
      { month: 'October', milestone: true, title: 'SAT/ACT Attempt 2', desc: null },
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
  {
    id: '12',
    label: 'Class 12th',
    note: 'NOTE: Those who start their SAT Prep in 12th, can attempt in the month of March/May/August/October/December',
    slogan: "GRAB YOUR CHANCES TO PROVE YOU, YOU'RE NOT SO LATE",
    steps: [
      { month: 'January – February', milestone: false, title: 'Research for Pre-college Programs', desc: null },
      { month: 'April', milestone: true, title: '12th Standard', desc: null },
      { month: 'June – July', milestone: false, title: 'Pre-college Program', desc: null },
      { month: 'August', milestone: true, title: 'Online Applications Open', desc: 'Common App / Coilation App / Quest Bridge' },
      {
        month: 'September / October', milestone: false, title: 'College Essay & Documents',
        desc: 'Collect your Predicted scores certificate and LOR and prepare your college essay for early action. Make sure your counselor and teachers have uploaded your documents on time.\n\nTip: Fill the CSS profile for US scholarships.',
      },
      { month: 'November', milestone: false, title: 'Early Action Deadlines', desc: 'Early action application deadline November 1st – November 30th, drags down to further months depending upon the colleges.' },
      {
        month: 'December', milestone: false, title: 'Regular Decision & Board Exams',
        desc: 'Regular Decision, Application Deadlines December to January drags down to further months.\n\nMany Colleges do have their application deadlines till July end and some colleges have rolling admission policy.\n\nSubmit all your applications. 12th BOARD EXAMS also you have to give!',
      },
      { month: 'April', milestone: false, title: 'Study for and give TOEFL/IELTS/PTE', desc: null },
      { month: 'May – July', milestone: false, title: 'Acceptance, Fee Submission, VISA Completion', desc: 'Attending Pre-departure orientations' },
      { month: 'August', milestone: true, title: 'Bon Voyage!! Congratulations 🎉', desc: null },
    ],
  },
];

/* ─── TESTIMONIAL DATA ───────────────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Hardik',
    score: 'SAT 1520',
    location: 'Gurgaon',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/hardik1.jpeg',
    text: "I'm Hardik from Gurgaon, and on my first attempt at the SAT, I scored 1520. I appreciate EduQuest for their helpful guidance. Their direction through digital SAT coaching supported me to get such a high score. They gave me a lot of insightful recommendations. Additionally, Rupali maam helped me immensely in one of summer programme applications recently.",
    youtubeId: 'ABC123xyz',
  },
  {
    name: 'Seher Taneja',
    score: 'SAT 1510',
    location: 'Delhi',
    photo: '',
    text: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful and I will be forever grateful for their guidance. They helped me identify and work on my weak spots and gave me a consistent way to improve. I think EduQuest is one of its kind in the teaching space.",
    youtubeId: '',
  },
  {
    name: 'Hiya Garg',
    score: 'SAT 1480',
    location: 'Delhi',
    photo: '',
    text: "I got a 1480 in my SAT and EduQuest was a huge part of my journey. EduQuest, in my opinion, is unique in the field of education. This is the first time I've come across a group of professors so willing to help you at every turn. EduQuest, thank you!",
    youtubeId: '',
  },
  {
    name: 'Avinash Biju',
    score: 'SAT 1500',
    location: 'UAE',
    photo: '',
    text: "I scored 1500, 800 in Maths and 700 in English. EduQuest is a group of compassionate and hardworking teachers who are always ready to help you out. They always went the extra mile via digital SAT classes to ensure that I had access to helpful resources. Without them, I would not have achieved the score I have.",
    youtubeId: '',
  },
  {
    name: 'Aaisha Sawlani',
    score: 'SAT 1450',
    location: 'Nigeria',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Aaisha-Sawlani.jpeg',
    text: "I scored 1450 in SAT August exam. I am extremely proud of the way Eduquest has coached me. They understood the proactive side of expectations and ensured we can easily overcome the tough side of SAT. Their framework is exemplary and very robust. Thank You Eduquest, I owe my SAT success to you.",
    youtubeId: '',
  },
  {
    name: 'Soham Sharma',
    score: 'SAT 1500 · AP CS 5/5',
    location: 'New Delhi',
    photo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Soham.jpeg',
    text: "I prepared for the AP exam with EduQuest and scored 1500, with perfect scores in AP CS 5/5. Throughout my AP journey, EduQuest and its team have been supportive. The mocks were almost identical to the real test, which helped me prepare. I have to thank EduQuest for the score I have achieved.",
    youtubeId: '',
  },
  {
    name: 'Alicya',
    score: 'AP 5/5 × 3 subjects',
    location: 'New Delhi',
    photo: '',
    text: "I scored 5/5 in Microeconomics, Macroeconomics and Calculus AB in my AP tests in 2021. The guidance I received from Eduquest was essential. The prompt doubt clearing and regular tests after explanation of concepts made preparing for the test a breeze! Thanks EduQuest!",
    youtubeId: '',
  },
];

/* ─── YOUTUBE MODAL ──────────────────────────────────────────────────────── */
function YouTubeModal({ videoId, name, onClose }: { videoId: string; name: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 bg-gray-900">
          <p className="text-white text-sm font-semibold">{name} — Student Review</p>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close video">
            <X size={20} />
          </button>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${name} testimonial video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const [current, setCurrent] = useState(0);
  const [videoModal, setVideoModal] = useState<{ id: string; name: string } | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];
  const tab = timelineTabs[activeTab];

  return (
    <section className="bg-white py-16 px-4 md:px-12" id="testimonials">
      {videoModal && (
        <YouTubeModal videoId={videoModal.id} name={videoModal.name} onClose={() => setVideoModal(null)} />
      )}

      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Student Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">What Our Students Say</h2>
          <p className="text-gray-500">Real results from real students across India and the world</p>
        </div>

        {/* ── Highlight bar ── */}
        <div className="bg-blue-700 rounded-2xl p-6 md:p-8 text-center text-white mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-200 mb-2 font-medium">
            Highest Number of SAT | ACT Scores Ever
          </p>
          <h3 className="text-2xl md:text-3xl font-black">SAT 1590–1600 &nbsp;|&nbsp; ACT 36</h3>
          <p className="text-blue-200 text-sm mt-2">Maximize your chances of high scores with EduQuest</p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-white text-blue-700 font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Request a Callback
          </a>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ════ LEFT: TIMELINE ════ */}
          <div className="w-full lg:w-[44%] rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

            {/* Header */}
            <div className="bg-blue-700 px-6 py-4 flex items-center gap-3">
              <BookOpen size={18} className="text-blue-200" />
              <h3 className="text-white font-bold text-base tracking-wide">Academic Timeline</h3>
            </div>

            {/* Tab pills */}
            <div className="flex flex-wrap gap-2 p-4 border-b border-gray-100 bg-white">
              {timelineTabs.map((tl, i) => (
                <button
                  key={tl.id}
                  onClick={() => setActiveTab(i)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {tl.label}
                </button>
              ))}
            </div>

            {/* Timeline steps */}
            <div className="bg-gray-50 p-5 overflow-y-auto max-h-[580px]">
              <div className="relative">
                {/* Vertical spine */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-blue-100" />

                <div className="space-y-0">
                  {tab.steps.map((step, si) => (
                    <div key={si} className="flex gap-4 relative">
                      {/* Dot */}
                      <div className="shrink-0 mt-1 z-10">
                        {step.milestone ? (
                          <div className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white shadow ring-2 ring-cyan-200 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`pb-5 flex-1 min-w-0 ${si === tab.steps.length - 1 ? 'pb-1' : ''}`}>
                        {/* Month badge */}
                        <span className="inline-block text-[10px] font-bold text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mb-1">
                          {step.month}
                        </span>

                        {/* Title */}
                        <p className={`text-sm leading-snug mb-1 ${
                          step.milestone
                            ? 'font-extrabold text-blue-800'
                            : 'font-semibold text-gray-800'
                        }`}>
                          {step.title}
                        </p>

                        {/* Description */}
                        {step.desc && (
                          <div className="bg-white border border-blue-50 rounded-lg px-3 py-2 mt-1">
                            {step.desc.split('\n\n').map((para, pi) => (
                              <p
                                key={pi}
                                className={`text-xs leading-relaxed ${pi > 0 ? 'mt-2' : ''} ${
                                  para.startsWith('Submit') || para.startsWith('Note:')
                                    ? 'font-bold text-blue-700'
                                    : para.startsWith('Tip:') || para.startsWith('Google')
                                    ? 'font-semibold text-amber-700 bg-amber-50 rounded px-1'
                                    : 'text-gray-600'
                                }`}
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note + Slogan at bottom */}
              {tab.note && (
                <div className="mt-4 space-y-3">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800 leading-relaxed font-medium">{tab.note}</p>
                  </div>
                  {tab.slogan && (
                    <div className="bg-blue-700 rounded-xl p-3 text-center">
                      <p className="text-xs font-extrabold text-white tracking-wide uppercase leading-relaxed">
                        {tab.slogan}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ════ RIGHT: TESTIMONIAL ════ */}
          <div className="w-full lg:flex-1">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#1a56db" color="#1a56db" />
                ))}
              </div>

              {/* Score badge */}
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100 mb-5">
                {t.score}
              </span>

              {/* Student photo — prominent display */}
              <div className="flex justify-center mb-5">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-4xl shadow-md border-4 border-blue-300">
                    {t.name[0]}
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic text-center">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex flex-col items-center gap-1 py-4 border-t border-b border-gray-200 mb-5">
                <p className="font-bold text-gray-900 text-base">{t.name}</p>
                <p className="text-sm text-blue-600 font-semibold">{t.score}</p>
                <p className="text-xs text-gray-400">{t.location}</p>

                {/* YouTube play button — only shown when youtubeId is set */}
                {t.youtubeId && (
                  <button
                    onClick={() => setVideoModal({ id: t.youtubeId, name: t.name })}
                    className="mt-3 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
                    aria-label={`Watch ${t.name}'s video testimonial`}
                  >
                    <Play size={13} fill="white" />
                    Watch Video Review
                  </button>
                )}
              </div>

              {/* Nav controls */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors text-gray-600"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors text-gray-600"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-blue-700 w-5' : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs text-gray-400 font-medium">
                  {current + 1} / {testimonials.length}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}