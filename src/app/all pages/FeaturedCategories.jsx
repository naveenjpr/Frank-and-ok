import React from "react"
import { catimages, images } from "../Common/Myarray"
import Image from "next/image"
import image1 from "../../../public/featureCate1.jpg"

export default function FeaturedCategories() {
  return (
    <>
      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-2  gap-[20px] px-[25px]">
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p>Womens Skirts & Shorts</p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  )
}
