import React from "react";
import logoIcon from "/icons/logo-icon.svg";
import facebookIcon from "/icons/facebook.svg";
import instagramIcon from "/icons/instagram.svg";
import twitterIcon from "/icons/twitter.svg";
import locationIcon from "/icons/location.svg";
import emailIcon from "/icons/email.svg";
import phoneIcon from "/icons/phone.svg";
import whatsappIcon from "/icons/whatsapp.svg";

import Logo from "./Logo";

function Footer() {
    return (
      <footer className="mt-30 pb-7">
        <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>
        <div className="grid grid-cols-3 grid-rows-[auto_auto] items-start mt-10 max-w-[1260px] mx-auto">
          <div className="flex flex-col items-center gap-9 row-span-2">
            <img src={logoIcon} alt="logo icon" width={212} height={166}></img>
            <Logo></Logo>
            <div className="flex gap-7">
              <img src={facebookIcon} alt="facebook icon"></img>
              <img src={instagramIcon} alt="instagram icon"></img>
              <img src={twitterIcon} alt="twitter icon"></img>
            </div>
          </div>
          <div className="flex flex-col items-center row-span-1">
            <div>
              <h2 className="font-Roboto font-bold text-3xl text-white">
                Liens rapides
              </h2>
              <ul className="w-full space-y-3 mt-8">
                <li className="text-white font-Roboto text-2xl font-normal">
                  Acceil
                </li>
                <li className="text-white font-Roboto text-2xl font-normal">
                  À Propos
                </li>
                <li className="text-white font-Roboto text-2xl font-normal">
                  FAQ
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end row-span-1">
            <div>
              <h2 className="font-Roboto font-bold text-3xl text-white">
                Contactez-nous
              </h2>
              <ul className="w-full space-y-3 mt-8">
                <li className="text-white font-Roboto text-2xl font-normal flex items-center gap-2">
                  <img
                    src={locationIcon}
                    alt="loaction icon"
                    width={29.44}
                  ></img>
                  <span>Amizour, Béjaïa, Algérie</span>
                </li>
                <li className="text-white font-Roboto text-2xl font-normal flex items-center gap-2">
                  <img src={emailIcon} alt="email icon" width={32.38}></img>
                  <span>contact@athelx.com</span>
                </li>
                <li className="text-white font-Roboto text-2xl font-normal flex items-center gap-2">
                  <img src={phoneIcon} alt="phone icon" width={28.46}></img>
                  <span>+213 X XX XX XX XX</span>
                </li>
                <li className="text-white font-Roboto text-2xl font-normal flex items-center gap-2">
                  <img
                    src={whatsappIcon}
                    alt="whatsapp icon"
                    width={33.36}
                  ></img>
                  <span>+213 X XX XX XX XX</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-start-2 col-start-2 row-span-1 col-span-2 mt-20 pl-10">
            <div className="w-full h-1 bg-[#918D8D]"></div>
            <p className="text-white font-Roboto text-2xl text-center mt-10">© 2025 AthelX • Tous droits réservés</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
