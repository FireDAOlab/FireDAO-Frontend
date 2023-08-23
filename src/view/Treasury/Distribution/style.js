import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* pc style */
  .disAd{
        float: right;
     background: #373232;
     margin: 0px 13px;
     text-align: center;
     line-height: 28px;
     width: 32px;
     height: 32px;
     border: 1px solid rgba(255, 255, 255, 0.15);
     border-radius: 50%;

}
  @media screen and (min-width: 1950px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 2em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
        &:nth-child(1) {
          width:10%;
         margin-left:10px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }
    }
}
.assets-box{
      margin-top: 1.5em;
      width: 100%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
      .title{
        font-size: 20px;
    font-family: Roboto-Medium, Roboto;
    font-weight: 600;
    color: rgb(138, 128, 128);
      }
      .asset{
        margin:8px 0px;
        font-size: 31px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ant-btn{
        margin-top: 10px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    width:25%;
    height: 40px;
    font-size: 18px;
      }
    }
}
}
  }

  @media screen and (max-width: 1950px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 2em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
        &:nth-child(1) {
          width:10%;
         margin-left:10px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }
    }
}
    .assets-box{
      margin-top: 1.5em;
      width: 100%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
      .title{
        font-size: 20px;
    font-family: Roboto-Medium, Roboto;
    font-weight: 600;
    color: rgb(138, 128, 128);
      }
      .asset{
        margin:8px 0px;
        font-size: 31px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ant-btn{
        margin-top: 10px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    width: 25%;
    height: 40px;
    font-size: 18px;
      }
    }
}
}
  }


  /* mobile style */
  @media screen and (max-width: 1500px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 1.5em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
        &:nth-child(1) {
          width:10%;
         margin-left:5px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }
    }
}
.assets-box{
      margin-top: 1.5em;
      width: 100%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
      .title{
        font-size: 16px;
    font-family: Roboto-Medium, Roboto;
    font-weight: 600;
    color: rgb(138, 128, 128);
      }
      .asset{
        margin:8px 0px;
        font-size: 26px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ant-btn{
        margin-top: 10px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    width: 25%;
    height: 40px;
    font-size: 16px;
      }
    }
}
}
  }


  @media screen and (max-width: 450px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
        .listheadert{
            width: 800px;
        }
    .fire-list-box {
        overflow: scroll;
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 1.5em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
        &:nth-child(1) {
          width:80px;
         margin-left:5px;
        }

        &:nth-child(2) {
          width: 110px;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 160px;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 100px;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 100px;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 100px;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }
    }
}
.assets-box{
      margin-top: 0.5em;
      width: 100%;
      background: rgb(36, 27, 27);
      border-radius: 20px;
      border: none;
      padding: 10px 0px;
      .title{
        font-size: 16px;
    font-family: Roboto-Medium, Roboto;
    font-weight: 600;
    color: rgb(138, 128, 128);
      }
      .asset{
        margin:8px 0px;
        font-size: 26px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ant-btn{
        margin-top: 10px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    width: 100%;
    height: 40px;
    font-size: 16px;
      }
    }


}
}
  }

`

