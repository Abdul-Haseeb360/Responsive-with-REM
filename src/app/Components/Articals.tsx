import Image from "next/image";
import Artical1 from "../../../Public/Images/Image(2).png";
import Artical2 from "../../../Public/Images/Image(3).png";
import Artical3 from "../../../Public/Images/Image(4).png";
export default function ImageCards() {
  return (
    <div className=" lg:ml-20  ~py-2/14 ">
      <div className="mx-auto font-semibold text-2xl">
        <p className="~/md:~text-base/4xl lg:~lg:~text-4xl/6xl pb-8">
          Related articles or posts
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8">
          {/* First Card */}
          <div className="flex flex-col">
            <div className="aspect-square overflow-hidden  bg-white">
              <Image
                src={Artical1}
                alt="Yellow-orange cherries with stems"
                className="h-[346px]  object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-normal">Title</p>
            <p className="mt-4 text-lg font-normal text-[#828282]">Author</p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col">
            <div className="aspect-square overflow-hidden  bg-white">
              <Image
                src={Artical2}
                alt="Yellow-orange cherries with stems"
                className="h-[346px] object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-normal">Title</p>
            <p className="mt-4 text-lg font-normal text-[#828282]">Author</p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col">
            <div className="aspect-square overflow-hidden  bg-white">
              <Image
                src={Artical3}
                alt="Brown mushrooms pattern"
                className="h-[346px] object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-normal">Title</p>
            <p className="mt-4 text-lg font-normal text-[#828282]">Author</p>
          </div>
        </div>
      </div>
    </div>
  );
}
