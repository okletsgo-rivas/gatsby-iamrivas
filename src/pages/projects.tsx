// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Projects = ({ data }) => (
  <Layout>
    <h1>Projects</h1>
    <div className="projects container">
    { data.allNodeProject.edges.map(({ node }) => (
      <div className="react-reveal row project">
        <div className="col-md-6 text-center d-flex align-items-center info child">
          <div>
            <h5>{ node.title }</h5>
            <div className="text-muted">
              <p dangerouslySetInnerHTML={{ __html: node.body.value }}></p>
              <p>
                <a href="https://www.artah.net" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-dark">Launch</button>
                </a>
              </p>
            </div>
            {/* <div className="thumb" style={{ backgroundImage: 'url('+ node.relationships.field_image.image_style_uri.projects +')' }}></div> */}
          </div>
          {/* <div className="col-md-6 full child" style={{ backgroundImage: 'url('+ node.relationships.field_image.image_style_uri.projects +')' }}></div> */}
        </div>
      </div>
    ))}
    </div>
  </Layout>
)

export default Projects

export const query = graphql`
query allNodeProject {
  allNodeProject {
    edges {
      node {
        body {
          value
        }
        field_link {
          uri
        }
        title
        relationships {
          field_image {
            image_style_uri {
              projects
            }
          }
        }
      }
    }
  }
}

`
