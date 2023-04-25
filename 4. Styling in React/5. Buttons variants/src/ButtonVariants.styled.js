import styled from "styled-components";

const Button1 = styled.button`
  color: ${(props) => props.color || ""};
  background-color: ${(props) => props.bg || ""};
  border: ${(props) =>
    props.filled == "true" ? "0px solid transparent" : "2px solid #000000"};
  padding: 10px 40px;
  min-width: 240px;
  font-weight: bold;
  font-size: 22px;
`;

export { Button1 };
