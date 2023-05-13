import styled from "styled-components";
export default   styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.5;
  }
  .dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(10vh);
    left: calc(50vw - 250px);
    width: 550px;
    background: #1D1212;
    border-radius: 13px;
    border: 1px solid #3E3737;
    padding: 30px;
    .header{
      display: flex;
      justify-content: space-between;
      .title{
        font-size: 25px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
      }
      .close{
        cursor: pointer;
      }
    }
    .dialog-value{
      height: 24px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 24px;
    }
    .dialog-name,.ant-form-item-label label{
      padding-bottom: 1em ;
      font-size: 18px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 1em;
      line-height: 29px;
    }

    
    .dialog-address{
      text-align: center;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FF9260;
      line-height: 24px;
    }
    .sub-btn{
      font-size: 18px;
      margin: 1.5em 44px 0.5em;
      width: 400px;
      height: 50px;
    }
  }
  /* mobile style */
  @media screen and (max-width: 1000px) {
    .dialog-content{
      width: 90vw;
      left: calc(5vw);
    }

  }
`

