import React from "react";
import Logo from "./Logo";
import { Menu, Search } from "lucide-react";
import ButtonPrimary from "./buttonPrimary";

function Header() {
    return (
      <header className="flex items-center gap-20 h-[76px] max-w-[1300px] mx-auto ">
        <Logo></Logo>
        <div className="flex items-center border_gradient rounded-full flex-1 py-2 px-6 gap-6 mr-8">
          <Search size={35} className="text-primary"></Search>
          <input
            className="flex-1 placeholder:text-[#A4A0A0] outline-none border-none text-white "
            type="text"
            placeholder="Rechercher"
          ></input>
        </div>
        <ButtonPrimary>Connection</ButtonPrimary>
        <div>
          <Menu className="text-white" width={36} height={38}></Menu>
        </div>
      </header>
    );
}

export default Header;
