import React from "react";
import NavBar from "examples/Navbars/NewNavBar/NavBar";
import { Link } from "react-router-dom";

function GetFundDashboard() {
  return (
      <>
        <NavBar />  
        <main className="min-h-[85vh] bg-almost-black flex justify-center pt-20">
          <div className="flex flex-col items-center gap-7"> 
            <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-[80%] italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">Get Funded: Qualify now and get funded upto</span></h1>
            <h1 className="text-xl md:text-4xl text-center text-white space-crus-italic uppercase tracking-wider w-[80%] italic">RS.10000</h1>
            <h1 className="text-md md:text-2xl text-center text-white space-crus-italic uppercase tracking-wider w-3/4 xl:w-1/2 italic"><span className="bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">Start your journey now!!</span></h1>
             <Link className="border-2 rounded-xl px-6 text-brand-green text-lg py-2 hover:bg-brand-green hover:text-black font-medium cursor-pointer" to="/pages/authentication/register">Get Funded</Link>
          </div>
        </main>
      </>
  );
}

export default GetFundDashboard;
