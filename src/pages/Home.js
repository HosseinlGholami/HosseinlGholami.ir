import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { skills } from '../data/skills';

/** ---------- Small, precise SVG gauge ---------- */
function GaugeRing({
  level,               // 0–100
  Icon,                // lucide icon component
  title,
  description,
  className = '',
}) {
  // SVG geometry (kept simple + consistent)
  const size = 120;             // viewBox is square
  const cx = size / 2;
  const cy = size / 2;
  const stroke = 6;             // ring thickness
  const r = cx - stroke - 2;    // radius with padding
  const C = 2 * Math.PI * r;

  // Progress arc
  const pct = Math.max(0, Math.min(100, level));
  const dash = (pct / 100) * C;

  // Tip/dot coordinates (start at -90°, i.e. 12 o’clock)
  const angleDeg = -90 + (pct / 100) * 360;
  const angleRad = (angleDeg * Math.PI) / 180;
  const tipCx = cx + r * Math.cos(angleRad);
  const tipCy = cy + r * Math.sin(angleRad);

  return (
    <div
      className={`relative rounded-full shadow-sm bg-white flex items-center justify-center ${className}`}
      style={{ aspectRatio: '1 / 1' }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0"
        aria-hidden
      >
        {/* background track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#e5e7eb"           // gray-200
          strokeWidth={stroke}
        />
        {/* progress ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#2563eb"           // primary-600
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${C - dash}`}
          transform={`rotate(-90 ${cx} ${cy})`}  // start at 12 o’clock
        />
        {/* tip/dot at the exact end */}
        <circle cx={tipCx} cy={tipCy} r={3.5} fill="#2563eb" />
      </svg>

      {/* inner content */}
      <div className="relative z-10 w-[72%] h-[72%] rounded-full bg-white/95 shadow flex flex-col items-center justify-center text-center px-2 sm:px-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          {Icon ? <Icon size={22} className="text-primary-600" /> : null}
        </div>
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs leading-snug text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

/** -------------------- Page -------------------- */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* IMAGE first on mobile, second on desktop */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm lg:max-w-none">
                <div className="relative mx-auto lg:ml-auto lg:mr-0">
                  <div className="hidden sm:block absolute -top-4 -right-4 rounded-full bg-primary-600/10 w-72 h-72 md:w-80 md:h-80" />
                  <div className="relative rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-blue-500 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                    <img
                      src={personalInfo.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="inline-flex items-center gap-2">
                  Hi <span aria-hidden>👋</span>,
                </span>
                <br />
                I'm <span className="text-primary-600">{personalInfo.name}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {personalInfo.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/file/HosseinGholamiCV.pdf"
                  download="HosseinGholamiCV.pdf"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Download CV
                  <Download size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* About Section */}
<section className="section-padding bg-white px-4">
  <div className="max-w-7xl mx-auto">
    {/* Always 1 column */}
    <div className="grid grid-cols-1 gap-12 items-start">
      {/* My Journey */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
        <p className="text-gray-600 leading-relaxed">
          {personalInfo.about.journey}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {personalInfo.about.philosophy}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {personalInfo.about.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-primary-100 text-primary-800 px-3 py-1.5 rounded-full text-sm font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="section-padding bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills &amp; Expertise</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
               {personalInfo.skill}
              </p>
          </div>

          {/* ≤ md: 2 cols | md: 2 cols | lg: 4 cols */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center justify-center">
                <GaugeRing
                  level={skill.level}
                  Icon={skill.icon}
                  title={skill.name}
                  description={skill.description}
                  className="w-36 sm:w-44 lg:w-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2" />
            </a>
            <Link
              to="/work-experience"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
