import React from 'react'
import './main.css'



import Showcase from './1_showcase/Showcase'
import Logos from './2_logos/Logos'
import FeaturesAbout from './3_features-company/FeaturesAbout'
import WhyChooseUs from './5_why-choose-us/WhyChooseUs'
import OurServices from './4_our-services/OurServices'
import ProjectAndCase from './6_project-and-case/ProjectAndCase'
import TeamTestimonial from './7_team-testimonial/TeamTestimonial'
import ArticleNews from './8_article-and-news/ArticleNews'
import SignNewsletter from './9_sign-newsletter/SignNewsletter'


const Main = () => {
  return (
  <>
    <Showcase/>
    <Logos/>
    <FeaturesAbout/>
    <OurServices/>
    <WhyChooseUs/>
    <ProjectAndCase/>
    <TeamTestimonial/>
    <ArticleNews/>
    <SignNewsletter/>
  </>
  )
}

export default Main