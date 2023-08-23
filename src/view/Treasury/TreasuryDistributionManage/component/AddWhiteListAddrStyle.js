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
  
  @media screen and (max-width: 1950px) {
    .ant-form {input{
text-align:center;
    }}
    .address-list {
    display: block;
    .address-item {
      display: block;
      align-items: center;
text-align:center;
      .ant-form-item-label {
        width: 150px !important;
      }

      .address {
        /* .ant-form-item-control-input { */
          width: 300px;
          border: none;
          background:none;
          border-radius:0px;
        /* } */
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
    /* min-width: 800px; */
    .list-header{
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 20px 0em;
    }
    .list-header,.address-item {
      display: flex;
      justify-content: flex-start;
      font-size: 18px;
      font-weight: bold;
   
      color: #8A8080;
      .col{
      text-align: center;
      flex-shrink: 0;
      &:nth-child(1) {
            width: 22%;
            margin-left:0px;
          }

          &:nth-child(2) {
            width: 24%;
            margin-left:5px;
          }
          &:nth-child(3) {
            width: 22%;
            margin-left:5px;
          }

          &:nth-child(4) {
            width: 22%;
            margin-left:5px;
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
            text-align:left;
            justify-content:start;
        }
       
      }
      .address1{
        margin: 15px 0em;
        color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
      }
    }
    .address-item {
      /* padding: 0.5em 2em; */
      display: flex;
      justify-content: flex-start;
      border-radius: 10px;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      align-items: center;

  
         
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
}
  /* mobile style */
  @media screen and (max-width: 1000px) {
    .dialog-content{
      width: 90vw;
      left: calc(5vw);
    }

  }
`

