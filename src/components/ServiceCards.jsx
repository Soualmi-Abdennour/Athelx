import React from 'react'
import service_1 from '/images/service-1.png'
import service_2 from '/images/service-2.png'
import service_3 from '/images/service-3.png'
import service_4 from '/images/service-4.png'
import service_5 from '/images/service-5.png'

const SERVICES = [
  {
    title: "LES MEILLEURES SALLES  DE SPORT",
    image: service_1,
  },
  {
    title: "LES MEILLEURS COMPLÉMENTS",
    image: service_2,
  },
  {
    title: "DES COACHS QUALIFIÉS",
    image: service_3,
  },
  {
    title: "BLOG & CONSEILS D’EXPERTS",
    image: service_4,
  },
  {
    title: "COMMUNAUTÉ",
    image: service_5,
  }
];
function ServiceCards() {
    return (
      <div className="mt-30  flex overflow-x-clip relative z-0">
        <div
          className="h-[570px] w-[94%] absolute -z-10 rounded-4xl -bottom-10 left-[3%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(66, 192, 250, 0.23) 54.82%, rgba(39, 113, 148, 0.23) 92.47%)",
          }}
        ></div>
        <div className="flex flex-1 gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="relative rounded-[40px] overflow-clip  z-0 w-[497px] h-[627px] border-1 border-black"
            >
              <h2
                className="text-white text-center absolute z-0 top-20 left-1/2 -translate-x-1/2 w-[70%] font-Roboto font-bold text-4xl leading-10 tracking-wide"
                style={{
                  WebkitTextStroke: "1px black",
                }}
              >
                {service.title}
              </h2>
              <img
                src={service.image}
                alt="service image"
                className="h-full"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
}


export default ServiceCards;
