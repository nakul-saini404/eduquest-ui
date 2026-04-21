import Image from 'next/image';

const universities = [
  { name: 'Yale', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Yale.webp' },
  { name: 'Stanford', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Stanford.webp' },
  { name: 'University of Pennsylvania', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Pennsylvania.webp' },
  { name: 'Oxford', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Oxford.webp' },
  { name: 'MIT', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/MIT.webp' },
  { name: 'LSE', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/LSE.webp' },
  { name: 'UCL', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/London.webp' },
  { name: "King's College London", logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Kings.webp' },
  { name: 'Imperial', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Imperial.webp' },
  { name: 'Columbia', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Columbia.webp' },
  { name: 'University of Chicago', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Chicago.webp' },
  { name: 'Cambridge', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Cambridge.webp' },
  { name: 'Brown', logo: 'https://eduquest.org.in/wp-content/uploads/2023/09/Brown.webp' },
];

export default function Universities() {
  return (
    <section className="section-pad bg-gray-50 px-0 md:px-12 m-12" id="universities">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Our Students&apos; Success
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Students&apos; Acceptances</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our students have been accepted to the world&apos;s most prestigious universities — and yours could be next.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="flex animate-marquee gap-8 w-max">
            {[...universities, ...universities].map((u, i) => (
              <div
                key={`${u.name}-${i}`}
                className="flex flex-col items-center justify-center bg-white rounded-xl border border-gray-100 p-4 w-32 h-24 flex-shrink-0 hover:shadow-md transition-shadow"
              >
                <Image
                  src={u.logo}
                  alt={u.name}
                  width={80}
                  height={50}
                  className="w-20 h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Free Consultation</h3>
            <p className="text-gray-500 text-sm mb-5">
              Get access to over 750+ universities across Canada, UK, US, Australia and more.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-blue text-white font-bold px-8 py-3 rounded-lg hover:bg-brand-blue-dark transition-colors text-sm"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}