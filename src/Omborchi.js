import { createSlice } from "@reduxjs/toolkit";
import Data from "./data";


const Omborchi=createSlice({
    name:'ombor',
    initialState:{
        data:[],// Ekranga chililagidan so'z uchun array
        harflar:[''], // Ekranga chililagidan so'z uchun objekt
        harf:['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ],// Harflar 
        tanlangan:[''], // Ekranga chililagidan harflar uchun objekt
        xatolarsoni:8, // Xato ezillishi mumkun bo'lhan harflar soni
        xato: true,//Bosilgan harf hato  yoki hato emasligini aniqlovchi 
        aler: false,// O'yin o'ynalyotganda modal oyna holati 
        golib:0,//Bosilganda to'gri chiqqan harflar soni
        yutqazdi:false,// O'ynda holati
        golibBoldi:false,//O'yin holati
    },


    reducers:{
            malumotTuri:(state, {payload})=>{
                state.data=Data[payload];
                console.log(Data[payload]);
            },     //Data tadagi malumotdan bosilgan yo'nalishni tanlab olish uchun funksiya                  





        bosildi:(state, {payload})=>{
            state.xato=true
            state.golib=0;
            state.tanlangan=state.tanlangan.map(k=>{
                if (k.belgi.toLowerCase()==payload.toLowerCase() ) {
                    state.xato=false
                }
                 k= k.belgi.toLowerCase()==payload.toLowerCase() ? {...k, aniqlangan:true}  : k;
                 state.golib= k.aniqlangan ? state.golib+1:state.golib;
                return k;
            })// Bosilgan harf berilgan so'zni ichida bo'lsa uning holatini o'zgar tirish uchun
            state.harflar=state.harflar.map(k=>{
                if (k.belgi.toLowerCase()==payload.toLowerCase() && k.aniqlangan ) {
                    state.xato=false
                }
                k= k.belgi.toLowerCase()==payload.toLowerCase() ? {...k, aniqlangan:true} : k;
               return k
           });//Bosilgan harfni ekrandagi holatini o'zgartirish uchun funksiya
           if (state.xato) {
            state.xatolarsoni=+state.xatolarsoni-1;
           };// Bosilgan harf hato bo'lsa 
           if (state.tanlangan.length==state.golib) {
                state.aler=!state.aler
                state.golibBoldi=true
           }// Ishtirokchi g'olib bo'lganini aniqlash uchun shart

        }, // Ekrandagi harflar yoki klaviaturadagi harflar bosilganda yo'rberadigan holat 



        aler: (state)=>{
            state.aler= !state.aler;
            state.yutqazdi=false;
        },//Modal holatini o'zgartirish
        xataSoni:(state)=>{
            state.xatolarsoni=8;
            state.yutqazdi=true;
        },//Ishtirokchi mag'lub bo'lganda Xato ezillishi mumkun bo'lhan harflar sonini o'zgartirish
        tanlandi:(state)=>{
            state.golibBoldi=false;
                state.tanlangan=state.data[Math.floor(Math.random()*29)].name.split('').map(m=>{console.log(m);
                    return({
                        belgi:m,
                        aniqlangan:false
                    })
                }),//Aniqlangan so'zni obyekt ko'rinishga o'tkazish
                state.harflar=state.harf.map(n=>{
                    return({
                        belgi:n,
                        aniqlangan:false
                    })
                }),//Harflarni obyekt ko'rinishga o'tkazish
                state.xatolarsoni=8
        
        }
    }

})

export default Omborchi;