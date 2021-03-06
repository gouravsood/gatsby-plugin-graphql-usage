/* import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
 */

import React from "react";

export default  ({ data }) => {
    console.log(data);
    return (
      <div>
        <h2>Starwars Characters</h2>
        {/* <ul>
          {
            data.allPersons.map(person => (
              <li>{person.name}</li>
            ))
          }
        </ul> */}
      </div>
    )
}

export const query = graphql`
  query StarwarsChars {
    allPersons {
      birthYear
      createdAt
      isPublished
      skinColor
      eyeColor
      name
    }
  }
`