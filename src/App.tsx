import React from 'react';
import './App.css';
import Cards from "./components/Cards/Cards.styled";
import CardsItem from "./components/CardsItem/CardsItem.styled";
import Image from "./components/Image/Image.styled";
import Title from "./components/Title/Title.styled";
import Text from "./components/Text/Text.styled";
import BtnPrimary from "./components/BtnPrimary/BtnPrimary.styled";

function App() {
    return (
        <div className="App">
            <Cards>
                <CardsItem>
                    <Image>
                        <img src="/images/card-image.jpg" alt=""/>
                    </Image>
                    <Title>Headline</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <BtnPrimary as={"a"} href={"#"}>See more</BtnPrimary>
                    <BtnPrimary bordered>Save</BtnPrimary>
                </CardsItem>
            </Cards>
        </div>
    );
}

export default App;