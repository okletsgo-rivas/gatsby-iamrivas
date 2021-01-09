import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rivas-icon.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.file.childImageSharp.fixed} alt="Rivas Logo" />
}

export default Logo
