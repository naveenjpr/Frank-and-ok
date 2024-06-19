"use client"
import React, { useState } from "react"
import Image from "next/image"
import seasons1 from "../../../public/seasons1.jpg"
import seasons2 from "../../../public/seasonovarlay1.jpg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CiHeart } from "react-icons/ci"
import febric from "../../../public/febric.webp"
import { FiRotateCcw } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

import image1 from "../../../public/seasons1.jpg"
import image2 from "../../../public/2220134-4AC.01_d8bf22a2-314e-4a66-9e3c-274d57874c37_900x.webp"
import image3 from "../../../public/2220136-3AL.01_aa5e57c6-1091-426a-bf1a-fefdb8ae972a_900x.webp"
import image4 from "../../../public/2130279-012.01_d82a01e5-1580-4bd2-9d9a-44d91f1dd240_900x.webp"

import { MdLocalShipping } from "react-icons/md"
import Slider from "react-slick"
import Link from "next/link"

export default function page() {
  const [category, setCategory] = useState("women")
  const handleCategoryChange = (category) => {
    setCategory(category)
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  }
  const catimages = [
    {
      src1: "../../../public/2120388-002.02_450x.webp",
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: "../../../public/2120388-002.01_450x.webp",
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      src1: "../../../public/2120388-002.02_450x.webp",
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: "../../../public/2120388-002.01_450x.webp",
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
    {
      src1: "../../../public/2120388-002.02_450x.webp",
      width: 450,
      height: 300,
      alt: "Slide 1",
      src2: "../../../public/2120388-002.01_450x.webp",
      para: "The Open Back Poplin Maxi Dress in Sepia",
      price: "$130",
    },
  ]
  return (
    <>
      <div className="w-[100%] content2-auto h-[430px]   relative -z-[999]	">
        <div className=" flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <span className="md:text-[55px] text-[27px] text-white">
            A Mallorca Story
          </span>
          <span className="md:text-[34px] text-[17px] text-white my-[30px]">
            Summer 2024
          </span>
          <div className="flex items-center justify-center  ">
            <button className="bg-white text-black md:px-[70px] px-[35px] py-[15px] font-[600]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black ">
        <div className="md:w-[80%] w-[100%] md:px-[0px] px-[12px] mx-auto grid grid-cols-4 items-center justify-between py-[20px] text-white">
          <div className="flex items-center  ">
            <MdLocalShipping className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Free Shipping over $79
            </h5>
          </div>
          <div className="flex items-center ">
            <FiRotateCcw className="mr-[10px]" />

            <h5 className="text-white md:text-[15px] text-[8px]">
              free returns{" "}
            </h5>
          </div>
          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/loyalty_logo_light.png?v=1672326811"
              alt="testing"
              width={15}
              height={15}
              className="mr-[10px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Earn Points
            </h5>
          </div>

          <div className="flex items-center ">
            <img
              src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405"
              alt=""
              className="w-[15px] h-[15px] mr-[14px]"
            />

            <h5 className="text-white md:text-[15px] text-[8px]">
              Buy Now,Pay Later
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-white mb-[100px]">
        <h1 className="font-[500] ps-[30px] md:text-[30px] text-[20px] md:py-[50px] py-[35px]">
          Featured Categories
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-[30px] md:px-[25px] px-[12px]">
          <div className="border ">
            <Image src={image1} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Dresses
            </p>
          </div>
          <div className="border ">
            <Image src={image2} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Shorts & Skirts
            </p>
          </div>
          <div className="border ">
            <Image src={image3} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              Matching Sets
            </p>
          </div>
          <div className="border ">
            <Image src={image4} className="w-[100%] h-[100%]" />
            <p className="mt-[5px] md:text-[16px] text-[8px] font-[500]">
              T-Shirts & Tops
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="flex justify-between px-[20px] mb-[50px]">
          <h1 className="md:text-[35px] text-[16px] font-[600]">
            Season's must-haves, now at 25% off*.
          </h1>
          <div className="flex justify-end md:text-[35px] text-[15px] gap-4 font-[600]">
            <button
              onClick={() => handleCategoryChange("women")}
              className={`md:px-4 md:py-2 md:mx-2 px-[5px] rounded ${
                category === "women"
                  ? "bg-blue-500 text-white text-[10px]"
                  : "bg-gray-200 text-black text-[10px]"
              }`}
            >
              Women's
            </button>
          </div>
        </div>
        {category == "women" ? (
          <div className="w-[95%] mx-auto slider-container">
            <Slider {...settings}>
              {catimages.map((image, i) => {
                console.log(image.src1)
                return (
                  <div className="">
                    <div className="border relative group p-[2px] mx-[10px]">
                      <img
                        src={image.src1}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className=""
                      />

                      <img
                        src={image.src2}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="absolute top-0"
                      />
                      <span className="bg-black text-white absolute right-1 top-1 p-[3px] ">
                        New
                      </span>
                      <div className="flex justify-between py-[10px] ">
                        <p className="text-[15px] font-[600] w-[90%]">
                          {image.para}
                        </p>
                        <CiHeart className="text-[25px]" />
                      </div>
                      <div className="flex  ">{image.price}</div>
                      <div className="flex text-[#ccc] ">1 color</div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-[100%] mt-[100px]">
        <div className="w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center">
          <div className="">
            <Image
              src={febric}
              className="w-[100%] h-[100%]"
              alt="Picture of the author"
            />
          </div>
          <div className=" px-[10px] ">
            <div>
              <img
                src="https://www.frankandoak.com/cdn/shop/files/Linen-black_c5d56f93-2e8a-45b3-86c7-334eddbe51d2.jpg?crop=center&height=88&v=1717534878&width=88"
                alt=""
                className="w-[50px] h-[50px] "
              />
            </div>

            <p className="text-[35px] font-[600] mt-[30px]">
              Linen, the fabric of summer
            </p>

            <p className="text-[24px] mt-[20px] font-[500] text-[#666]">
              Discover a natural material that creates easy-going and breezy
              styles.
            </p>

            <div className="slider-container py-[30px]">
              <Slider {...settings}>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2220132-2AC.01.jpg?crop=center&height=420&v=1713383298&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2310163-2AC.01.jpg?crop=center&height=420&v=1712674650&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2510518-2AC.03.jpg?crop=center&height=420&v=1717595352&width=314"
                    alt=""
                    className="m-[10px] w-[100%] h-[100%]"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <button className="text-[black] font-[500] relative">
                Shop now
                <span className="border-[2px] border-[solid] border-[black] w-[100%] absolute top-[100%] left-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%]">
        <h3 className="text-center font-[500] md:text-[36px] text-[20px] text-black md:py-[50px] pt-[30px] pb-[10px]">
          What others are saying
        </h3>
        <div className="w-[95%] mx-auto ">
          <Slider {...settings2}>
            <div>
              <div className="grid grid-cols-2 md:px-[25px] items-center">
                <div>
                  <div className="flex gap-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#666] mt-[8px]">
                      Based on 60 reviews
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[16px] text-[10px] text-[#000] md:mt-[20px] tracking-widest	font-[500]">
                      Very flattering cut, comfortable fabric and nice details.
                      Wish I had bought a few of these.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#ccc] md:mt-[12px]">
                      Amy H.
                    </p>
                  </div>
                  <div>
                    <button className="relative md:mt-[10px]">
                      <Link href={"/"} className="">
                        Shop now
                      </Link>
                      <span className="w-[100%] h-[2px] bg-black left-0 absolute top-[100%]"></span>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672"
                    className="w-[100%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:px-[25px] items-center">
                <div>
                  <div className="flex gap-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#666] md:mt-[8px]">
                      Based on 60 reviews
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[16px] text-[10px] text-[#000] md:mt-[20px] tracking-widest	font-[500]">
                      Very flattering cut, comfortable fabric and nice details.
                      Wish I had bought a few of these.
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#ccc] md:mt-[12px]">
                      Amy H.
                    </p>
                  </div>
                  <div>
                    <button className="relative md:mt-[10px]">
                      <Link href={"/"} className="">
                        Shop now
                      </Link>
                      <span className="w-[100%] h-[2px] bg-black left-0 absolute top-[100%]"></span>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.frankandoak.com/cdn/shop/files/2220097-4CV.01_4c570fea-27f8-45ac-8354-202bc56f21da.jpg?crop=center&height=880&v=1713375346&width=672"
                    className="w-[100%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="w-[100%] mb-[60px] mt-[100px] ">
        <div className="w-[95%] mx-auto">
          <div className="grid md:grid-cols-2  grid-cols-1 items-center">
            <div className="md:p-[46px] p-[10px] flex md:flex-none  flex-col md:items-start items-center  justify-center  ">
              <div>
                <h4 className="md:text-[42px] text-[20px] md:mb-[40px] mb-[20px] text-[#000] font-[400]">
                  Inspire Better Living.
                </h4>
              </div>
              <div>
                <p className="md:text-[24px] text-[12px] md:mb-[36px] mb-[18px] text-[#666]">
                  Born in Canada, we are grounded on innovation, our community,
                  and respecting the planet we all call home.{" "}
                </p>
              </div>
              <div>
                <button className="text-[26px] mb-[36px] text-[#000] relative ">
                  <Link href={"/"} className="md:text-left text-center">
                    Who We Are
                  </Link>
                  <span className="w-[100%] h-[1px] bg-black absolute top-[100%] left-0"></span>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
              <div className="relative">
                <img
                  src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213"
                  className="w-[100%] h-[280px]"
                  alt=""
                />
                <h5 className="absolute text-white bottom-[30px] left-[50%] translate-x-[-50%] w-[205px] text-[20px]  ">
                  Sustainable Practices
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-1 bg-black w-[200px] h-[50px] uppercase left-0.5 text-white rounded-full flex items-center justify-center">
        <span>Get extra 20% off</span>
      </div>
    </>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  )
}
