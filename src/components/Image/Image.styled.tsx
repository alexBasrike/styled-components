import styled from "styled-components";
import siteTheme from "../../styles/Theme.styled";

const Image = styled.figure `
  width: auto;
  height: 170px;
  overflow: hidden;
  margin: 0 0 21px 0;
  border-radius: ${siteTheme.radius.medium};
  
  img {
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    object-fit: cover;
    vertical-align: top;
  }
`

export default Image;