
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Continer=styled.div`
  min-width:100vw;
  min-height:100vh;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Bola=styled.div`
width: 324px;
height: 481px;
border-radius: 48px;
  background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow:  0px -8px 0px 4px #140E66 inset, 0px 6px 0px 8px #2463FF inset;
  display:flex;
  flex-direction:column;
  align-items:center;

`
const Ply=styled.div`
  width: 160px;
height: 160px;
border-radius: 999px;
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow:  0px -5px 0px -1px rgba(157, 45, 245, 00.25) inset;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px -6px 0px 0px #243041 inset;
margin-top: 61px;
margin-bottom: 69px ;
`

const Btn=styled.button`
  background: ${props=>props.bg};
  width:${props=>props.wh};
  height:${props=>props.hg};
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
line-height: 120%;
letter-spacing: 1.6px;
text-transform: uppercase;
`
const Imge=styled.div`
  margin-top:-50px;
`

function App() {
  return (
     <Continer> 
       {/* Saytning  kirish qismi */}
        <Bola> 
         <Imge>
         <img src="./logo.svg" alt="" width={250} height={115}  />
         </Imge>
          <Link to={'/pick'}>
          <Ply>
            <img src="./icon-play.svg" alt="" />
          </Ply>
          
          </Link>
          <Link to={'/how'}><Btn bg='#2463FF' wh='260px' hg='62px' rd='40px'>HOW TO PLAY</Btn></Link>
        </Bola>
    </Continer>
  )
}

export default App