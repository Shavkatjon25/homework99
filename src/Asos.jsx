import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Omborchi from "./Omborchi"
import { Link } from "react-router-dom"

const Continer=styled.div`
  max-width:100vw;
  min-height:100vh;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
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
width:100vw;
gap:8%;
align-items:center;
padding-left:24px;
padding-right:24px;
margin-bottom:15%;
position:fixed;
background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
`
const JonOta=styled.div`
    padding:4px;
    min-width:48px;
    background: white;
    border-radius:999px;
    display:flex;
`
const Jon=styled.div`
    height:4px;
    width:${props=>props.hg*6}px;
    background: red;
    border-radius:999px;
`
const Jon1=styled.div`
    height:4px;
    min-width:0px;
    background: #000;
    border-radius:999px;
    flex:1 1 0%;
`
const UmJon=styled.div`
  display:flex;
  justify-content:center;
  gap:5px;
  align-items:center;
`

const Harflar=styled.div`
margin-top:25vh;
justify-content:center;
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
`
const Harfla=styled.div`
  margin-top:50px;
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
  justify-content:center;
`

const Harf=styled.h2`
  color: ${props=>props.belgi ? '#fff':'#2463FF '};
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  margin:0;
  opacity:${props=>props.belgi ? '1':'0.25'};
  text-transform: uppercase;
  border-radius: 12px;
  background: var(--Blue, #2463FF);
  box-shadow: 0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset;
  display: flex;
  width: 40px;
  height: 66px;
  box-sizing:border-box;
  justify-content: center;
  align-items: center;
  cursor: no-drop ;
 
`

const Har=styled.h2`
  color:  #261676;
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  margin:0;
  text-transform: uppercase;
  border-radius: 12px;
  background: ${props=>props.holat ? 'rgba(250, 250, 250, 0.25)':'#fff'};
  box-shadow:  0px -2px 0px 3px #fff, 0px 1px 0px 6px #261676 inset, inset;
  display: flex;
  width: 40px;
  height: 66px;
  box-sizing:border-box;
  justify-content: center;
  align-items: center;
  cursor: ${props=>props.holat ? 'no-drop':'pointer'} ;
 
`

const Abs=styled.div`
  display:${props=>props.dsp ? 'flex':'none'};
  justify-content:center;
  align-items:center;
  position:absolute;
  width:100vw;
  height:100vh;
  top:0; 
  background: linear-gradient(180deg, rgba(26, 4, 58, 0.75) 0%, rgba(21, 18, 120, 0.75) 70.31%, rgba(43, 22, 119, 0.75) 100%);
`
const Modal=styled.div`
  width: 324px;
  height: 445px;
  border-radius: 48px;
background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
box-shadow: 0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset;
display:flex;
flex-direction:column;
align-items:center;
`

const Pauza=styled.h2`
margin:0;
margin-top:-50px;
margin-bottom:43px;
  text-align: center;
-webkit-text-stroke-width: 8;
-webkit-text-stroke-color: #243041;
font-family: "Mouse Memoirs";
font-size: 94px;
font-style: normal;
font-weight: 400;
background: linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

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
margin-bottom:34px;
`

function Asos() {

  const dicpach=useDispatch();
  const {tanlangan, harflar, xatolarsoni, aler, golibBoldi, yutqazdi }=useSelector(a=>a);
  
  const arr=tanlangan;
  
  
  useEffect(()=>{
      document.addEventListener('keypress', (k)=>{
          Klik(k.key)
      }),
      dicpach(Omborchi.actions.tanlandi());
  },[])
  
  function Klik(a){
      dicpach(Omborchi.actions.bosildi(a));
      console.log(a);
  };
  if (xatolarsoni==0) {
      dicpach(Omborchi.actions.aler());
      dicpach(Omborchi.actions.xataSoni());
      dicpach(Omborchi.actions.tanlandi());
  }
  function Alrt(){
      dicpach(Omborchi.actions.aler());
  }



  return (
        <Continer> 
          {/* O'yning asosiy sahifasi busahifada ishtirokchi o'ynni o'ynaydi  */}
        <Div>
        <Back onClick={Alrt}>
          {/* Menu buttton  */}
            <Img src="./icon-menu.svg" alt="" />
        </Back>
        <To>
        Countries
        </To>
        <UmJon>
        <JonOta>
          <Jon hg={xatolarsoni}/>
          {/* Ishtirokchini tato qilganini so'rsatuvchi qizil chiziq */}
          <Jon1/>
          {/* Ishtirokchini tato qilganini so'rsatuvchi qora chiziq */}
        </JonOta>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
  <path d="M13.921 24L12.0245 22.2736C5.28883 16.1657 0.841965 12.1243 0.841965 7.19346C0.841965 3.15204 4.00709 0 8.03543 0C10.3112 0 12.4954 1.0594 13.921 2.72044C15.3466 1.0594 17.5308 0 19.8065 0C23.8349 0 27 3.15204 27 7.19346C27 12.1243 22.5531 16.1657 15.8174 22.2736L13.921 24Z" fill="url(#paint0_linear_69_7)"/>
  <defs>
    <linearGradient id="paint0_linear_69_7" x1="13.921" y1="3.9403" x2="13.921" y2="24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FE71FE"/>
      <stop offset="1" stop-color="#7199FF"/>
    </linearGradient>
  </defs>
</svg>
        </UmJon>
        </Div>
          <Harflar>
            {/* Tanlangan so'zni ekranga joylavchi funksiya */}
          {tanlangan.map(m=>{
              return(<Harf belgi={m.aniqlangan}>{m.belgi}</Harf>)
            })}           
          </Harflar>
          <Harfla>
            {/* Harflarni ekranga joylavchi funksiya */}
            {harflar.map(m=>{
              return(<Har holat={m.aniqlangan} onClick={()=>Klik(m.belgi)}>{m.belgi}</Har>)
            })}
          </Harfla>
          <Abs dsp={aler}>
            {/* Modal */}
              <Modal>
                  <Pauza>
                  {golibBoldi ? 'You Win': ( yutqazdi ? 'You Lose':'Paused')}
                  {/*  Ishtirokchi yutganini yoki yutqazganini aniqlovchi funksiya */}
                  </Pauza>
                  <Btn wh='226px' hg='62px' rd='999px' bg='#2463FF' onClick={()=>{Alrt(); golibBoldi ? dicpach(Omborchi.actions.tanlandi()):''}}>continue</Btn>
                  <Link to={'/pick'}>
                  <Btn wh='275px' hg='62px' rd='999px' bg='#2463FF' onClick={()=>{Alrt()}}>new category</Btn>
                  </Link>
                  <Link to={'/'}>
                  <Btn wh='226px' hg='62px' rd='999px' bg='var(--Pink-Gradient, linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%))' onClick={()=>{Alrt()}}>quit game</Btn>
                  </Link>
              </Modal>
            </Abs>

        </Continer>

  )
}

export default Asos