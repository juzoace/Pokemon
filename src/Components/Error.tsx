import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {};

const Error = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Click to return home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 200px;
    letter-spacing: -2px;
    margin-bottom: -30px;
  }
  p {
    color: var(--mainAsh);
  }
`;
