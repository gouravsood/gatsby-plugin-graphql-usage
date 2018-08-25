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
        typePrefix: '', // OPTIONAL: set a prefix for each GQL type.
        fetchOptions: {}, // OPTIONAL: Custom options for fetch
        queries: [{
          type: 'persons',
          path: `${__dirname}/src/queries/persons.graphql`,
          extractKey: 'persons', // OPTIONAL: Used to extra the data from the graphql JSON response (Example: { persons: [...] }). Usefull if you want your type to named different to the type name from the endpoint.
          transform: data => ({ ...data, isStarwarsCharacter: true })  // OPTIONAL: Used to mutate the GQL node data. It is called with each node before it is passed to gatsby's createNode function.
        }]
      },
    }
  ],
}
