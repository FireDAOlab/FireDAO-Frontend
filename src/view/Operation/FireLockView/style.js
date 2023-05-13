import styled from "styled-components";
export default   styled.div`
  .contract-address,.title{
    width: 90%;
    margin: 0 auto;
  }
  h1{
    margin:  0 auto;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
  }
  .panel-container{
    margin: 1em auto;
    width: 90%;
    .back {
      cursor: pointer;
      width: 40px;
      margin:-1em 0 1em -3em;
    }
  }

  .row,.list-header{
    justify-content: space-between!important;
    min-width: 920px;
  }
  .col{
    display: flex;
    
    width: 10%;
    text-align: left!important;
    .operate-btn{
      margin-left: 6px;
    }
    &:nth-child(1){
      width: 6%;
    }
    &:nth-child(3){
      width: 8%;
    }
    &:nth-last-child(3){
      min-width: 130px;
    }
    &:nth-last-child(2){
      width: 6%;
    }
    &:last-child{
      width: 18%;
    }
  }
  .contract-address{
    margin:  40px auto;
    display: flex;
    align-items: center;
    .name{
      font-size: 14px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      opacity: 0.5;
      line-height: 22px;
    }
    .value{
      width: 351px;
      height: 34px;
      background: #3F3535;
      border-radius: 6px;
      border: 1px solid #342727;
      font-size: 10px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 34px;
      padding: 0 10px;
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .panel-container {

    .sub-title{
      font-size: 18px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 22px;
      margin-top: 2em;
    }
    .info-row{
      display: flex;
      align-items: center;
      margin-top: 1em;
      .name{
        font-size: 14px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 22px;
        width: 166px;
        opacity: 0.5;
      }
      .value{
        width: 351px;
        height: 34px;
        background: #3F3535;
        border-radius: 6px;
        border: 1px solid #342727;
        font-size: 10px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 34px;
        padding: 0 10px;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &.withdraw-box{
      .name{
        font-size: 16px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        opacity: 0.5;
        line-height: 22px;
      }
      .value{
        font-size: 33px;
        font-family: Krungthep;
        color: #FFFFFF;
        line-height: 42px;
        margin-top: 10px;
      }
      Button{
        width: 150px;
        height: 33px;
        margin-top: 40px;
      }
    }
  }





  /* mobile style */
  @media screen and (max-width: 1000px) {
    .contract-address{
      display: block;
      .value{
        width: 100%;
        margin:  1em  0;
      }
    }
    .panel-container {
      width: 90vw;
      padding: 3em 1em;

        .info-row{
          display: block;
          .value{
            width: 100%;
            margin:  1em  0;
          }
        }
        .back{
            margin: 0 auto 1em;
        }
  
    }
  }
`

