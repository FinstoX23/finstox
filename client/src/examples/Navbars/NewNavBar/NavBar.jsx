import { Fragment, useEffect, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import smallLogo from "../../../assets/logo/smallLogo.png"; 
import { HashLink as Link } from 'react-router-hash-link';

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
  { name: "Pricing", href: "/#pricingsection", current: false },
  { name: "Contact", href: "/pages/landing-pages/contact-us", current: false },
];
const userNavigation = [{ name: "Sign In", href: "/pages/authentication/sign-in" }];


export default function NavBar() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  
  const openBottomBar = ()=>{
    setIsSidebarOpen(true)
  }
  
  const closeSidebar = ()=>{
    setIsSidebarOpen(false)
  }
  
  useEffect(()=>{
    if(isSidebarOpen){
      console.log('hiding')
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = ""
    }
  },[isSidebarOpen])

  return (
    <>
      <nav className="bg-almost-black py-10 px-16 flex items-center justify-between">
          <Link to="/">
            <img src={smallLogo} className="z-100 w-10 h-10 hover:hidden"/>
          </Link>
          {isSidebarOpen ? <button className="z-100 text-white text-xl" onClick={closeSidebar}>X</button>:
            <button className="z-100 md:hidden" onClick={openBottomBar}>
              <Bars3Icon className="z-100 h-10 w-10" color="white"/>
            </button>
          }
          <div className="z-100 gap-7 items-center hidden md:flex">
            {navigation.map((link,idx)=>(
                <Link key={idx} className="z-100 text-white font-regular text-sm" to={link.href}>{link.name}</Link>
            ))}
            <Link className="z-100 text-brand-green text-sm font-medium">Register</Link>
            <Link className="z-100 border-2 rounded-xl px-6 text-brand-green text-sm py-2 hover:bg-brand-green hover:text-black font-medium" to="/pages/authentication/sign-in">Log In</Link>
          </div>
      </nav>
          {isSidebarOpen &&
            <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>
          }
    </>
  )
}

function Sidebar(){
  return (
    <aside className="bg-almost-black p-10 min-h-[100vh] min-w-[100vw] flex flex-col md:hidden">
      <div className="gap-10 items-center flex flex-col bg-almost-black">
            {navigation.map((link,idx)=>(
                <Link key={idx} className="z-100 text-white font-regular text-sm" to={link.href}>{link.name}</Link>
            ))}
            <Link className="z-100 text-brand-green text-sm font-medium z-100" to="/pages/authentication/register">Register</Link>
            <Link className="z-100 border-2 hover:hidden rounded-xl px-6 text-brand-green text-sm py-2 font-medium" to="/pages/authentication/sign-in">Log In</Link>
      </div>
      </aside>
  )
}