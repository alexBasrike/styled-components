import styled from "styled-components";
import siteTheme from "../../styles/Theme.styled";

const CardsItem = styled.div `
  background-color: ${siteTheme.colors.secondary};
  width: 300px;
  padding: 10px 20px;
  border-radius: ${siteTheme.radius.big};
  box-shadow: ${siteTheme.shadow.default};
  
  figure {
    margin-right: -10px;
    margin-left: -10px;
  }
`

export default CardsItem;