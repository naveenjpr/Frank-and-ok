import Fabricofsummer from "@/app/Common/Fabricofsummer"
import FeaturedCategories from "@/app/Common/FeaturedCategories"
import Seasonmusthaves from "@/app/Common/Season-must-haves"
import Seondslider from "@/app/Common/Seondslider"
import React from "react"

export default function page() {
  return (
    <>
      <Seondslider/>
      <FeaturedCategories />
      <Seasonmusthaves />
      <Fabricofsummer />
    </>
  )
}
