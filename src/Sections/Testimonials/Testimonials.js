import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../components/Card/Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  position: relative;
  &::before{
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--purple);
    transform: translate(-50%);
  }
`;

const Carousel = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 48em){
     width: 90vw;
  }
  .slick-slider .slick-arrow:before{
    color: var(--black);
    font-size: 1.5rem;
    @media only Screen and (max-width: 48em){
        display: none;
    }
  }
  .slick-slider .slick-dots button:before{
    color: var(--black);
    font-size: 1.5rem;
  }
  .slick-slide.slick-active{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <Section>
        <Title>Few good words about us!</Title>
        <Carousel>
            <Slider {...settings}>
               <Card text={"Lorem ipsum dolor sit amet," +
               " consectetur adipisicing elit. Aperiam autem" +
               " blanditiis doloribus enim facilis, fuga iste, " +
               "modi nulla possimus repudiandae temporibus!"}
                     name={"Jenny (CodeCall)"} image={"avatar-1"}/>
                <Card text={"Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Aperiam autem" +
                " blanditiis doloribus enim facilis, fuga iste, " +
                "modi nulla possimus repudiandae temporibus!"}
                      name={"Bob (Zendesk)"} image={"avatar-2"}/>
                <Card text={"Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Aperiam autem" +
                " blanditiis doloribus enim facilis, fuga iste, " +
                "modi nulla possimus repudiandae temporibus!"}
                      name={"Cassy (Asus)"} image={"avatar-3"}/>
                <Card text={"Lorem ipsum dolor sit amet," +
                " consectetur adipisicing elit. Aperiam autem" +
                " blanditiis doloribus enim facilis, fuga iste, " +
                "modi nulla possimus repudiandae temporibus!"}
                      name={"Jason (CodeCall)"} image={"avatar-4"}/>
            </Slider>
        </Carousel>
    </Section>
};

export default Testimonials;