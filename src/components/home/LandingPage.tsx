import React from 'react'
import HeroSection from './Banner'
import PopularServices from './PopularServices'
import ValueProps from './Progress'
import TrustSection from './Trust'
import ScaleBento from './Scale'
import GigExplorer from './popular'
import JobExplorer from './popular'
import JobCarousel from './popular'

export default function LandingPage() {
  return (
    <>
    <HeroSection/>
    <PopularServices/>
    {/* <CategoryGrid/> */}
    <JobCarousel/>
    <ValueProps/>
    <TrustSection/>
    {/* <ScaleBento/> */}
    </>
  )
}
