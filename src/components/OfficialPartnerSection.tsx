import Image from "next/image";
import React from "react";

const OfficialPartnerSection = () => {
  return (
    <section className="pt-24 pb-12 mb-12 flex justify-center">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold text-white max-w-36 uppercase">
            Official beehiiv Agency Partner
          </h2>
          <div
            className="border-b-2 border-white w-16 rotate-90 mx-4          
          "
          ></div>
          <Image
            src="/beehiv.png"
            alt="Beehiv Logo"
            width={200}
            height={500}
            className="mx-4"
          />
        </div>
      </div>
    </section>
  );
};

export default OfficialPartnerSection;
