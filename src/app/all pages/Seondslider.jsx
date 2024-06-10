import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FiRotateCcw } from "react-icons/fi"

import Slider from "react-slick"

import { MdLocalShipping } from "react-icons/md"
import Image from "next/image"

export default function Seondslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="w-[100%] content-auto h-screen bg-center	"></div>
      <div className="w-[100%] bg-black ">
        <div className="w-[80%] mx-auto grid grid-cols-4 items-center justify-between py-[20px] text-white">
          <div className="flex items-center  ">
            <MdLocalShipping className="mr-[10px]" />

            <h5 className="text-white text-[15px]">Free Shipping over $79</h5>
          </div>
          <div className="flex items-center ">
            <FiRotateCcw className="mr-[10px]" />

            <h5 className="text-white text-[15px]">free returns </h5>
          </div>
          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811"
              alt="testing"
              width={15}
              height={15}
              className="mr-[10px]"
            />

            <h5 className="text-white text-[15px]">Earn Points</h5>
          </div>

          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt=""
              className="w-[15px] h-[15px] mr-[14px]"
            />

            <h5 className="text-white text-[15px]">Buy Now,Pay Later</h5>
          </div>
        </div>
      </div>
    </>
  )
}
