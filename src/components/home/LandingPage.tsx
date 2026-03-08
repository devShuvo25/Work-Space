import React from 'react'
import HeroSection from './Banner'
import PopularServices from './PopularServices'
import ValueProps from './Progress'
import TrustSection from './Trust'
import CategorySection from './Category'
import WhyChooseSection from './WhyChoose'
import SuccessStory from './SuccessStory'
import SkillsetSection from './Skills'


export default function LandingPage() {
  return (
    <>
    <HeroSection/>
    <PopularServices/>
    <CategorySection/>
    <ValueProps/>
    <WhyChooseSection/>
    <SuccessStory/>
    <TrustSection/>
    <SkillsetSection/>
    {/* <ScaleBento/> */}
    </>
  )
}
