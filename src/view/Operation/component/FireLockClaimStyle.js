import styled from "styled-components";
export default   styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  .input-box .ant-form-item-control-input-content{
    display: flex;
    align-items: center;
  }
  .info-box{
    display: flex;
    justify-content: space-between;
    .name{
      
    }
    .value{
      font-size: 16px;
      font-weight: bold;
    }
  }
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
    top: calc(20vh);
    left: calc(50vw - 250px);
    width: 550px;
    background: #1D1212;
    border-radius: 13px;
    border: 1px solid #3E3737;
    padding: 30px;
    .header{
      text-align: right;
      .close{
        cursor: pointer;
      }
    }
    .dialog-name{
      font-size: 23px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin: 1em 0;
      line-height: 29px;
    }
    .dialog-info{
      text-align: center;
      margin: 2em 0 1em;
      font-size: 17px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      line-height: 20px;
    }
    
    .dialog-address{
      text-align: center;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FF9260;
      line-height: 24px;
      svg{
        margin-left: 6px;
      }
    }
    .sub-btn{
      font-size: 18px;
      margin: 3em 44px 1em;
      width: 400px;
      height: 50px;
    }
  }
`

