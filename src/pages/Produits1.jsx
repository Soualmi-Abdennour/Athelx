import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import heroBgImage from "/images/produits1-hero.png";
import ButtonPrimary from "../components/buttonPrimary";
import product1Image from "/images/product-1.png"
import product2Image from "/images/product-2.png"
import product3Image from "/images/product-3.png"
import product4Image from "/images/product-4.png"
import product5Image from "/images/product-5.png"
import product6Image from "/images/product-6.png"
import ProduitCard from "../components/ProduitCard";

const PRODUCTS = [
  {
    productName: "MATTE PROTEIN",
    productImage: product1Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "Matte protein jar mockup",
  },
  {
    productName: "PROTEIN",
    productImage: product2Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "protein jar mockup",
  },
  {
    productName: "Metallic PROTEIN",
    productImage: product3Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "Metallic protein jar mockup",
  },
  {
    productName: "ONE",
    productImage: product4Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "ONE Performance nutrition",
  },
  {
    productName: "Power Greens",
    productImage: product5Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "ONE Performance nutrition p",
  },
  {
    productName: "OWYN",
    productImage: product6Image,
    producRate: "4.8",
    productPrice: "0",
    productDescription: "Only what you need ",
  },
];

function Produits1Page() {
  return (
    <div className="relative z-0 overflow-x-clip">
      <div
        className="relative pb-43"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition:"top center"
        }}
      >
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-1 text-center  max-w-[1262px] mx-auto">
            DÉCOUVREZ NOS{" "}
            <span className="text_gradient">MEILLEURS PRODUITS</span> POUR
            BOOSTER VOS PERFORMANCES
          </h2>
          <p className="paragraph-2 max-w-[1000px] mx-auto mt-20">
            Des compléments alimentaires, équipements et accessoires
            sélectionnés pour vous aider à atteindre vos objectifs sportifs
          </p>
          <ButtonPrimary buttonClassName="mx-auto mt-20">
            Découvrez nos produits
          </ButtonPrimary>
          <div
            className="w-full h-74 bg-background absolute  -bottom-0 translate-y-1/2"
            style={{
              filter: "blur(60px)",
            }}
          ></div>
        </section>
      </div>

      <section className="max-w-[1264px] mx-auto">
        <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
          {PRODUCTS.map((product, index) => (
            <ProduitCard
              key={index}
              produitName={product.productName}
              produitImage={product.productImage}
              produitRate={product.producRate}
              produitDescription={product.productDescription}
              produitPrice={product.productPrice}
            ></ProduitCard>
          ))}
        </div>
        <div className="bg-primary py-2 px-4 mt-15 mx-auto w-fit rounded-full">
          <a
            href="#"
            className="font-Poppins font-medium text-lg tracking-wider"
          >
            Voir plus {">"}
          </a>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Produits1Page;
