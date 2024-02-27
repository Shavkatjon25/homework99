import { Link } from "react-router-dom"
import styled from "styled-components"


const Continer=styled.div`
  max-width:100vw;
  min-height:100vh;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
  padding-left:24px;
  padding-right:24px;
`
const Back=styled.button`
width: 40px;
height: 40px;
display:flex;
justify-content:center;
align-items:center;
border:none;
border-radius: 999px;
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: 0px -6px 0px 7px rgba(157, 45, 245, 0.25) inset;
`
const Img=styled.img`
    width:18px;
`
const To=styled.h2`
    text-align: center;
-webkit-text-stroke-width: 4;

font-family: "Mouse Memoirs";
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 57.6px */
letter-spacing: 2.4px;
background: linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-color: #243041;
`

const Div=styled.div`
display:flex;
gap:20%;
align-items:center;
margin-bottom:15%;
`

const Bola=styled.div`
    display: flex;
    flex-direction:column;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap:16px;
    align-self: stretch;
    border-radius: 20px;
    background: var(--White, #FFF);
    margin:0;
    margin-bottom:24px;
`
const Son=styled.h2`
    color: var(--Blue, #2463FF);
    font-family: "Mouse Memoirs";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin:0;
`
const Bosqich=styled.h2`
   width:auto;
    color: var(--Dark-Navy, #261676);
    font-family: "Mouse Memoirs";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin:0;
`
const Matn=styled.p`
    color: #887DC0;
    font-family: "Mouse Memoirs";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.8px;
    margin:0;
`
const SonBosqich=styled.div`
    display:flex;
    gap:16px;
    width:100%;
    margin:0;
    
`

function How() {
  return (
    <Continer>
        {/* O'yn haqida malumotlat joylangan qism */}
        <Div>
        <Link to={'/'}>
        <Back>
            <Img src="./icon-back.svg" alt="" />
        </Back>
        </Link>
        <To>
            How to Play
        </To>
        </Div>
        <Bola>
            <SonBosqich>
             <Son>01</Son>
            <Bosqich>
            Choose a category
            </Bosqich>
            </SonBosqich>
            <Matn>
            First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.
            </Matn>
        </Bola>

        <Bola>
            <SonBosqich>
             <Son>02</Son>
            <Bosqich>
            Guess letters
            </Bosqich>
            </SonBosqich>
            <Matn>
            Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If its wrong, you lose some health, which empties after eight incorrect guesses.
            </Matn>
        </Bola>

        <Bola>
            <SonBosqich>
             <Son>03</Son>
            <Bosqich>
            Win or lose
            </Bosqich>
            </SonBosqich>
            <Matn>
            You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.
            </Matn>
        </Bola>
    </Continer>
  )
}

export default How