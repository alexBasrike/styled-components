import styled, {css} from "styled-components";
import siteTheme from "../../styles/Theme.styled";

type BtnPrimaryPropsType = {
    bordered?: boolean;
}

let BtnPrimary = styled.button<BtnPrimaryPropsType>`
  background-color: ${siteTheme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 86px;
  margin: 0 12px 12px 0;
  padding: 5px 20px 5px 20px;
  border: none;
  border-radius: ${siteTheme.radius.small};
  transition: background 0.4s, color 0.4s;
  line-height: 20px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: ${siteTheme.colors.secondary};
  cursor: pointer;

  &:hover {
    background-color: green;
  }
  
  ${props => props.bordered && css<BtnPrimaryPropsType>`
    background-color: transparent;
    padding-top: 3px;
    padding-bottom: 3px;
    border: 2px solid ${siteTheme.colors.primary};
    color: ${siteTheme.colors.primary};

    &:hover {
      background-color: ${siteTheme.colors.primary};
      color: ${siteTheme.colors.secondary};
    }
  `}
`

export default BtnPrimary;