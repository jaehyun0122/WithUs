import React from 'react'
import AboutSidbar from "../../component/about/sidbar";
import Introduce from "../../component/about/introduce";
import styled from 'styled-components';
import Guide from "../../component/about/guide";
import Preview from "../../component/about/preview";
import Navbar from '../../component/navbar';

const Wrap = styled.div`
  //margin-left: 400px;
  //width: 100%;
`

export default function About() {

  return (
    <>
        <Navbar />
        <AboutSidbar />
        <Wrap>
            <Introduce />
            <Guide />
            <Preview />
        </Wrap>
    </>
  )
}
