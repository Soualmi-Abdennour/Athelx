import { Star } from "lucide-react";
import React from "react";
import cartIcon from '/icons/cart.svg'
import GradientBorder from "./GradientBorder";

function ProduitCard({
  produitImage,
  produitName,
  produitPrice,
  produitDescription,
  produitRate,
}) {
  return (
    <div
      className="w-[356px] h-[385px] rounded-xl flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)",
        backdropFilter: " blur(2px)",
      }}
    >
      <div className="w-[343.97px] h-[373px] bg-white rounded-xl relative">
        <div className="absolute top-2 left-3 z-0 ">
          <div className="relative flex items-center w-fit font-Poppins font-bold gap-1.5 py-1 px-2.5 rounded-3xl">
            <GradientBorder
              className="top-0 left-0"
              borderRadius={15}
              borderWidth={4}
              direction="bottom"
            ></GradientBorder>
            <h2>{produitRate}</h2>
            <Star fill="#FFD057" stroke="#FFD057" size={14}></Star>
          </div>
        </div>
        <div className="w-[292px] h-[219px] mx-auto mt-9 rounded-[20px] overflow-clip">
          <img
            src={produitImage}
            alt="produit image"
            className="w-full h-full"
          ></img>
        </div>
        <div className="w-[281.89px] mx-auto mt-5">
          <div className="flex justify-between">
            <h2 className="font-Poppins font-semibold text-2xl tracking-wider">
              {produitName}
            </h2>
            <h2 className="font-Poppins text-2xl font-bold tracking-wider">
              {produitPrice} $
            </h2>
          </div>
          <h2 className="font-Poppins text-[14px] font-semibold tracking-wider text-[#7E7D7A] max-w-[161px]">
            {produitDescription}
          </h2>
          <div className="absolute right-3 bottom-2 w-[49px] h-[44px]">
            <img src={cartIcon} alt="cart icon" className="w-full h-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitCard;
