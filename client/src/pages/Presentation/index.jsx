import HeroServiceCard from "components/HeroServiceCard/HeroServiceCard";
import HowItWorksCard from "components/HowItWorksCard/HowItWorksCard";
import Footer from "examples/Footer";
import Navbar from "examples/Navbars/NewNavBar/NavBar";
import { Link } from "react-router-dom";


function Presentation() {
  return (
    <>
      <Navbar />  
      <main className="min-h-[85vh] bg-almost-black relative flex justify-center md:justify-start">
        <div className="md:pl-28 flex flex-col items-center md:items-start gap-10 pt-20 sm:pt-10 z-10">
          <div className="flex flex-col items-center md:items-start">
            <img src="hero-logo.png" className="w-[250px] sm:w-[400px]"/>
            <h1 className="text-white text-center md:text-start font-medium w-[80%] text-lg md:text-2xl">Your <span className="text-brand-green">go-to place</span> when you want to learn <span className="text-brand-green">Stocks</span>!!</h1>
          </div>
          <Link className="border-2 rounded-xl px-6 text-brand-green text-lg py-2 font-medium cursor-pointer" to="/pages/authentication/register">Create account</Link>
        </div>
        <img src="landing-vector.svg" className="absolute bottom-0"/>
      </main>
      <main className="bg-almost-black flex flex-col items-center pb-40">
        <div className="w-full h-[80px] bg-gradient-to-b from-[#162113] to-almost-black"></div>
        <h1 className="text-xl md:text-4xl text-center text-white uppercase space-crus-italic tracking-wider w-3/4 xl:w-1/2 italic">Discover <span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Finstox </span>Your Path to <span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Financial Excellence!</span></h1>
        <section className="mt-10 md:mt-20 relative w-full">
          <img src="circle-left.svg" className="absolute left-0 w-[20%]"/>
          <img src="circle-right.svg" className="absolute right-0 w-[20%]"/>
          <img src="demo.png" className="relative w-[90%] mx-auto "/>
        </section>
      </main>
      <main className="bg-almost-black flex flex-col items-center">
        <h1 className="text-xl md:text-4xl text-center space-crus-italic text-white mb-2 uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">Comprehensive Services</span></h1>
        <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">Your Financial Journey, All in One Place</span></h1>
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
        {/* <img src="chart.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 w-full"/> */}
      </main>
      <main className="bg-almost-black flex flex-col items-center gap-20 pb-20">
        <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">How it </span><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">works?</span></h1>
        <section className="flex flex-wrap items-center justify-center gap-5">
          <HowItWorksCard stepNumber="1" title="Learn"/>
          <HowItWorksCard stepNumber="2" title="Practice"/>
          <HowItWorksCard stepNumber="3" title="Analyse"/>
          <HowItWorksCard stepNumber="4" title="Earn"/>
        </section>
      </main>
      <main className="bg-almost-black items-center pb-20 flex justify-around">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#78BE5A] via-[#74C34F] to-[#1C790A] bg-clip-text text-transparent">pricing</span></h1>
          <h1 className="uppercase w-full space-crus-italic text-3xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">START YOUR JOURNEY NOW !!</h1>
        </div>
        <div className="flex flex-col items-center border-brand-green border-2 p-10 rounded-2xl gap-2">
          <h1 className="uppercase w-full space-crus-italic text-2xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">RS. 99</h1>
          <div className="w-[100px] h-[4px] bg-gradient-to-br from-brand-green to-white shadow-lg shadow-brand-green rounded-full"></div>
          <h1 className="uppercase w-full space-crus-italic text-2xl text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">PER MONTH</h1>
        </div>
      </main>
      <footer className="bg-almost-black pb-2">
        <h1 className="text-center font-light text-sm tracking-wide text-white">Finstox &#169; 2024</h1>
      </footer>
    </>
  );
}

export default Presentation;
