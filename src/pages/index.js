import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
{/*     <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
