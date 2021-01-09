exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/projects",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
