import styled from "styled-components";

export default styled.div`

  .more-btn {
    width: 300px;
    height: 40px;
    background: #3F3535;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    margin: 2em auto 0;
    cursor: pointer;
  }

  .list {

    .list-item {
      cursor: pointer;
      display: flex;
      padding: 10px;
      margin-top: 2em;
      margin-right: 2.5%;
      background: #3F3535;
      border-radius: 10px;
      border: 1px solid #7F6868;
      >div{
        width: 20%;
      }
      .coefficients {
        margin: 0 10px;
      }
    }
  }
  .total-score{

    margin: 20px 50px;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
    }
    .score{
      text-align:center;
      margin-left: 20px;
      font-size: 15px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
    }
  }
  .my-soul{
    margin: 20px 0;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
    }
    .value{
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  /* mobile style */
  @media screen and (max-width: 1000px) {

  }
`

