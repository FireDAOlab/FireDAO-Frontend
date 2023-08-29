import styled from "styled-components";
export default   styled.div`

position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  .ant-form-item-row{
    width: 100%;
    margin: 0em;
  }
  
  @media screen and (min-width: 1950px) {
.ant-input{
    line-height: 1.815;
    height: 34px;
    font-size:16px;
}

    .ant-form {input{
text-align:center;
    }}
    .address-list {
    display: block;
    .address-item {
      display: block;
      align-items: center;
text-align:center;
      .address {
          width: 300px;
          border: none;
          background:none;
          border-radius:0px;
      }

      .number {
        .ant-form-item-label {
          text-align: center;
          width: 100px !important;
        }

        .ant-form-item-control-input {
          width: 100%;
        }
      }

      cursor: pointer;

      .icon {
        margin-top:10px;
        margin-right:10px;
        width: 25px;
        line-height: 30px;
        font-size: 26px;
      }
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

  .fire-list-box1 {
    padding: 0em 0 0em;
    .list-header{
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 20px 0em;
    }
    .list-header,.address-item {
      display: block;
      font-size: 18px;
      font-weight: bold;
   
      color: #8A8080;
      .col{
        display: block;
      text-align: left;
      flex-shrink: 0;
      &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2) {
            width: 100%;
          }
          &:nth-child(3) {
            width: 100%;
          }

          &:nth-child(4) {
            width: 100%;
          }

    }
 
    
      .col {
        display: flex;
        white-space: nowrap;
        
        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
      .no1{
        margin: 15px 0px;
        text-align:left;
        justify-content:left;
      
  .ant-form-item-control-input-content{
            text-align:center;
        }
       
      }
      .address1{
        margin: 15px 0em;
        color: rgb(255, 146, 96);
    border-radius: 30px;
 
      }
    }
 
  }


  .dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(20vh);
    height: 500px;
    left: calc(50vw - 250px);
    width: 550px;
    background: #241B1B;
    border-radius: 13px;
overflow-y: auto;

    border: 1px solid #3E3737;
    padding: 30px;

    .header{
        display: flex;
    -webkit-box-pack: justify;
    justify-content: center; 
     .close{
        cursor: pointer;
         
      }
        .title{
      font-size: 23px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin: auto;
      line-height: 29px;
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
      padding-bottom: 0em ;
      font-size: 16px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 0.5em;
      line-height: 20px;
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
}

  @media screen and (max-width: 1950px) {
.ant-input{
    line-height: 1.815;
    height: 34px;
    font-size:16px;
}

    .ant-form {input{
text-align:center;
    }}
    .address-list {
    display: block;
    .address-item {
      display: block;
      align-items: center;
text-align:center;
      .address {
          width: 300px;
          border: none;
          background:none;
          border-radius:0px;
      }

      .number {
        .ant-form-item-label {
          text-align: center;
          width: 100px !important;
        }

        .ant-form-item-control-input {
          width: 100%;
        }
      }

      cursor: pointer;

      .icon {
        margin-top:10px;
        width: 25px;
        margin-right:10px;
        line-height: 30px;
        font-size: 26px;
      }
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

  .fire-list-box1 {
    padding: 0em 0 0em;
    .list-header{
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 20px 0em;
    }
    .list-header,.address-item {
      display: block;
      font-size: 18px;
      font-weight: bold;
   
      color: #8A8080;
      .col{
        display: block;
      text-align: left;
      flex-shrink: 0;
      &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2) {
            width: 100%;
          }
          &:nth-child(3) {
            width: 100%;
          }

          &:nth-child(4) {
            width: 100%;
          }

    }
 
    
      .col {
        display: flex;
        white-space: nowrap;
        
        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
      .no1{
        margin: 15px 0px;
        text-align:left;
        justify-content:left;
      
  .ant-form-item-control-input-content{
            text-align:center;
        }
       
      }
      .address1{
        margin: 15px 0em;
        color: rgb(255, 146, 96);
    border-radius: 30px;
 
      }
    }
 
  }


  .dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(20vh);
    height: 500px;
    left: calc(50vw - 250px);
    width: 550px;
    background: #241B1B;
    border-radius: 13px;
overflow-y: auto;

    border: 1px solid #3E3737;
    padding: 30px;

    .header{
        display: flex;
    -webkit-box-pack: justify;
    justify-content: center; 
     .close{
        cursor: pointer;
         
      }
        .title{
      font-size: 23px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin: auto;
      line-height: 29px;
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
      padding-bottom: 0em ;
      font-size: 16px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 0.5em;
      line-height: 20px;
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
}
  /* mobile style */
  @media screen and (max-width: 1500px) {
.ant-input{
    line-height: 1.815;
    height: 34px;
    font-size:14px;
}

    .ant-form {input{
text-align:center;
    }}
    .address-list {
    display: block;
    .address-item {
      display: block;
      align-items: center;
text-align:center;
      .address {
          width: 300px;
          border: none;
          background:none;
          border-radius:0px;
      }

      .number {
        .ant-form-item-label {
          text-align: center;
          width: 100px !important;
        }

        .ant-form-item-control-input {
          width: 100%;
        }
      }

      cursor: pointer;

      .icon {
        margin-top:10px;
        margin-right:10px;
        width: 25px;
        line-height: 30px;
        font-size: 26px;
      }
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

  .fire-list-box1 {
    padding: 0em 0 0em;
    .list-header{
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 20px 0em;
    }
    .list-header,.address-item {
      display: block;
      font-size: 14px;
      font-weight: bold;
   
      color: #8A8080;
      .col{
        display: block;
      text-align: left;
      flex-shrink: 0;
      &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2) {
            width: 100%;
          }
          &:nth-child(3) {
            width: 100%;
          }

          &:nth-child(4) {
            width: 100%;
          }

    }
 
    
      .col {
        display: flex;
        white-space: nowrap;
        
        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
      .no1{
        margin: 15px 0px;
        text-align:left;
        justify-content:left;
      
  .ant-form-item-control-input-content{
            text-align:center;
        }
       
      }
      .address1{
        margin: 15px 0em;
        color: rgb(255, 146, 96);
    border-radius: 30px;
 
      }
    }
 
  }


  .dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(15vh);
    height: 500px;
    left: calc(50vw - 250px);
    width: 550px;
    background: #241B1B;
    border-radius: 13px;
overflow-y: auto;

    border: 1px solid #3E3737;
    padding: 30px;

    .header{
        display: flex;
    -webkit-box-pack: justify;
    justify-content: center; 
     .close{
        cursor: pointer;
         
      }
        .title{
      font-size: 20px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin: auto;
      line-height: 29px;
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
      padding-bottom: 0em ;
      font-size: 14px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 0.5em;
      line-height: 20px;
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
      font-size: 16px;
      margin: 1.5em 44px 0.5em;
      width: 400px;
      height: 45px;
    }
  }
}


@media screen and (max-width: 450px) {
    .ant-form-item-row{
margin:-0.25em;
    }
.ant-input{
    line-height: 1.815;
    height: 34px;
    font-size:14px;
}

    .ant-form {input{
text-align:center;
    }}
    .address-list {
    display: block;
    .address-item {
      display: block;
      align-items: center;
text-align:center;
      .address {
          width: 300px;
          border: none;
          background:none;
          border-radius:0px;
      }

      .number {
        .ant-form-item-label {
          text-align: center;
          width: 100px !important;
        }

        .ant-form-item-control-input {
          width: 100%;
        }
      }

      cursor: pointer;

      .icon {
        margin-top:10px;
        margin-right:10px;
        width: 25px;
        line-height: 30px;
        font-size: 26px;
      }
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

  .fire-list-box1 {
    padding: 0em 0 0em;
    .list-header{
      border-bottom: 0.5em solid rgba(255,255,255,0.1);
      padding: 10px 0em;
    }
    .list-header,.address-item {
      display: block;
      font-size: 14px;
      font-weight: bold;
   
      color: #8A8080;
      .col{
        display: block;
      text-align: left;
      flex-shrink: 0;
      &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2) {
            width: 100%;
          }
          &:nth-child(3) {
            width: 100%;
          }

          &:nth-child(4) {
            width: 100%;
          }

    }
 
    
      .col {
        display: flex;
        white-space: nowrap;
        margin: 0em auto;
        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
      .no1{
        margin: 5px 0px;
        text-align:left;
        justify-content:left;
      
  .ant-form-item-control-input-content{
            text-align:center;
        }
       
      }
      .address1{
        margin: 15px 0em;
        color: rgb(255, 146, 96);
    border-radius: 30px;
 
      }
    }
 
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
height: ;
    border: 1px solid #3E3737;
    padding: 30px;
    overflow-y: auto;

    .header{
        display: flex;
    -webkit-box-pack: justify;
    justify-content: center; 
     .close{
        cursor: pointer;
         
      }
        .title{
      font-size: 20px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin: auto;
      line-height: 29px;
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
      padding-bottom: 0em ;
      font-size: 14px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 0.5em;
      line-height: 20px;
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
      width: 100%;
      margin: 0.5em auto;
      height: 40px;
    }
  }
}
`

