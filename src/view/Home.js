import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Form, message, Input, Tooltip, notification} from 'antd';
import BitCivilization from "../imgs/BitCivilization@2x.webp"
import HOLYFIREALTAR from "../imgs/HOLYFIREALTAR@2x.webp"
import ConnectWallet from "../component/ConnectWallet/ConnectWallet";
import HomeBg from "../imgs/home_bg.webp"
import MHomeBg from "../imgs/m_home_bg.webp"
import {useConnect} from "../api/contracts";

import HomeIcon1 from "../imgs/home_icon1.webp"
import HomeIcon2 from "../imgs/home_icon2.webp"
import HomeIcon3 from "../imgs/home_icon3.webp"
import BitTime from "../component/BitTime";

const Home = (props) => {
    const history = useNavigate();

    const Home = styled.div`
      @keyframes move{
        0% {
          transform: translateY(-2em);
        }
        50% {
          transform: translateY(2em);
        }
        100% {
          transform: translateY(-2em);
        }
      }
      @keyframes move2{
        0% {
          transform: translateY(3em);
        }
        50% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(3em);
        }
      }
    
      /* mobile style */
      @media screen and (min-width: 1000px) {
        overflow-x: hidden;
        .swiper{
          display: none;
        }
        .home{
          width: 100vw;
          height:56.25vw;
          overflow-y: scroll;
          background: url(${HomeBg}) no-repeat ;
          background-size: 100% 100%;
          min-width: 800px;
          min-height: 100vh;
          padding-bottom: 3em;
          header{
            position: fixed;
            width: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 1em 0px;
            .left-icon{
              width: 238px;
              height: 54px;
            }
          }
          .home-content{
            display: flex;
            flex-direction: column;
            align-items: center;

            .title1{
              margin-top: 2em;
              width:526px;
              height: 72px;
            }

          }
          .box-list{
            margin-top: 2em;
            position: relative;
            width: 100%;
            .box-item:nth-child(1){
              top: 0;
              left: calc(50% - 10em);
              animation: move 15s infinite ;
              transform: translateY(-2em);
            }
            .box-item:nth-child(2){
              top: 13em;
              left: calc(50% - 10em);
              margin-left: 20vw;
              animation: move2 15s infinite ;
              transform: translateY(3em);
            }
            .box-item:nth-child(3){
              top: 13em;
              left: calc(50% - 10em);
              margin-left: -20vw;
              animation: move2 15s infinite ;
              transform: translateY(3em);
            }
            .box-item{
              position: absolute;
              width: 20em;
              background: rgba(32,20,20,0.5);
              border-radius: 30px;
              border: 1px solid #5E5E5E;
              padding: 1em;
              text-align: center;
              img{
                width: 3em;
              }
              .title{
                font-size: 1.4em;
                font-family: Roboto-Bold, Roboto,sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 28px;
                margin-top: 0.5em;
              }
              .info{
                font-size: 0.8em;
                font-family: Helvetica-Bold, Helvetica,sans-serif;
                font-weight: bold;
                color: #999;
                line-height: 19px;
                margin-top: 0.5em;
              }
              Button{
                width: 10em;
                border-radius: 10px;
                height: 2.4em;
                margin-top: 0.5em;
                font-size: 1.3em;
                font-family: Helvetica-Bold, Helvetica,sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 2em;
              }
              .uncomme{
                color: #999;
              }
            }
          }
        }
      }
      /* mobile style */
      @media screen and (max-width: 1000px) {
        min-height: 100vh;

        overflow-x: hidden;
        width: 100vw;
        .home{
          width: 100vw;
          overflow-x: hidden;
          background: url(${MHomeBg}) no-repeat ;
          background-size: 100% 100%;
          min-height: 100vh;
          overflow-y: scroll;
          padding-bottom: 3em;
         text-align: center;
          header{
            width: 100%;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 1em 0px;
            .left-icon{
              width: 238px;
              height: 54px;
            }
          }
   
          .home-content{
            .title1{
              margin-top: 2em;
              width:80vw;
            }

          }
  
        }
        .box-list{
          display: none;
        }
        .swiper-wrapper{
          margin-top: 2em;
          width: 80vw;
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s linear;
            -webkit-transform: scale(.65);
            transform: scale(.65);
                -webkit-filter: brightness(50%);
                filter: brightness(50%)
          }

          .swiper-slide.swiper-slide-next {
            -webkit-transform: scale(1);
            transform: scale(1);
            z-index: 10;
            -webkit-filter: brightness(1);
            filter: brightness(1)
          }
          .swiper-slide{
            width: 100%;
            .box-item{
              width: 60vw;
              background: rgba(32,20,20,0.7);
              border-radius: 30px;
              border: 1px solid #5E5E5E;
              padding: 1em;
              text-align: center;
              img{
                width: 3em;
              }
              .title{
                font-size: 1.4em;
                font-family: Roboto-Bold, Roboto,sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 28px;
                margin-top: 0.5em;
              }
              .info{
                font-size: 0.8em;
                font-family: Helvetica-Bold, Helvetica,sans-serif;
                font-weight: bold;
                color: #999;
                line-height: 19px;
                margin-top: 0.5em;
              }
              Button{
                width: 10em;
                border-radius: 10px;
                height: 2.4em;
                margin-top: 0.5em;
                font-size: 1.3em;
                font-family: Helvetica-Bold, Helvetica,sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 2em;
              }
              .uncomme{
                color: #999;
              }
            }
          }
        }
      }
    `
    let {state, dispatch} = useConnect();

    const goPage = (url) => {
        history(url);
    }
    useEffect(() => {
        /*eslint-disable*/

        new Swiper('.swiper-container', {
            autoplay: 4000,
            slidesPerView: 3,
            paginationClickable: true,
            loop: true,
        });

    }, []);
    return (
        <Home>
            <div className="home">
                <header>
                    <img className="left-icon" src={HOLYFIREALTAR} alt=""/>
                </header>
               <div className="home-content">
                   <img className="title1" src={BitCivilization} alt=""/>
                   <BitTime/>
                   <div className="box-list">
                       <div className="box-item">
                           <img src={HomeIcon2} alt=""/>
                           <div className="title">
                               FirePassport
                           </div>
                           <div className="info">
                               Non-transferable ERC721 NFTs
                           </div>
                           <Button type="primary"  onClick={()=>goPage("/MintPassport")}>
                               CREATE
                           </Button>
                       </div>
                       <div className="box-item">
                           <img src={HomeIcon3} alt=""/>
                           <div className="title">
                               FireSoul
                           </div>
                           <div className="info">
                               Non-transferable ERC721 NFTs
                           </div>
                           <Button className="uncomme">
                               {/*<Button type="primary" onClick={()=>goPage("/MintFireSoul")}>*/}
                               COMING SOON
                           </Button>
                       </div>
                       <div className="box-item">
                           <img src={HomeIcon1} alt=""/>
                           <div className="title">
                               FireSeed
                           </div>
                           <div className="info">
                               Transferable ERC1155 NFTs
                           </div>
                           <Button className="uncomme">
                               {/*<Button type="primary"  onClick={()=>goPage("/MintFireSeed")}>*/}
                               COMING SOON
                           </Button>
                       </div>
                   </div>
                   <div className="swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events"
                   >
                       <div className="swiper-wrapper">

                           <div className="swiper-slide" data-swiper-slide-index="12" >
                               <div className="box-item">
                                   <img src={HomeIcon1} alt=""/>
                                   <div className="title">
                                       FireSeed
                                   </div>
                                   <div className="info">
                                       Transferable ERC1155 NFTs

                                   </div>
                                   <Button className="uncomme">
                                       {/*<Button type="primary"  onClick={()=>goPage("/MintFireSeed")}>*/}
                                       COMING SOON
                                   </Button>
                               </div>
                           </div>
                           <div className="swiper-slide" data-swiper-slide-index="11" >
                               <div className="box-item">
                                   <img src={HomeIcon2} alt=""/>
                                   <div className="title">
                                       FirePassport
                                   </div>
                                   <div className="info">
                                       Non-transferable ERC721 NFTs
                                   </div>
                                   <Button type="primary"  onClick={()=>goPage("/MintPassport")}>
                                       CREATE
                                   </Button>
                               </div>
                           </div>
                           <div className="swiper-slide" data-swiper-slide-index="13" >
                               <div className="box-item">
                                   <img src={HomeIcon3} alt=""/>
                                   <div className="title">
                                       FireSoul
                                   </div>
                                   <div className="info">
                                       Non-transferable ERC721 NFTs
                                   </div>
                                   <Button className="uncomme">
                                       {/*<Button type="primary" onClick={()=>goPage("/MintFireSoul")}>*/}
                                       COMING SOON
                                   </Button>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>
            </div>
        </Home>
    )
}
export default Home
