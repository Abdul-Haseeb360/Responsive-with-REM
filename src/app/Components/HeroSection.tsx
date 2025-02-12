import Image from "next/image";
import React from "react";
import HeroImage from "../../../Public/Images/Hero Image.png";
import { Button } from "@/components/ui/button";
function Herosection() {
  return (
    <div >
    <div className="lg:ml-20 my-20 ">
      <h1 className="text-[64px] leading-[77px] font-bold ~md/lg:~text-2xl/6xl ">
        Article or post title
      </h1>
      <p className="text-[#828282] font-normal mt-6 ~md/lg:~text-2xl/xl">
        Subheading that sets up context, shares more info about the <br />{" "}
        author, or generally gets people psyched to keep reading
      </p>
      <Image src={HeroImage} alt="" className="py-20 " />
      <div className="mb-[38px]  ">
      <p className="font-medium ~md/lg:~text-2xl/xl">
        Body text for your whole article or post. Well put in some lorem ipsum
        to show how a filled-out page might look: <br/> 
      </p>
      <p className="font-medium ~md/lg:~text-2xl/xl my-6">
      Excepteur efficient emerging,
        minim veniam anim aute carefully curated Ginza conversation exquisite
        perfect nostrud nisi intricate Content. Qui international first-class
        nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod
        irure. Exclusive izakaya charming Scandinavian impeccable aute quality
        of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe
        aliquip, et Porter destination Toto remarkable officia Helsinki
        excepteur Basset hound. Zürich sleepy perfect consectetur. 
      </p>
      <p className="font-medium ~md/lg:~text-2xl/xl">
      Exquisite
        sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse
        bureaux cupidatat id minim. Sharp classic the best commodo nostrud
        delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt
        intricate airport handsome K-pop excepteur classic esse Asia-Pacific
        laboris.
      </p>
      </div>
      <Button className=" rounded-lg bg-black px-6 hover:bg-gray-800">Button</Button>
    </div>
    </div>
  );
}

export default Herosection;
