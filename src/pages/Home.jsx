import React from 'react'
import Header from '../components/Header'
import homeHeroImage from '/images/home-hero.png'
import Ellipse from '../components/Ellipse';
import ServiceCards from '../components/ServiceCards';
import Footer from '../components/Footer';
import ButtonPrimary from '../components/buttonPrimary';
import thirtyBadgeImage from '/images/Thirty-badge.png'

const PAGE_ELLIPSES = [
  {
    width: 484.01,
    height: 479.57,
    left: 101.05,
    top: 239.42,
  },
  {
    width: 484.01,
    height: 479.57,
    left: 951.1,
    top: 411.14,
  },
  {
    width: 446.47,
    height: 327.83,
    left: 135.17,
    top: 765.36,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 394.59,
    top: 982.21,
  },
  {
    width: 446.47,
    height: 421.09,
    left: 1149.89,
    top: 1155.89,
  },
  {
    width: 649.58,
    height: 659.39,
    left: -315.96,
    top: 1015.58,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 864.77,
    top: 2561.02,
  },
  {
    width: 649.58,
    height: 659.39,
    left: 16.68,
    top: 2393.23,
  },
  {
    width: 513.24,
    height: 477.27,
    left: -35.36,
    top: 3078.13,
  },
  {
    width: 469.03,
    height: 464.12,
    left: 456.41,
    top: 3122.29,
  },
];

function HomePage() {
    return (
      <div className="relative z-0 overflow-x-clip">
        <Header isConnected={false}></Header>
        <section className="max-w-[1300px] mx-auto ">
          <div className="absolute right-0 -z-10 ">
            <img src={homeHeroImage} alt="hero section image" />
          </div>
          <h2
            className="inline-block mt-44 heading-1  max-w-[950px]"
            style={{
              "--font-size": "78.5px",
              "--line-height": "107.9px",
            }}
          >
            ATTEINS TES{" "}
            <span className="text_gradient">OBJECTIFS SPORTIFS</span> AVEC ATHEL
            <span className="text_gradient">X</span>
          </h2>
          <p
            className="paragraph-1 max-w-[690px] pl-5 mt-15"
            style={{
              "--font-size": "32.38px",
              "--line-height": "39.2px",
            }}
          >
            Compléments, coachs et salles de sport réunis en un seul endroit.
            <br></br>
            Booste tes performances dès aujourd’hui !
          </p>
          <div className="mt-20 ml-33">
            <ButtonPrimary>Commencer maintenant</ButtonPrimary>
          </div>
        </section>
        <section>
          <h2
            className=" text-center mt-44 heading-1  relative after:content-[] after:h-1.5 after:w-70 after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:bottom-0 after:right-57"
            style={{
              "--font-size": "78.5px",
              "--line-height": "auto",
              "--letter-spacing": "0.01em",
            }}
          >
            Pourquoi choisir Athel<span className="text_gradient">X</span> ?
          </h2>
          <p
            className="paragraph-1  max-w-[1000px] text-center mx-auto mt-10"
            style={{
              "--font-size": "32.38px",
              "--line-height": "39.2px",
              "--letter-spacing":"0.02em"
            }}
          >
            AthelX, c’est bien plus qu’une simple plateforme. C’est l’allié de
            tous les athlètes qui veulent progresser, se surpasser et atteindre
            leurs objectifs plus rapidement.
          </p>
          <h2
            className="text-[#4257FA]  text-center mt-25 font-Roboto font-bold text-6xl leading-10 tracking-wide "
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            NOS SERVICES
          </h2>
          <ServiceCards></ServiceCards>
        </section>
        <section>
          <h2
            className="mt-30 heading-1 leading-16  text-center mx-auto tracking-wide max-w-[950px] relative after:content-[] after:h-1.5 after:w-131 after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:-bottom-10 after:left-1/2 after:-translate-1/2"
            style={{
              "--font-size": "58.87px",
              "--line-height": "62.8px",
              "--letter-spacing": "0.02em",
            }}
          >
            PRÊT À <span className="text_gradient">TRANSFORMER</span> TON
            ENTRAÎNEMENT AVEC <span className="text_gradient">ATHELX</span>?
          </h2>
          <p className="paragraph-1 max-w-[1000px] text-center mx-auto mt-20" style={{
            "--letter-spacing":"0.02em"
          }}>
            Athel<span className="text_gradient">X</span> t’accompagne dans
            chaque étape de ton évolution sportive. Ne laisse pas passer cette
            opportunité de progresser avec une équipe et une communauté dédiées
            à la performance.
          </p>
          <div
            className="relative mt-20 pt-5 pb-10 mx-auto rounded-4xl border-primary border-1 max-w-[1175px] text-center bg-white/10"
            style={{
              boxShadow:
                "inset 57.5984px -57.5984px 57.5984px rgba(194, 194, 194, 0.095), inset -57.5984px 57.5984px 57.5984px rgba(255, 255, 255, 0.095)",
              backdropFilter: "blur(27.0713px)",
            }}
          >
            <h2 className="font-Roboto font-bold text-[56px] leading-12 tracking-wide text-[#4257FA]">
              OFFRE SPÉCIALE !
            </h2>
            <p className="mt-12 paragraph-1 font-bold max-w-[1045px] mx-auto">
              Inscris-toi aujourd’hui et bénéficie d’un bon de réduction de{" "}
              <span className="text-primary">-30%</span> sur ta première
              commande de compléments !
            </p>
            <p className="mt-7 paragraph-1 max-w-[700px] mx-auto">
              Rejoins-nous dès maintenant et passe au niveau supérieur !
            </p>
            <ButtonPrimary
              textClassName="font-bold"
              buttonClassName="py-4 px-8 mx-auto mt-23"
              isDecorated={false}
            >
              CRÉER UN COMPTE MAINTENANT
            </ButtonPrimary>
            <img
              className="absolute -right-2 -bottom-8"
              width={340.5}
              src={thirtyBadgeImage}
              alt="thirty badge image"
            ></img>
          </div>
        </section>
        <Footer></Footer>
        {PAGE_ELLIPSES.map((ellipse, index) => (
          <Ellipse
            key={index}
            width={ellipse.width}
            height={ellipse.height}
            left={ellipse.left}
            top={ellipse.top}
          ></Ellipse>
        ))}
      </div>
    );
}

export default HomePage



