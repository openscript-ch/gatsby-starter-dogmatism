// eslint-disable-next-line @typescript-eslint/no-var-requires
const { useGatsbyNode } = require("gatsby-plugin-ts-config");

module.exports = useGatsbyNode(() => require("./.gatsby/gatsby-node"), {
  type: 'ts-node'
});
