import { Fragment, useEffect, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import smallLogo from "../../../assets/logo/smallLogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./index.css";
import { Icon } from "@iconify/react";

// const user = {
//   name: "GKT",
//   email: "gkt@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Get Funded", href: "/pages/landing-pages/get-funded", current: false },
  { name: "Pricing", href: "#pricingsection", current: false },
  { name: "Contact", href: "/pages/landing-pages/contact-us", current: false },
];
const userNavigation = [{ name: "Sign In", href: "/pages/authentication/sign-in" }];


export default function NavBar() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  
  const openBottomBar = ()=>{
    setIsSidebarOpen(true)
  }
  


  return (
    <>
      <nav className="bg-almost-black py-10 px-16 flex items-center justify-between h-[15vh]">
          <Link to="/">
            <img src="smallLogo.png" className="w-10 h-10 "/>
          </Link>
          <button className="md:hidden" onClick={openBottomBar}>
            <Bars3Icon className="h-10 w-10" color="white"/>
          </button>
          <div className="gap-7 items-center hidden md:flex">
            {navigation.map((link,idx)=>(
                <Link key={idx} className="text-white font-regular text-sm" to={link.href}>{link.name}</Link>
            ))}
            <Link className="text-brand-green text-sm font-medium">Register</Link>
            <Link className="border-2 rounded-xl px-6 text-brand-green text-sm py-2 font-medium" to="/pages/authentication/sign-in">Log In</Link>
          </div>
      </nav>
      {isSidebarOpen &&
        <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>
      }
    </>
  )
}

function Sidebar({setIsSidebarOpen}){
  const closeSidebar = ()=>{
    setIsSidebarOpen(false)
  }
  
  return (
    <aside className="p-10 h-screen absolute top-0 left-0 w-screen flex flex-col md:hidden">
      <div className="w-full flex items-center justify-between mb-10"> 
        <Link to="/">
            <img src="smallLogo.png" className="w-10 h-10 "/>
        </Link>
        <button className="text-white text-xl" onClick={closeSidebar}>X</button>
      </div>
      <div className="gap-10 items-center flex flex-col">
            {navigation.map((link,idx)=>(
                <Link key={idx} className="text-white font-regular text-sm" to={link.href}>{link.name}</Link>
            ))}
            <Link className="text-brand-green text-sm font-medium" to="/pages/authentication/register">Register</Link>
            <Link className="border-2 rounded-xl px-6 text-brand-green text-sm py-2 font-medium" to="/pages/authentication/sign-in">Log In</Link>
      </div>
    </aside>
  )
}