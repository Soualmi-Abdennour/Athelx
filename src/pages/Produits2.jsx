import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProduitCard from "../components/ProduitCard";
import product1Image from "/images/product-1.png";
import product2Image from "/images/product-2.png";
import product3Image from "/images/product-3.png";
import product4Image from "/images/product-4.png";
import product5Image from "/images/product-5.png";
import product6Image from "/images/product-6.png";
import { ChevronLeft } from "lucide-react";

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
function Produits2Page() {
    return (
      <div>
        <Header isConnected={true}></Header>
        <section className="mt-20">
          <h2 className="heading-2 text-center  max-w-[1060px] mx-auto">
            COMPLÉMENTS ALIMENTAIRES
          </h2>
        </section>
        <section className="max-w-[1264px] mt-25 mx-auto">
          <div className="grid grid-cols-3 rounded-[40px] bg-primary/20 p-10 gap-10">
            {PRODUCTS.concat(PRODUCTS).map((product, index) => (
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
          <div className="mx-auto w-fit rounded-full mt-10 -mb-15">
            <ChevronLeft width={41} height={105} color="white" stroke="white" ></ChevronLeft>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
}

export default Produits2Page
