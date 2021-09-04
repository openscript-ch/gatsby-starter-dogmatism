const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

module.exports = useGatsbyConfig("./.gatsby/gatsby-config", {
  type: 'ts-node'
});
