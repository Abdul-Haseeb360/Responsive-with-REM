import React from "react";
import Flower from "../../../Public/Images/Image.png";
import Goat from "../../../Public/Images/goat.png";
import Image from "next/image";
function Cards() {
  return (

    <div className="mx-auto max-w-7xl lg:ml-20 py-16 ">
      <div className="grid gap-8 md:grid-cols-2 ">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Flower}
              alt="Black and white photo of sheep"
              className="h-[436px] w-full object-cover"
            />
          </div>
          <p className="~text-xl/lg font-medium text-gray-800 pt-16">
            Excepteur efficient emerging, minim veniam anim cloying aute
            carefully curated gauche. Espresso exquisite perfect nostrud nisi
            intricate. Punctual adipisicing Borzoi, essential lovely tempor
            eiusmod irure. Exclusive izakaya charming Quezon City impeccable
            aute quality of life soft power pariatur occaecat discerning. Qui
            wardrobe aliquip, et Amadeus rock opera.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Goat}
              alt="Black and white photo of sheep"
              className="h-[436px] w-full object-cover"
            />
          </div>
          <p className="~text-xl/lg leading-relaxed text-gray-800 pt-16">
            Exquisite sophisticated iconic cutting-edge laborum deserunt esse
            bureaux cupidatat id minim. Sharp classic the best commodo nostrud
            delightful. Conversation aute wifey id. Qui sunt impeccable deserunt
            intricate airport excepteur classic esse riot girl.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
