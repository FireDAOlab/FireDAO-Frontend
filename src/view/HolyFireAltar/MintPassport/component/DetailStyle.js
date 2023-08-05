import styled from "styled-components";
export default   styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
@media screen and (max-width: 450px) {
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
    left: calc(50vw - 42.5%);
    /* width: 520px; */
    background: #241B1B;
    border-radius: 13px;
width: 85%;

    border: 1px solid #3E3737;
    padding: 30px;

    .header{
      text-align: right;      
      .close{
        cursor: pointer;
      }
    }
    .title{
      font-size: 16px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 25px;
      }

    .dialog-name,.ant-form-item-label label{
      padding-bottom: 1em ;
      font-size: 14px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 1em;
      line-height: 29px;
    }
    .sub-btn{
      width: 200px;
      margin: 0em 18%;
    }
  }
  .nft-detail {
            font-size: 14px;
  .content-item {
    display: flex;
              justify-content: space-between;
              margin: 0.8em 0;
              text-align: right;

              .name {
                color: #999;
                font-size:14px;
                white-space: nowrap;
              }

              .value {
                font-size:14px;
                max-width: 60%;
              }

              .address {
                background: rgba(205,158,87,0.1);
border-radius: 30px ;
color: rgba(205, 158, 87, 1);
border: 1px solid rgba(205,158,87,0.5);
                a {
                  color: rgba(205, 158, 87, 1);
                }
              }
            }
        }

  }
`