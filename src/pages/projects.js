// If you don't want to use TypeScript you can delete this file!
import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
  Badge,
} from "react-bootstrap"

import Layout from "../components/layout"

const Projects = ({ data }) => {
  const [state, setState] = useState({
    filteredData: data.projects.edges,
  })

  const filterHandler = id => {
    let filteredData = data.projects.edges
    if (id !== "all") {
      filteredData = filteredData.filter(({ node }) =>
        node.relationships.field_type.find(tag => tag.id === id)
      )
    }
    console.log(filteredData)
    setState({ filteredData })
  }

  return (
    <Layout>
      <Container className="projects">
        <Row className="filters">
          <ToggleButtonGroup
            defaultValue="all"
            name="filters"
            className="w-100"
            onChange={filterHandler}
            aria-label="Filter Group"
          >
            <ToggleButton value="all" variant="secondary" type="radio">
              ALL
              <Badge variant="light" className="ml-2">
                {data.projects.edges.length}
              </Badge>
            </ToggleButton>
            {data.categories.edges.map(({ node }) => (
              <ToggleButton
                key={node.id}
                value={node.id}
                variant="secondary"
                type="radio"
              >
                {node.name}
                <Badge variant="light" className="ml-2">
                  {node.relationships.node__project.length}
                </Badge>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        {state.filteredData.map(({ node }) => (
          <Row className="react-reveal project" key={node.id}>
            <Col
              md={6}
              className="text-center d-flex align-items-center info child"
            >
              <div>
                <h5>{node.title}</h5>
                <div className="text-muted">
                  <p dangerouslySetInnerHTML={{ __html: node.body.value }}></p>
                  {node.field_link ? (
                    <p>
                      <a
                        href={node.field_link.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button type="button" className="btn btn-dark">
                          Launch
                        </button>
                      </a>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(" +
                      (node.relationships.field_image
                        ? node.relationships.field_image.image_style_uri[0]
                            .projects
                        : "") +
                      ")",
                  }}
                ></div>
              </div>
            </Col>
            <Col
              md={6}
              className="full child"
              style={{
                background: node.relationships.field_image
                  ? "url(" +
                    node.relationships.field_image.image_style_uri[0].projects +
                    ")"
                  : "#ccc",
              }}
            ></Col>
          </Row>
        ))}
      </Container>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  {
    projects: allNodeProject(
      filter: {
        relationships: {
          node_type: { drupal_internal__type: { eq: "project" } }
        }
      }
      sort: { fields: field_date, order: DESC }
    ) {
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
            field_type {
              id
            }
          }
          id
        }
      }
    }
    categories: allTaxonomyTermProjectType(sort: { fields: weight }) {
      edges {
        node {
          name
          id
          relationships {
            node__project {
              title
            }
          }
        }
      }
    }
  }
`
