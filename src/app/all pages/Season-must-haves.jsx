import Image from "next/image"
import { CiHeart } from "react-icons/ci"

import React, { useState } from "react"
import seasons1 from "../../../public/seasons1.jpg"

import seasons2 from "../../../public/seasonovarlay1.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
}

export default function Seasonmusthaves() {
  const [category, setCategory] = useState("women")
  const handleCategoryChange = (category) => {
    setCategory(category)
  }
  const catimages = [
    {
      image1: "../../../public/seasons1.jpg",
      image2: "../../../public/seasonovarlay1.jpg",
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      image1: "../../../public/seasons1.jpg",
      image2: "../../../public/seasonovarlay1.jpg",
      para: "The Knit Sweater Vest in White",
      price: "$130",
    },
    {
      image1: "../../../public/seasons1.jpg",
      image2: "../../../public/seasonovarlay1.jpg",
      para: "The Pinafore Linen Dress in Black",
      price: "$130",
    },
    {
      image1: "../../../public/seasons1.jpg",
      image2: "../../../public/seasonovarlay1.jpg",
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]
  //   console.log(catimages[0].image1)
  return (
    <div className="w-[100%]">
      <div className="flex justify-between px-[20px] mb-[50px]">
        <h1 className="text-[35px] font-[600]">Season's must-haves</h1>
        <div className="flex justify-end text-[35px] font-[600]">
          <button
            onClick={() => handleCategoryChange("women")}
            className={`px-4 py-2 mx-2 rounded ${
              category === "women"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => handleCategoryChange("men")}
            className={`px-4 py-2 mx-2 rounded ${
              category === "men"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Men's
          </button>
        </div>
      </div>
      {category == "women" ? (
        <div className="grid grid-cols-4 px-[25px] gap-[20px]">
          {catimages.map((v, i) => {
            console.log(v)
            return (
              <div className="border relative group p-[2px]">
                <Image src={seasons1} className="w-[100%] h-[100%]" />
                <Image
                  src={seasons2}
                  className="w-[100%] h-[100%] absolute top-0 hidden group-hover:block duration-200"
                />
                <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                  New
                </span>
                <div className="flex justify-between py-[10px] ">
                  <p className="text-[15px] font-[600] w-[90%]">{v.para}</p>
                  <CiHeart className="text-[25px]" />
                </div>
                <div className="flex  ">{v.price}</div>
                <div className="flex text-[#ccc] ">1 color</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4 px-[25px] gap-[20px]">
          {catimages.map((v, i) => {
            console.log(v)
            return (
              <>
                <div className="border relative group">
                  <Image
                    src={v.image1}
                    alt="testing"
                    className="w-[100%] h-[100%]"
                  />
                  <Image
                    src={v.image2}
                    alt="testing"
                    className="w-[100%] h-[100%] absolute top-0 hidden group-hover:block duration-200"
                  />
                </div>
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}
