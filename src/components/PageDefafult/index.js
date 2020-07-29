import React from 'react';
import Menu from '../Menu';
import Footer from './../Footer/index';
import styled from "styled-components";

export const Main = styled.div`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault ({children}) {
  return (
    <>
      <Main>
        <Menu/>
        {children}
        <Footer/>
      </Main>
    </>
  )
}

