import styled from "styled-components";

export default styled.div`

@media screen and (min-width: 1500px) {
  .panel-title{
  font-size:30px;
}
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

    margin: 20px 10px;
    display: flex;
    align-items: center;
    .name{
      font-size:16px;
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
    margin: 20px 0px;
    margin-right:20px;
    display: flex;
    align-items: center;
    
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:16px;
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
font-size:15px;
    }
  }
  .content1{
    margin-bottom: 3em;
    
    .fire-list-box {

      min-width:100%;
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          font-size:15px;
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            min-width: 22%;
          }

          &:nth-child(2) {
            width: 22%;
          }

          &:nth-child(3) {
            width: 22%;
          }

          &:nth-child(4) {
            width: 22%;
          } 
        .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            //text-overflow: ellipsis;

          }
        }
    }
  }
}

}

  /* mobile style */
  @media screen and (max-width: 1500px) {
    .panel-title{
  font-size:30px;
}
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

    margin: 20px 10px;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
    }
    .score{
      text-align:center;
      margin-left: 20px;
      font-size: 13px;
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
    margin: 20px 0px;
    margin-right:20px;
    display: flex;
    align-items: center;
    
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
    }
    .value{
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      font-size:13px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .content1{
    margin-bottom: 3em;
    
    .fire-list-box {

      min-width:100%;
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;
          align-items: center;
          font-size:14px;
          &:nth-child(1) {
            min-width: 22%;
          }

          &:nth-child(2) {
            width: 22%;
          }

          &:nth-child(3) {
            width: 22%;
          }

          &:nth-child(4) {
            width: 22%;
          } 
        .list-item {
            padding: 0.5em 1em;
          .col {
            overflow: hidden;
            padding-left: 0.5%;
            //text-overflow: ellipsis;

          }
        }
    }
  }
}
      }
`

