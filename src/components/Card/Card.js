import React from 'react';
import styled from "styled-components";

const CARD = styled.div`
  background-color: var(--nav2);
  color: var(--white);
  height: calc(8.5rem + 8vw);
  width: calc(9rem + 12vw);
  border-radius: 20px;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Image = styled.div`
  background: url(${(props) => props.img});
  width: 34%;
  height: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  filter: drop-shadow(0px -3px 3px var(--nav2));
  
`;

const Text = styled.h4`
  padding: 0 calc(1rem + 1vw);
  padding-top: 3.6rem;
  font-size: calc(0.5rem + 0.5vw);
  text-align: center;
  @media only Screen and (max-width: 48em){
    padding: 0 calc(1rem + 1vw);
    padding-top: 2.3rem;
    font-size: calc(0.5rem + 0.5vw);
    text-align: center;
    }
`;

const Name = styled.h3`
  color: var(--pink);
  padding-top: 0.3rem;
  font-size: calc(0.5rem + 1vw);
  margin-bottom: .6rem;
`;

const Card = ({name, text, image}) => {

    const Avatar = require(`../../assets/${image}.jpg`).default

    return <CARD>
        <Image img={Avatar}/>
        <Text>{text}</Text>
        <Name>{name}</Name>
    </CARD>
};

export default Card;