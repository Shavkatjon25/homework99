import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Omborchi from "./Omborchi"

const Continer=styled.div`
  max-width:100vw;
  min-height:100vh;
  box-sizing:border-box;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
  padding-left:24px;
  padding-right:24px;
  padding-bottom:24px;  
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
gap:15%;
align-items:center;
margin-bottom:15%;
`

const Btn=styled.button`
  background: ${props=>props.bg};
  min-width:250px;
  height:92px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:${props=>props.rd};
  border:none;
  color: var(--White, #FFF);
    text-align: center;
    font-family: "Mouse Memoirs";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.6px;
    text-transform: uppercase;
`
const Buttonlar=styled.div`
  display:flex;
  gap:16px;
  flex-wrap:wrap;
  justify-content:center;
`

function Pick() {
    const dispach=useDispatch();
function oynTuri(k){
    dispach(Omborchi.actions.malumotTuri(k))
}

  return (
    <div>
        <Continer>
          {/* O'ynning katigorya qismi  */}
        <Div>
        <Back>
            <Img src="./icon-back.svg" alt="" />
        </Back>
        <To>
        Pick a Category
        </To>
        </Div>

        <Buttonlar>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(0)}>
            Movies
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(1)}>
        TV SHOWS
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(2)}>
        COUNTRIES
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(3)}>
        CAPITAL CITIES
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(4)}>
        ANIMALS
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(5)}>
        SPORTS
        </Btn>
        </Link>
        </Buttonlar>
        </Continer>

    </div>
  )
}

export default Pick