import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import SchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructor from "./components/Instructors";
import Footer from "./components/Footer";
import TeacherSection from "./components/FeaturedCourses";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.99] antialiased bg-grid-white/[0.04] ">
      <HeroSection/>
      <TeacherSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <SchoolTestimonials/>
      <UpcomingWebinar/>
      <Instructor/>
      <Footer/>
      </main>
  );
}
