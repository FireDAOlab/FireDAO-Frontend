import styled from "styled-components";
import React, {useEffect, useState} from "react";
const BitTime = () => {
    const BitTimeBox = styled.div`
      .bit-time {
        display: flex;
        flex-direction: column;
        align-items: center;
        .flex-box{
          align-items: center;
          margin-top: 0.6em;
          font-size: 1.3em;
        }
        .line{
          display: flex;
          align-items: center;
          font-size: 1.3em;
        }
        .date{
          padding: 5px 10px;
          background: #201414;
          border-radius: 5px;
          opacity: 0.5;
          border: 1px solid #414141;
          margin: 0 0.5em;
          span{
            font-size: 1.3em;
            font-family: Roboto-Bold, Roboto,sans-serif;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 24px;
            background: linear-gradient(-90deg, #DD3642 0%, #FFC02C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
    
      }
      @media screen and (max-width: 1000px) {
        .bit-time {
          width: 100%;
          display: flex;
          align-items: flex-start;
        }
        
        .flex-box{
          width: 100%;
          display: block;
          text-align: center;
          justify-content: center;
          padding: 0 5%;
          .line{
            justify-content: center;
          }
        }
      }
    `
    const [curBlock, setCurBlock] = useState(772125)
    const [days, setDays] = useState(0)
    const [years, setYears] = useState(14)
    const [bitDate, setBitDate] = useState("")
    const [currentTime, setCurrentTime] = useState(Date.now());



    useEffect(() => {
        /* eslint-disable */
        try{
            const timeID = setInterval(() => {
                setCurrentTime(Date.now());
                const curDate = new Date(currentTime);
                let startDate= new Date() , bitDate
                startDate.setFullYear(2009)
                startDate.setMonth(0)
                startDate.setDate(4)
                startDate.setHours(18)
                startDate.setMinutes(15)
                startDate.setSeconds(5)

                let years = parseInt(curDate.getUTCFullYear()) - parseInt(startDate.getUTCFullYear())
                setYears(years)

                let time = curDate.getTime()-startDate.getTime()
                let days=Math.floor(time/(1000*60*60*24))
                days =days  - years * 365 - 1
                setDays(days)

                bitDate = new Date(time)

                let month =  (curDate.getUTCMonth()+1)<10?"0"+ (curDate.getUTCMonth()+1): (curDate.getUTCMonth()+1)
                let d = curDate.getUTCDate() < 10 ?"0"+curDate.getUTCDate():curDate.getUTCDate()
                let h = curDate.getUTCHours() < 10? "0" + curDate.getUTCHours() :curDate.getUTCHours()
                let m = curDate.getUTCMinutes() < 10 ? "0" + curDate.getUTCMinutes() :curDate.getUTCMinutes()
                let s = curDate.getUTCSeconds() < 10? "0" + curDate.getUTCSeconds():curDate.getUTCSeconds()
                bitDate = (bitDate.getUTCFullYear() - 1970) + "-" +month + "-" +d + " "
                    + h + ":" + m + ":" +s
                setBitDate(bitDate)

                clearInterval(timeID);
            }, 1000);

        }catch (e){
            console.log(e)
        }

    }, [bitDate]);

    useEffect(()=>{
        try{
            $.get( "https://chain.so/api/v2/get_info/BTC", function( response ) {
                setCurBlock(response.data.blocks)
            }, "json" );
        }catch (e) {
        }

    },[])
    return (
        <BitTimeBox>
            <div className="bit-time">
                <div className="flex-box">
                    Bitcoin’s date of birth:
                    <div className="line">

                        <div className="date">
                           <span>
                               2009-01-03 18:15:05 (UTC)
                           </span>
                        </div>
                    </div>
                </div>

                <div className="flex-box">
                    The timespan of Bitcoin's existence:
                    <div className="line">

                        <div className="date">
                           <span>
                               {years}
                           </span>
                        </div>
                        Years
                        <div className="date">
                           <span>
                               {days}
                           </span>
                        </div>
                        Days
                    </div>

                </div>
                <div className="flex-box">
                    Bitcoin's current block height:
                    <div className="line">

                        <div className="date">
                           <span >
                               {curBlock}
                           </span>
                        </div>
                    </div>
                </div>
                <div className="flex-box">
                    BIT Date:
                    <div className="line">

                        <div className="date">
                            <span>00{bitDate} BIT (UTC)</span>
                        </div>
                    </div>
                </div>

            </div>
        </BitTimeBox>
    )

}
export default BitTime
