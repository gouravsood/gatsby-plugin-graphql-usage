
console.log(__dirname);
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-graphql',
      options: {
        endpoint: 'https://api.graphcms.com/simple/v1/swapi',
        queries: [{
          type: 'allPersons',
          path: `${__dirname}/src/queries/persons.graphql`,
        }]
      },
    }
  ],
}