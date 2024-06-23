import React from 'react'

export default function page() {
  return (
    <div className="w-full -z-[99]  relative overflow-hidden">
        <video
          class=" w-full h-full  scale-x-100 object-center "
          autoplay
          muted
          loop
          controls
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%]">
          <ul className="   mx-auto flex flex-col justify-between md:items-start items-center ">
            <li className="font-[600] md:text-[44px] text-[15px] ">Dive in</li>
            <li className="font-[900] md:text-[88px] text-[15px]">
              THE SUMMER SALE
            </li>
            <li className="font-[600] md:text-[64px] text-[15px] mb-[20px] ">
              Up to 50% off*
            </li>
            <li className="flex gap-[20px]">
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Women
              </button>
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Men
              </button>
            </li>
          </ul>
        </div>
      </div>
  )
}
