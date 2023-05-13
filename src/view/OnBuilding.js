import React, {} from 'react';
import styled from "styled-components";
import onBuildingImg from  "../imgs/fire_building.webp"
const OnBuilding = () => {
    const OnBuilding = styled.div`

      .panel-box{
        .panel-container{
          padding: 0 10em 5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
      img{
        margin-top: 15%;
        min-width: 300px;
        width: 23vw;
      }
      .title{
        margin-top: 2em;
        font-size: 2vw;
        font-family: Roboto-Bold, Roboto,sans-serif;  
        font-weight: bold;
        color: #FFFFFF;
        line-height: 3vw;
      }
      @media screen and (max-width: 1000px) {
        img{
          min-width: 200px;
        }
      }
    `


    return (
        <OnBuilding>
            <div className="panel-box">
                <div className="panel-container">
                    <img src={onBuildingImg} alt=""/>
                    <div className="title">
                        This module is on building!
                    </div>
                </div>
            </div>
        </OnBuilding>
    )
}
export default OnBuilding
