import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>
      Learning how to use Gatsby, a React-based open-source framework for
      creating websites and apps.
    </h1>
    <p>
      The combined functionality from React, GraphQL and Webpack packaged into a single
      tool for building static websites and apps.
    </p>
  </Layout>
)

export default IndexPage
