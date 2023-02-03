exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  });

  createPage({
    path: `/marketplace/:contractAddress/:tokenId`,
    matchPath: `/marketplace/:contractAddress/:tokenId`,
    component: require.resolve(`./src/pages/marketplace/details.js`),
  });

  createPage({
    path: `/library/:contractAddress/:tokenId`,
    matchPath: `/library/:contractAddress/:tokenId`,
    component: require.resolve(`./src/pages/library/index.js`),
  });
};
