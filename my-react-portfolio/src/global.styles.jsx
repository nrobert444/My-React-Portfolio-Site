import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Dosis', sans-serif;
  line-height: 1.6;
  background: #fff;
}

a {
  text-decoration: none;
  color: $dark-color;
}

ul {
  list-style: none;
}

h2,
h3,
h4 {
  text-transform: uppercase;
}

img {
  width: 100%;
}`
