import React from "react"

import SEO from "@/components/seo"
import Header from "@/components/header"
import Layout from "@/components/layout"
import Footer from "@/components/footer"
import Hero from "@/sections/hero"
import Documentation from "@/sections/documentation"
import Members from "@/sections/members"
import Participants from "@/sections/participants"
import Join from "@/sections/join"

import "@/styles/main.css"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <SEO />
        <Header />
        <Hero />
        <Documentation />
        <Members />
        <Participants />
        <Join />
        <Footer />
      </Layout>
    </div>
  )
}

export default IndexPage
