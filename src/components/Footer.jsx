import React from "react";
import { FaAlignCenter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className=" relative h-[448px] w-full bg-red-400 flex justify-center flex-col overflow-hidden">
      <div className="  ">
        <div className=" ">
          <img
            className=" w-full  bg-contain bg-center"
            src="public/banner2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-[448px] opacity-80  absolute bg-black w-full">
        <div className="  h-[448px]">
          <div>
            <div className="flex justify-between pt-20 pr-32 pb-48 pl-32">
              <div className=" flex">
                <FaAlignCenter className=" text-[42px] text-[#ffc80a] " />
                <h1 className=" text-[42px] text-[#ffc80a] font-font font-bold ml-2">
                  HB
                </h1>
              </div>
              <div>
                <div>
                  <h1 className=" font-font text-[25px] tracking-[2px] text-white pb-4 border-b">
                    OUTLET OPENING HOURS
                  </h1>
                  <p className="font-font text-[14px] tracking-[2px] text-white pt-8 pb-4 border-b">
                    Saturday - Friday 10.00 am - 10.00 pm
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h1 className=" font-font text-[25px] tracking-[2px] text-white pb-4 border-b">
                    CONTACT US
                  </h1>
                  <p className="font-font text-[14px] tracking-[2px] text-white pt-2 pb-2">
                    info@bfcbd.com
                  </p>
                  <p className="font-font text-[14px] tracking-[2px] text-white pt-2 pb-2">
                    09666 70 77 70
                  </p>
                  <p className="font-font text-[14px] tracking-[2px] text-white pt-2 pb-2">
                    House 56/1, Road-1, Block-C, Section -13
                  </p>
                  <p className="font-font text-[14px] tracking-[2px] text-white pt-2 pb-2">
                    Mirpur, Dhaka 1216
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" font-font w-full tracking-[4px] text-white absolute mx-auto text-center bottom-[152px]  ">
          © 2002 BFC. All Rights Reserved | Powered by BFC IT Team
        </h1>
        <FaFacebookF className="text-white text-2xl absolute bottom-[100px] mx-auto text-center w-full " />
        <FaTwitter className="text-white text-2xl absolute bottom-[100px] pl-20 mx-auto text-center w-full " />
        <FaDribbble className="text-white text-2xl absolute bottom-[100px] pl-40 mx-auto text-center w-full " />
        <FaInstagram className="text-white text-2xl absolute bottom-[100px] pl-60 mx-auto text-center w-full  " />
      </div>
    </div>
  );
}

export default Footer;
