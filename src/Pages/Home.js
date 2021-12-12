import React from 'react';
import HeroSection  from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Services  from "../Sections/Services/Services";
import Testimonials from "../Sections/Testimonials/Testimonials";
import Contact from "../Sections/Contact/Contact";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = (props) => {
    return <Container>
        <HeroSection/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
    </Container>
};

export default Home;