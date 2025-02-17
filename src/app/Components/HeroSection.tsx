import Image from "next/image";
import React from "react";
import HeroImage from "../../../Public/Images/Hero Image.png";
import { Button } from "@/components/ui/button";
function Herosection() {
  return (
    <div >
      <div className="lg:ml-20 my-20 text-6xl">
        <h1 className="~/md:~text-base/4xl lg:~lg:~text-4xl/6xl pb-6 font-bold">
          Article or post title
        </h1>

        <p className="~/md:~text-base/xl lg:~lg:~text-xl/2xl text-justify text-[#828282]">
          Subheading that sets up context, shares more info about the <br />{" "}
          author, or generally gets people psyched to keep reading
        </p>
        <Image src={HeroImage} alt="" className="~py-4/20 " />
        <div className="~mb-2/12 container mx-auto">
          <p className="font-medium ~/md:~text-base/xl lg:~lg:~text-xl/2xl text-justify">
            Body text for your whole article or post. Well put in some lorem
            ipsum to show how a filled-out page might look: <br />
          </p>
          <p className="font-medium ~/md:~text-base/xl lg:~lg:~text-xl/2xl  my-6 text-justify">
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud <  br/>  nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod  <br/> irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat <br/> discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. <br/> Zürich sleepy perfect consectetur.
          </p>
          <p className="font-medium ~/md:~text-base/xl lg:~lg:~text-xl/2xl text-justify">
            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis
            Ababa esse bureaux cupidatat id minim. Sharp <br/> classic the best
            commodo nostrud delightful. Conversation aute Rochester id. Qui sunt
            remarkable deserunt intricate <br/> airport handsome K-pop excepteur
            classic esse Asia-Pacific laboris.
          </p>
        </div>
        <Button className=" rounded-lg bg-black ~px-4/8 ~py-2/8  ~/md:~text-base/xl lg:~lg:~text-lg/2xl hover:bg-gray-800">
          Button
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
