// import TwoButtons from "./Components/twobuttons";
import PricingSection from "./Components/pricing";
import TopFeatures from "./Components/topFeatuers";
import Reviews from "./Components/reviews";
import ThirdPricing from "./Components/thirdpricing";
import TransparentHeader from "./Components/GlobalElements/transparentHeader";
import Trust from "./Components/trust";
import Faqs from "./Components/faqs";
import Blogs from "./Components/GlobalElements/blog";
import QandA from "./Components/HomePageComponents/qa";
import HowitWOrks from "./Components/howitworks";
import GreatSection from "./Components/Great";
import ForContent from "./Components/forContent";
import HeroSection from "./Components/HomePageComponents/HeroSection";
export default function Home() {
  return (
    <>
      <section>
        <TransparentHeader />
        <HeroSection />
        {/* <TwoButtons
          buttons={[
            {
              text: "Deploy now",
              href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
              className:
                "border border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
              iconSrc: "/vercel.svg",
              iconAlt: "Vercel logo",
            },
            {
              text: "Read our docs",
              href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
              className:
                "border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent md:w-[158px]",
            },
          ]}
        /> */}
        <Trust />
        <GreatSection />
        <TopFeatures />
        <HowitWOrks />
        <ForContent />
        <QandA />
        <Reviews />
        <ThirdPricing />
        <PricingSection />
        <Blogs />
        <Faqs />
      </section>
    </>
  );
}
