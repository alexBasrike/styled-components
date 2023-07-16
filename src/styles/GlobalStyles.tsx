import {createGlobalStyle} from "styled-components";
import siteTheme from "./Theme.styled";

const GlobalStyles = createGlobalStyle `
  
/* Reset CSS
------------------------------------------------------------------------------ */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  input,
  textarea,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,
  img,
  abbr {
    border: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  th,
  var {
    font-style: normal;
    font-weight: normal;
  }

  ul li {
    list-style: none;
  }

  caption,
  th {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  sup {
    vertical-align: text-top;
  }

  sub {
    vertical-align: text-bottom;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  legend {
    color: #000;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    display: block;
  }



  /* Basic CSS rules
  ------------------------------------------------------------------------------ */
  body {
    line-height: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: ${siteTheme.colors.text};
  }



  /* Connect google fonts
  ------------------------------------------------------------------------------ */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
`

export default GlobalStyles;