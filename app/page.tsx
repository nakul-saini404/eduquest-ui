import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import StudyAbroad from '@/components/StudyAbroad';
import Testimonials from '@/components/Testimonials';
import Universities from '@/components/Universities';
import SuccessProfiles from '@/components/SuccessProfiles';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <WhyChooseUs />
        <Process />
        <StudyAbroad />
        <Testimonials />
        <Universities />
        <SuccessProfiles />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <FloatingWidgets />
    </>
  );
}