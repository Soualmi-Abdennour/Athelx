import React from "react";
import Logo from "./Logo";
import { Menu, Search } from "lucide-react";
import ButtonPrimary from "./buttonPrimary";
import homeIcon from '/icons/home.svg'
import accountIcon from '/icons/account.svg'
// import bgGradientImage from '/images/bg-gradient.png'
import cartIcon from '/icons/cart.svg'
import GradientBorder from "./GradientBorder";

function Header({isConnected}) {
  // const [isConnected,_setIsConnected]=useState(true)
    return (
      <header className="flex items-center gap-20 h-[76px] max-w-[1300px] mx-auto ">
        <Logo></Logo>
        <div className="flex items-center relative z-0  rounded-full flex-1 py-2 px-6 gap-6 mr-8">
          <GradientBorder
            borderWidth={4}
            className="left-0 top-0"
          ></GradientBorder>
          <Search size={35} className="text-primary"></Search>
          <input
            className="flex-1 placeholder:text-[#A4A0A0] outline-none border-none text-white "
            type="text"
            placeholder="Rechercher"
          ></input>
        </div>
        {isConnected ? (
          <div className="flex gap-4">
            <img src={homeIcon} width={49} height={44}></img>
            <img src={accountIcon} width={49} height={44}></img>
            <img src={cartIcon} width={49} height={44}></img>
          </div>
        ) : (
          <ButtonPrimary>Connection</ButtonPrimary>
        )}
        <div>
          <Menu className="text-white" width={36} height={38}></Menu>
        </div>
      </header>
    );
}

export default Header;
