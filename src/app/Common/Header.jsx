"use client"
import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import flage from "../../../public/cart.png"
import Slider from "./SlickSlider"
import SlickSlider from "./SlickSlider"
import Image from "next/image"
import logo from "../../../public/logo .png"
import Dreses from "../../../public/dreses.png"
import Tops from "../../../public/tops.png"
import shorts from "../../../public/shorts.png"
import tshirt from "../../../public/tshirt.png"
import menssale from "../../../public/menssale.png"
import first from "../../../public/first.png"
import second from "../../../public/second.png"
import third from "../../../public/third.png"
import four from "../../../public/four.png"
import five from "../../../public/five.png"
import six from "../../../public/six.png"
import womansale from "../../../public/womansale.png"
import { IoReorderThreeOutline } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"

import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
  icons,
  links,
  menuItems,
} from "./Myarray"
import Link from "next/link"
import Home from "../page"
import Seondslider from "../all pages/Seondslider"
import FeaturedCategories from "../all pages/FeaturedCategories"
import Seasonmusthaves from "../all pages/Season-must-haves"

export default function Header() {
  const [show, setshow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let Dropdown = () => {
    setIsOpen(!isOpen)
  }

  const toggleNavbar = () => {
    setshow(!show)
  }
  return (
    <>
      <header className="w-[100%] md:block hidden	">
        <div className="bg-black w-[100%] ">
          <div className="w-[95%]  mx-auto">
            <div className="grid grid-cols-[78%_auto] justify-center items-center text-white py-[20px]">
              <div className="border border-[solid] border-[#88d352] mx-[20px] ">
                <SlickSlider />
              </div>
              <div className="border border-[solid] border-[#4c2985] flex  items-center ms-[20px] px-[20px] ">
                <Image
                  src={flage}
                  className="w-[40px] h-[30px] pr-[10px]"
                  alt="testing"
                />
                <p className="uppercase text-[15px]">$ usd</p>
                <ul className="px-[5px] relative">
                  <li onClick={Dropdown} className="absolute top-[-5px] ">
                    <FaChevronDown className="text-[15px] " />
                    {isOpen == true ? (
                      <ul>
                        <li>
                          <Image
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                        <li>
                          <Image
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] bg-slate-50 ">
          <div className="grid grid-cols-[50%_35%]  justify-between px-[12px] relative items-center">
            <div className="">
              <ul className="flex items-center justify-around       ">
                <li>
                  <Image
                    src={logo} // Path to your image
                    alt="Description of image"
                    className="w-[120px] bg-white h-[35px]"
                  />
                </li>
                <li className="group py-[12px] cursor-pointer ">
                  <h2 className="font-[700]">Women</h2>
                  <div className="w-[100%]  bg-white h-auto  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-[60%_auto] pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-3">
                          <div>
                            <h1 className="font-[500] pt-[18px]">Featured</h1>

                            <ul className="pt-[15px]">
                              {categories1.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Clothing</h1>
                            <ul className="pt-[15px]">
                              {categories2.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Accessories</h1>
                            <ul className="pt-[15px]">
                              {categories3.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-2 justify-between">
                          <div className="">
                            <Image
                              src={Dreses}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                          <div className="">
                            <Image
                              src={Tops}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group py-[12px] cursor-pointer">
                  <h2 className="font-[700] ">Men</h2>
                  <div className="w-[100%]   bg-white h-auto  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-[60%_auto] pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-3">
                          <div>
                            <h1 className="pt-[18px]">Featured</h1>
                            <ul className="pt-[15px]">
                              {categories1.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Clothing</h1>
                            <ul className="pt-[15px]">
                              {categories2.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Accessories</h1>
                            <ul className="pt-[15px]">
                              {categories3.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="grid grid-cols-2 justify-between gap-2">
                          <div className="">
                            <Image
                              src={shorts}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                          <div className="">
                            <Image
                              src={tshirt}
                              className="w-[100%] max-h-[400px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group py-[12px] cursor-pointer">
                  <h2 className="font-[700] ">Sale</h2>
                  <div className="w-[100%] bg-white  min-h-[400px] hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className=" w-[95%] mx-auto grid grid-cols-1 pb-[10px]">
                      <div className="">
                        <div className="grid grid-cols-4 justify-between">
                          <div>
                            <h1 className="pt-[18px]">Women's Sale</h1>

                            <ul className="pt-[15px]">
                              {categories4.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div>
                            <h1 className="pt-[18px]">Men's Sale</h1>
                            <ul className="pt-[15px]">
                              {categories5.map((v, i) => {
                                return (
                                  <>
                                    <li
                                      className="font-[500] text-[14px] pb-[5px]"
                                      key={i}
                                    >
                                      {v}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                          <div className="mr-[25px]">
                            <Image
                              src={menssale}
                              className="w-[100%] max-h-[350px]"
                              alt="testing"
                            />
                          </div>
                          <div className="">
                            <Image
                              src={womansale}
                              className="w-[100%] max-h-[350px]"
                              alt="testing"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" group py-[12px] cursor-pointer">
                  {" "}
                  <h2 className="font-[700] ">Our Story</h2>
                  <div className="w-[100%] bg-white min-h-[400px]  hidden group-hover:block duration-300 origin-top   absolute left-0 top-[100%]">
                    <div className="grid grid-cols-6 gap-[30px] justify-between px-[12px] pb-[10px]">
                      <div className="border-[2px] border-[solid]">
                        <Image src={first} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <Image src={second} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <Image src={third} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <Image src={four} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <Image src={five} className="w-[100%] h-[300px]" />
                      </div>
                      <div className="border-[2px] border-[solid]">
                        <Image src={six} className="w-[100%] h-[300px]" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="flex justify-end  font-[600]  text-[30px] ">
                {icons.map((v, i) => {
                  return (
                    <>
                      <li className="pr-[30px]" key={i}>
                        {v.component}
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* mobile header */}
      <header className="w-[100%] md:hidden block 	">
        <div className="bg-black w-[100%] ">
          <div className="w-[95%]  mx-auto hidden">
            <div className="grid grid-cols-[78%_auto] justify-center items-center text-white py-[20px]">
              <div className="border border-[solid] border-[#88d352] mx-[20px] ">
                <SlickSlider />
              </div>
              <div className="border border-[solid] border-[#4c2985] flex  items-center ms-[20px] px-[20px] ">
                <Image
                  src={flage}
                  className="w-[40px] h-[30px] pr-[10px]"
                  alt="testing"
                />
                <p className="uppercase text-[15px]">$ usd</p>
                <ul className="px-[5px] relative">
                  <li onClick={Dropdown} className="absolute top-[-5px] ">
                    <FaChevronDown className="text-[15px] " />
                    {isOpen == true ? (
                      <ul>
                        <li>
                          <Image
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                        <li>
                          <Image
                            src={flage}
                            className="w-[40px] h-[30px] pr-[10px]"
                            alt="testing"
                          />
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%]  md:hidden block relative z-[999]  ">
          <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex flex-col relative ">
              <Link href="/">
                <span className="text-white text-2xl font-bold">
                  {" "}
                  <Image
                    src={logo} // Path to your image
                    alt="Description of image"
                    className="w-[120px] bg-white h-[35px]"
                  />
                </span>
              </Link>
              <div className="md:hidden absolute right-0 top-0">
                <button
                  onClick={() => setshow(!show)}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`flex flex-col items-start gap-[20px] ${
                  show ? "block" : "hidden"
                } `}
              >
                <ul className="flex flex-col items-center justify-around    ">
                  <li className="group py-[12px] ">
                    <h2 className="font-[700] cursor-pointer">Women</h2>
                    <div className="w-[100%] hidden group-hover:block duration-300 origin-top bg-white    absolute left-0 top-[100%]">
                      <div className=" w-[95%] mx-auto grid grid-cols-1 pb-[10px]">
                        <div className="">
                          <div className="grid grid-cols-3">
                            <div>
                              <h1 className="font-[500] pt-[18px]">Featured</h1>

                              <ul className="pt-[15px]">
                                {categories1.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div>
                              <h1 className="pt-[18px]">Clothing</h1>
                              <ul className="pt-[15px]">
                                {categories2.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div>
                              <h1 className="pt-[18px]">Accessories</h1>
                              <ul className="pt-[15px]">
                                {categories3.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid grid-cols-2 justify-between">
                            <div className="">
                              <Image
                                src={Dreses}
                                className="w-[100%] max-h-[400px]"
                              />
                            </div>
                            <div className="">
                              <Image
                                src={Tops}
                                className="w-[100%] max-h-[400px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group py-[12px] cursor-pointer">
                    <h2 className="font-[700]  ">Men</h2>
                    <div className="w-[100%] hidden group-hover:block duration-300 origin-top bg-white    absolute left-0 top-[100%]">
                      <div className=" w-[95%] mx-auto grid grid-cols-1 pb-[10px]">
                        <div className="">
                          <div className="grid grid-cols-3">
                            <div>
                              <h1 className="pt-[18px]">Featured</h1>
                              <ul className="pt-[15px]">
                                {categories1.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div>
                              <h1 className="pt-[18px]">Clothing</h1>
                              <ul className="pt-[15px]">
                                {categories2.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div>
                              <h1 className="pt-[18px]">Accessories</h1>
                              <ul className="pt-[15px]">
                                {categories3.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid grid-cols-2 justify-between gap-2">
                            <div className="">
                              <Image
                                src={shorts}
                                className="w-[100%] max-h-[400px]"
                              />
                            </div>
                            <div className="">
                              <Image
                                src={tshirt}
                                className="w-[100%] max-h-[400px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group py-[12px] cursor-pointer">
                    <h2 className="font-[700] ">Sale</h2>
                    <div className="w-[100%] hidden group-hover:block duration-300 origin-top bg-white   absolute left-0 top-[100%]">
                      <div className=" w-[95%] mx-auto grid grid-cols-1 pb-[10px]">
                        <div className="">
                          <div className="grid grid-cols-4 justify-between items-center">
                            <div>
                              <h1 className="pt-[18px]">Women's Sale</h1>

                              <ul className="pt-[15px]">
                                {categories4.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div>
                              <h1 className="pt-[18px]">Men's Sale</h1>
                              <ul className="pt-[15px]">
                                {categories5.map((v, i) => {
                                  return (
                                    <>
                                      <li
                                        className="font-[500] text-[10px] pb-[5px]"
                                        key={i}
                                      >
                                        {v}
                                      </li>
                                    </>
                                  )
                                })}
                              </ul>
                            </div>
                            <div className="mr-[25px] h-[80%]">
                              <Image
                                src={menssale}
                                className="w-[100%] h-[100%]"
                                alt="testing"
                              />
                            </div>
                            <div className="h-[80%]">
                              <Image
                                src={womansale}
                                className="w-[100%] h-[100%]"
                                alt="testing"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className=" group py-[12px] cursor-pointer">
                    {" "}
                    <h2 className="font-[700]">Our Story</h2>
                    <div className="w-[100%] hidden mt-[20px] group-hover:block duration-300 origin-top bg-white   absolute left-0 top-[100%]">
                      <div className="grid grid-cols-3 gap-[10px]  items-center justify-between pb-[10px] ">
                        <div className="border-[2px] border-[solid]">
                          <Image
                            src={first}
                            className="w-[100%] max-h-[300px]"
                          />
                        </div>
                        <div className="border-[2px] border-[solid]">
                          <Image
                            src={second}
                            className="w-[100%] max-h-[300px]"
                          />
                        </div>
                        <div className="border-[2px] border-[solid]">
                          <Image
                            src={third}
                            className="w-[100%] max-h-[300px]"
                          />
                        </div>
                        <div className="border-[2px] border-[solid]">
                          <Image
                            src={four}
                            className="w-[100%] max-h-[300px]"
                          />
                        </div>
                        <div className="border-[2px] border-[solid]">
                          <Image
                            src={five}
                            className="w-[100%] max-h-[300px]"
                          />
                        </div>
                        <div className="border-[2px] border-[solid]">
                          <Image src={six} className="w-[100%] max-h-[300px]" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Seondslider />
      <FeaturedCategories />
      <Seasonmusthaves />
    </>
  )
}
