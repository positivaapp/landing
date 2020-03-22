import React from 'react'
import SEO from '../components/General/SEO'
import Layout from '../components/General/Layout'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import CallToAction from '../components/Home/CallToAction'

const index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Features />
      <CallToAction />
    </Layout>
  )
}

export default index
