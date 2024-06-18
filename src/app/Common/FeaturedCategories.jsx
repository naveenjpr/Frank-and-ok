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
        <div className="grid lg:grid-cols-6 grid-cols-2  gap-[40px] md:px-[25px] px-[12px]">
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">
              Womens Skirts & Shorts
            </p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">Mens Shorts</p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">
              Womens T-Shirts & Tops
            </p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">
              Mens Shirts & Polo Shirts
            </p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">
              WOmens Swimwear
            </p>
          </div>
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px]">Mens Swimwear</p>
          </div>
        </div>
      </div>
    </>
  )
}
