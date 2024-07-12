import HeroSection from './HeroSection';
import { AboutSection } from './AboutSection';
import { StackSection } from './StackSection';
import { Websites } from './WebsitesSection';
import { SparklesPreview } from './SparklesSection';
import { Slide } from './FeedbackSection';
import Footer from './FooterSection';
import { FloatingNavbar } from './FloatingNavbarSection';

const Home = () => {

  return (
    <>
      <main className=" bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full ">
      <FloatingNavbar  />

        <HeroSection />
        <AboutSection />
        <StackSection />
        <Websites />
        <SparklesPreview />
        <Slide />
        <Footer />


      </main>
    </>

  );
};

export default Home;
