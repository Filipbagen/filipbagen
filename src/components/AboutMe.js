import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"

const AboutMe = () => {

    return (
        <Container id="about">
            <TextBox>
                <Tag title={'👀 About Me'} />
                <h1 className="gradientText">Who Am I?</h1>

                <p>
                    Hey there! My name is Filip and I'm a soon-to-be <b>engineer in Computer Science</b>,
                    living in Sweden. I've always been facinated by the endless possibilities that
                    Artificial Intelligence offers and I've found that my <b> passion for web design and
                        project management </b> perfectly complements my love for technology. I'm a firm believer
                    that the ability to be curius and to learn new skills is the key to success.
                </p>
                <p>
                    When I'm not studying, you can find me <b> building on my own projects </b> using my skills in design and
                    code development. I find it incredibly fascinating how <b>technology and design can work together</b> in order to create
                    something truly beautiful and functional. My earlier work combined with my curiosity have given me <b>valuable experience</b> in
                    developing and deploying production-level code. I am always eager to learn more
                    and take on new challenges.
                </p>

            </TextBox>
        </Container>
    )
}

export default AboutMe

// Style
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    margin-top: -200px;

    @media (max-width: 740px) {
        margin-top: -120px;
    }
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 800px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2); 
    box-shadow: 0px 0px 40px 5px rgba(0,0,0,0.2);
    padding: 34px;
    border-radius: 18px;

    & > h1 {
        margin: 0;
        font-size: 56px;

        @media (max-width: 670px) {
            font-size: 26px;
        }
    }
`