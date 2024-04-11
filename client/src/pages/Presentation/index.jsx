import HeroServiceCard from "components/HeroServiceCard/HeroServiceCard";
import HowItWorksCard from "components/HowItWorksCard/HowItWorksCard";
import { CheckCircleIcon,ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "examples/Navbars/NewNavBar/NavBar";
import { HashLink as Link } from 'react-router-hash-link';
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";



function Presentation() {

  const scrollRef = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView1 = useInView(ref1)
  const isInView2 = useInView(ref2)
  const isInView3 = useInView(ref3)

  return (
    <main className="relative">
      <Navbar />  
      <main className="min-h-[85vh] bg-almost-black relative flex justify-center md:justify-start">
        <div className="md:pl-28 flex flex-col items-center md:items-start gap-10 pt-20 sm:pt-10 z-10">
          <div className="flex flex-col items-center md:items-start">
            <img src="hero-logo.png" className="w-[250px] sm:w-[400px]"/>
            <h1 className="text-white text-center md:text-start font-medium w-[80%] text-lg md:text-2xl">Your <span className="text-brand-green">go-to place</span> when you want to learn <span className="text-brand-green">Stocks</span>!!</h1>
          </div>
          <Link className="border-2 rounded-xl px-6 text-brand-green text-lg py-2 hover:bg-brand-green hover:text-black font-medium cursor-pointer" to="/pages/authentication/register">Create account</Link>
        </div>
        <img src="landing-vector.svg" className="absolute bottom-0"/>
      </main>
      <main className="bg-almost-black flex flex-col items-center pb-40">
        <div className="w-full h-[80px] bg-gradient-to-b from-[#162113] to-almost-black"></div>
        <h1 className="text-xl md:text-4xl text-center text-white uppercase space-crus-italic tracking-wider w-3/4 xl:w-1/2 italic">Discover <span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Finstox </span>Your Path to <span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Financial Excellence!</span></h1>
        <section className="mt-10 md:mt-20 relative w-full" ref={ref1}>
        <motion.img initial={{ opacity:0 }}
              animate={isInView1 ? { opacity: 1 }:{}}
              transition={{ duration: 2 }}
              src="circle-left.svg" className="absolute left-0 w-[20%]"/>
        <motion.img initial={{ opacity:0 }}
              animate={isInView1 ?{ opacity:1 }:{}}
              transition={{ duration: 2 }}
              src="circle-right.svg" className="absolute right-0 w-[20%]"/>
          <motion.img
              src="demo.png" 
              className="relative w-[90%] mx-auto "
              initial={{ scale: 0 }}
              animate={isInView1 ?{ scale: 1 }:{}}
              transition={{ duration: 2 }}
            />
        </section>
      </main>
      <main className="bg-almost-black flex flex-col items-center">
        <h1 className="text-xl md:text-4xl text-center space-crus-italic text-white mb-2 uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Comprehensive Services</span></h1>
        <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">Your Financial Journey, All in One Place</span></h1>
        <div className="mt-16 flex gap-3 items-center">
          <h1 className="text-brand-green drop-shadow-lg shadow-green-300 ">Scroll to see all services</h1>
          <ArrowRightIcon color="#72E96F" className="w-7 h-7"/>
        </div>
        <section className="bg-chart-image items-center gap-10 pt-20 text-white max-w-[90%] overflow-x-auto grid grid-rows-2">
          <div className="flex items-end">
            <HeroServiceCard title="Financial Literacy" body={["Unlock a wealth of educational resources, tutorials, and interactive materials that simplify complex financial concepts."]}/>
            <div className="w-[400px] h-[450px]"></div>
            <HeroServiceCard title="Virtual trading" body={["Hone Strategies with 5 Lakh INR Virtual Capital in Realistic, Risk-Free Environments"]}/>
            <div className="w-[400px] h-[450px]"></div>
            <HeroServiceCard title="personalised mentorship" body={["Learn from past mistakes, optimize your trading with one-on-one guidance, and receive weekly expert strategies directly to your inbox/WhatsApp."]}/>
            <div className="w-[400px] h-[450px]"></div>
            <HeroServiceCard title="affordable access" body={["Join our journey to inclusive financial empowerment."]}/>
          </div>
          <div className="flex items-end">
            <div className="w-[320px] -translate-y-60 h-[450px]"></div>
            <HeroServiceCard translate={true}title="Real Funding" body={["Showcase your virtual trading skills to secure up to 5 lakhs for real market investments","Celebrate your success with a prestigious FinstoX certificate, a symbol of your trading prowess."]}/>
            <div className="w-[320px] -translate-y-60 h-[450px]"></div>
            <HeroServiceCard translate={true}title="Expert Guidance" body={["Elevate your trading with personalized mentorships by experienced traders.","We believe in analyzing mistakes to help you grow."]}/>
            <div className="w-[320px] -translate-y-60 h-[450px]"></div>
            <HeroServiceCard translate={true}title="Milestone celebration" body={["Achieve success milestones and earn real money with us. real market investments.","We celebrate every victory, big or small, on your trading journey."]}/>
            <div className="w-[320px] -translate-y-60 h-[450px]"></div>
            <HeroServiceCard translate={true}title="Continous support" body={["We're with you every step of the way on your financial journey."]}/>
          </div>
        </section>
      </main>
      <main className="bg-almost-black flex flex-col items-center gap-20 pb-20" ref={ref2}>
        <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">How it </span><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">works?</span></h1>
        
        <motion.section className="flex flex-wrap items-center justify-center gap-5" initial={{opacity:0}} animate={isInView2 ? {opacity:1} :{}} transition={{ duration: 2 }}>
          <HowItWorksCard stepNumber="1" title="Learn"/>
          <HowItWorksCard stepNumber="2" title="Practice"/>
          <HowItWorksCard stepNumber="3" title="Analyse"/>
          <HowItWorksCard stepNumber="4" title="Earn"/>
        </motion.section>
      </main>
      <main className="bg-almost-black items-center pb-20 flex justify-around px-5 gap-5" id="pricingsection" ref={ref3}>
        <motion.div className="flex flex-col items-center gap-5" initial={{translateX:"-100%"}} animate={isInView3 ? {translateX:0} :{}} transition={{duration:2}}>
          <h1 className="text-lg sm:text-3xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">pricing</span></h1>
          <h1 className="uppercase w-full space-crus-italic text-lg md:text-3xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">START YOUR JOURNEY NOW !!</h1>
        </motion.div>
        <motion.div className="flex flex-col items-center border-brand-green border-2 p-10 rounded-2xl gap-2 px-10 sm:px-24" initial={{opacity:0}} animate={isInView3 ? {opacity:1} :{}} transition={{duration:3}}>
          <h1 className="uppercase w-full space-crus-italic text-lg sm:text-2xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">RS. 99</h1>
          <div className="w-[100px] h-[3px] bg-gradient-to-b from-brand-green to-brand-green shadow-brand-green rounded-2xl"></div>
          <h1 className="uppercase w-full space-crus-italic text-md sm:text-2xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">PER MONTH</h1>
          <div className="mt-10 flex flex-col items-start gap-5">
              <div className="flex items-center gap-3">
                <CheckCircleIcon color="green" className="w-5 h-5 md:w-10 md:h-10"/>
                <h1 className="text-gray-300 font-regular text-sm sm:text-xl ">practice</h1>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon color="green" className="w-5 h-5 md:w-10 md:h-10"/>
                <h1 className="text-gray-300 font-regular text-sm sm:text-xl">analysis</h1>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon color="green" className="w-5 h-5 md:w-10 md:h-10"/>
                <h1 className="text-gray-300 font-regular text-sm sm:text-xl">get funded</h1>
              </div>
          </div>
        </motion.div>
      </main>
      <footer className="bg-almost-black pb-2">
        <h1 className="text-center font-light text-sm tracking-wide text-white">Finstox &#169; 2024</h1>
      </footer>
    </main>
  );
}

export default Presentation;
