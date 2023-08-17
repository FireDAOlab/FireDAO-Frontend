import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
 
  .ant-pagination .ant-pagination-item-link {
    border-radius:5px;
}
.ant-pagination-disabled{
    border-radius:5px;

}
.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:5px;

}
.panel-container .search-container .search-box .ant-input-affix-wrapper{
    border:none;
}
  @media screen and (min-width: 1950px) {
    .panel-title.flex-box {
        display: flex;

    justify-content: space-between;
  } 

  .panel-title.flex-box1 {
        display: flex;
justify-content: space-between;
} 
  .content-box{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0;

    .left-part, .right-part {
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
    }
    .left-part {
      .title {
        font-size:20px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        margin:8px 0px;
        font-size: 31px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bottom-part {
        display: flex;
        margin-top: 18px;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        .info-box {
          padding-right: 5px;
          &:last-child {
            margin-right: 0;
          }

          .name {
            font-size: 16px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #8A8080;
          }

          .value {
            margin:10px 0px;
            font-size: 18px;
            font-family: Russo One-Regular, Russo One;
            font-weight: 600;
            color: #FFFFFF;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;
    .pid {
      width: 80px;
    
      margin-left: 6px;
      height: 28px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      font-size: 16px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #FE6D46;
      justify-content: center;
    }

  }
  .can-claim{
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 18px;
    white-space: nowrap;
    strong{
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 18px;
    white-space: nowrap;
    }
  }
      }
      .ant-form-item-label>label{
        font-size:18px;
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
        color: #8A8080;
        margin-bottom:10px;
      }
      .withdrawForm {
        margin-top: 5px;
 
.ant-form-item-control-input{
    border-radius:25px;
}
      .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border-radius:25px;
        input {
            border-radius:25px;
          font-size: 18px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
        }

        .max-btn {
            margin: 0px 5px;
          width: 65px;
          height: 30px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }
    }
      .withdraw-btn {
        margin-top: 10px;
        font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
        width: 100%;
        height: 40px;
        font-size: 16px;
      }
  
    }
  }


  .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                    border-radius:25px;
                    font-size:16px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
                

              }
              .search-btn{
                border-radius:25px;
                width: 45px;
                 height: 40px;
                 img{
                    width: 25px;
                     margin: 0px -10px;
                 }
              }
            }

.fire-list-box-airdrop{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item{
            padding: 1em 0.5em;
           
        }
        .list-item, .list-header {
          justify-content: flex-start;
          .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 18%;
            margin-left:0px;
            margin-right:10px;
          }
          &:nth-child(2) {
            width:19%;
            margin-right:15px;
          }
          &:nth-child(3) {
            width: 19%;
            margin-right:15px;
          }
          &:nth-child(4) {
            width: 18%;
            margin-right:15px;
          }
          &:nth-child(5) {
            width: 18%;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .address {
            padding: 2px 4px;
            text-align:center;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }
        }
    }


  .add-coin {
   background: rgba(254,109,70,0.1);
border-radius: 51px 51px 51px 51px;
color: rgba(254, 109, 70, 1);
border: 1px solid rgba(254,109,70,0.5);
    font-size: 16px;
    padding: 10px 10px;
    cursor: pointer;
    white-space: nowrap;
  }

 .panel-container{
   
    .nav-list-box {
          margin: 1em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 32%;
          height: 50px;
        .nav-item {
          cursor: pointer;
          width: 45%;
          border-radius: 25px;
          font-size: 18px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
        
    }
    .fire-list-box-userclaim{
        margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item, .list-header {
          justify-content: flex-start;

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(4) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(6) {
            width: 15%;
            margin-right:10px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

 .panel-container{
.fire-list-box-deposit{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
       

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(4) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(6) {
            width: 15%;
            margin-right:10px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

  .panel-container{
    
      .select-b{
        margin:1em 0em;
        display: flex;
        justify-content:space-between;
        .select-box1{
            width: 12%;
            height: 40px;
            line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:18px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
.ant-select-selector{
    border-radius: 34px 34px 34px 34px;
    border:none;
    .ant-select-selection-item{
        width: 100%;
        height:40px;
        line-height: 36px;
    }
}
        }
        .fkk{
            font-family: Roboto-Medium, Roboto;
font-weight: 500;
            font-size:18px;
            .ftitle{
                color:rgba(138, 128, 128, 1);
            }
            
        }
      }
     .batch-box{
        display:flex;
        justify-content:space-between;
      
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
.col{
      font-size: 20px;
}
     }
   
    .fire-list-box-airdroplist{

        margin:1em 0em;
        .list-header {
            padding: 20px 1.7em;
        }
        .list-item, .list-header {
          justify-content: flex-start;

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 22%;
            margin-left:0px;
            margin-right:20px;
          }
          &:nth-child(2) {
            width: 20%;
            margin-right:30px;
          }
          &:nth-child(3) {
            width: 23%;
            margin-right:20px;
          }
          &:nth-child(4) {
            width: 23%;
          }
         
        } 
    }
    .list-item:last-child {
            /* border-bottom:none; */
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
       
          .address {
            text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
  }


}
  @media screen and (max-width: 1950px) {
    .panel-title.flex-box {
        display: flex;

    justify-content: space-between;
  } 
  .panel-title.flex-box1 {
        display: flex;
justify-content: space-between;
} 
  .content-box{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0;

    .left-part, .right-part {
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
    }
    .left-part {
      .title {
        font-size:20px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        margin:8px 0px;
        font-size: 31px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bottom-part {
        display: flex;
        margin-top: 18px;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        .info-box {
          padding-right: 5px;
          &:last-child {
            margin-right: 0;
          }

          .name {
            font-size: 16px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #8A8080;
          }

          .value {
            margin:10px 0px;
            font-size: 18px;
            font-family: Russo One-Regular, Russo One;
            font-weight: 600;
            color: #FFFFFF;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;
    .pid {
      width: 80px;
    
      margin-left: 6px;
      height: 28px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      font-size: 16px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #FE6D46;
      justify-content: center;
    }

  }
  .can-claim{
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 18px;
    white-space: nowrap;
    strong{
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 18px;
    white-space: nowrap;
    }
  }
      }
      .ant-form-item-label>label{
        font-size:18px;
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
        color: #8A8080;
        margin-bottom:10px;
      }
      .withdrawForm {
        margin-top: 5px;
 
.ant-form-item-control-input{
    border-radius:25px;
}
      .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border-radius:25px;
        input {
            border-radius:25px;
          font-size: 18px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
        }

        .max-btn {
            margin: 0px 5px;
          width: 65px;
          height: 30px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }
    }
      .withdraw-btn {
        margin-top: 10px;
        font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
        width: 100%;
        height: 40px;
        font-size: 16px;
      }
  
    }
  }


  .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                    border-radius:25px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
              .search-btn{
                border-radius:25px;
                width: 45px;
                 height: 40px;
                 img{
                    width: 25px;
                     margin: 0px -10px;
                 }
              }
            }

.fire-list-box-airdrop{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item{
            padding: 1em 0.5em;
           
        }
        .list-item, .list-header {
          justify-content: flex-start;
          .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 18%;
            margin-left:0px;
            margin-right:10px;
          }
          &:nth-child(2) {
            width:19%;
            margin-right:15px;
          }
          &:nth-child(3) {
            width: 19%;
            margin-right:15px;
          }
          &:nth-child(4) {
            width: 18%;
            margin-right:15px;
          }
          &:nth-child(5) {
            width: 18%;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .address {
            padding: 2px 4px;
            text-align:center;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }
        }
    }


  .add-coin {
   background: rgba(254,109,70,0.1);
border-radius: 51px 51px 51px 51px;
color: rgba(254, 109, 70, 1);
border: 1px solid rgba(254,109,70,0.5);
    font-size: 16px;
    padding: 10px 10px;
    cursor: pointer;
    white-space: nowrap;
  }

 .panel-container{
   
    .nav-list-box {
          margin: 1em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 32%;
          height: 50px;
        .nav-item {
          cursor: pointer;
          width: 45%;
          border-radius: 25px;
          font-size: 18px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
        
    }
    .fire-list-box-userclaim{
        margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
       

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(4) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(6) {
            width: 15%;
            margin-right:10px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

 .panel-container{
.fire-list-box-deposit{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
       

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(4) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:10px;
          }
          &:nth-child(6) {
            width: 15%;
            margin-right:10px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

  .panel-container{
    .flex-box{ 

    }
      .select-b{
        margin:1em 0em;
        display: flex;
        justify-content:space-between;
        .select-box1{

            width: 12%;
            height: 40px;
            line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:18px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
.ant-select-selector{
    border-radius: 34px 34px 34px 34px;
    border:none;
    .ant-select-selection-item{
        width: 100%;
        height:40px;
        line-height: 36px;
    }
}
        }
        .fkk{
            font-family: Roboto-Medium, Roboto;
font-weight: 500;
            font-size:18px;
            .ftitle{
                color:rgba(138, 128, 128, 1);
            }
            
        }
      }
     .batch-box{
        display:flex;
        justify-content:space-between;
      
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
.col{
      font-size: 20px;
}
     }
   
    .fire-list-box-airdroplist{

        margin:1em 0em;
        .list-header {
            padding: 20px 1.7em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:16px;

          &:nth-child(1) {
            width: 22%;
            margin-left:0px;
            margin-right:20px;
          }
          &:nth-child(2) {
            width: 20%;
            margin-right:30px;
          }
          &:nth-child(3) {
            width: 23%;
            margin-right:20px;
          }
          &:nth-child(4) {
            width: 23%;
          }
        } 
    }
    .list-item:last-child {
            /* border-bottom:none; */
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
       
          .address {
            text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
  }

}

   .pagination {
        text-align: center;
      }

  @media screen and (max-width: 1500px) {

    .panel-title.flex-box {
        display: flex;
    justify-content: space-between;
  } 
  .panel-title.flex-box1 {
        display: flex;
justify-content: space-between;
} 
  .content-box{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0;

    .left-part, .right-part {
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 35px 30px;
    }
    .left-part {
      .title {
        font-size:16px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        margin:8px 0px;
        font-size: 26px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bottom-part {
        display: flex;
        margin-top: 18px;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        .info-box {
          padding-right: 5px;
          &:last-child {
            margin-right: 0;
          }

          .name {
            font-size: 14px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #8A8080;
          }

          .value {
            margin:10px 0px;
            font-size: 16px;
            font-family: Russo One-Regular, Russo One;
            font-weight: 600;
            color: #FFFFFF;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    .pid {
      width: 60px;
      margin-left: 6px;
      height: 28px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      font-size: 14px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      align-items:center;
      color: #FE6D46;
      justify-content: center;
    }

  }
  .can-claim{
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;
    strong{
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;
    }
  }
      }
      .ant-form-item-label>label{
        font-size:16px;
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
        color: #8A8080;
        margin-bottom:10px;
      }
      .withdrawForm {
        margin-top: 5px;
 
.ant-form-item-control-input{
    border-radius:25px;
}
      .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border-radius:25px;
        input {
            border-radius:25px;
          font-size: 16px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
        }

        .max-btn {
            margin: 0px 5px;
          width: 65px;
          height: 30px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }
    }
      .withdraw-btn {
        margin-top: 10px;
        font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
        width: 100%;
        height: 40px;
        font-size: 16px;
      }
  
    }
  }


  .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                    border-radius:25px;
                font-size:14px;

                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
              .search-btn{
                border-radius:25px;
                width: 45px;
                 height: 40px;
                 img{
                    width: 25px;
                     margin: 0px -10px;
                 }
              }
            }

.fire-list-box-airdrop{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.8em;
        }
        .list-item{
            padding: 1em 0.5em;
           
        }
        .list-item, .list-header {
          justify-content: flex-start;
          .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 18%;
            margin-left:0px;
            margin-right:10px;
          }
          &:nth-child(2) {
            width:19%;
            margin-right:15px;
          }
          &:nth-child(3) {
            width: 19%;
            margin-right:15px;
          }
          &:nth-child(4) {
            width: 18%;
            margin-right:15px;
          }
          &:nth-child(5) {
            width: 18%;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .address {
            padding: 2px 4px;
            text-align:center;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }
        }
    }


  .add-coin {
   background: rgba(254,109,70,0.1);
border-radius: 51px 51px 51px 51px;
color: rgba(254, 109, 70, 1);
border: 1px solid rgba(254,109,70,0.5);
    font-size: 14px;
    padding: 6px;
    cursor: pointer;
    white-space: nowrap;
  }

 .panel-container{
   
    .nav-list-box {
          margin: 1em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 36%;
          height: 50px;
        .nav-item {
          cursor: pointer;
          width: 45%;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
        
    }
    .fire-list-box-userclaim{
        margin:1em 0em;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 12%;
            margin-right:6px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(4) {
            width: 17%;
            margin-right:6px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(6) {
            width: 18%;
            margin-right:6px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

 .panel-container{
.fire-list-box-deposit{
    margin:1em 0em;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 12%;
            margin-right:6px;
          }
          &:nth-child(2) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(3) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(4) {
            width: 17%;
            margin-right:6px;
          }
          &:nth-child(5) {
            width: 15%;
            margin-right:6px;
          }
          &:nth-child(6) {
            width: 18%;
            margin-right:6px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

  .panel-container{
    .flex-box{ 

    }
      .select-b{
        margin:1em 0em;
        display: flex;
        justify-content:space-between;
        .select-box1{

            width: 12%;
            height: 40px;
            line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:16px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
.ant-select-selector{
    border-radius: 34px 34px 34px 34px;
    border:none;
    .ant-select-selection-item{
        width: 100%;
        height:40px;
        line-height: 36px;
    }
}
        }
        .fkk{
            font-family: Roboto-Medium, Roboto;
font-weight: 500;
            font-size:16px;
            .ftitle{
                color:rgba(138, 128, 128, 1);
            }
            
        }
      }
     .batch-box{
        display:flex;
        justify-content:space-between;
      
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
.col{
      font-size: 18px;
}
     }
   
    .fire-list-box-airdroplist{

        margin:1em 0em;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 22%;
            margin-left:0px;
            margin-right:20px;
          }
          &:nth-child(2) {
            width: 20%;
            margin-right:30px;
          }
          &:nth-child(3) {
            width: 23%;
            margin-right:20px;
          }
          &:nth-child(4) {
            width: 23%;
          }
        } 
    }
    .list-item:last-child {
            /* border-bottom:none; */
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
       
          .address {
            text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
  }


}

  
  @media screen and (max-width: 450px) {
    .panel-title.flex-box {
    justify-content: space-between;
  } 
  .panel-title.flex-box1 {
        display: block;
} 
  .content-box{
    display: block;
    margin-top: 30px;
    padding: 0;

    .left-part, .right-part {
      width: 100%;
      background: #1A1414;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 25px 30px;
    }
    .left-part {
      .title {
        font-size:16px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        margin:8px 0px;
        font-size: 21px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bottom-part {
        display: flex;
        margin-top: 16px;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        .info-box {
          padding-right: 5px;
          &:last-child {
            margin-right: 0;
          }

          .name {
            font-size: 14px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #8A8080;
          }

          .value {
            margin:10px 0px;
            font-size: 16px;
            font-family: Russo One-Regular, Russo One;
            font-weight: 600;
            color: #FFFFFF;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    .pid {
      width: 60px;
      margin-left: 6px;
      height: 28px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      font-size: 14px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      align-items:center;
      color: #FE6D46;
      justify-content: center;
    }

  }
  .can-claim{
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    strong{
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    }
  }
      }
      .ant-form-item-label>label{
        font-size:14px;
        font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
        color: #8A8080;
        margin-bottom:10px;
      }
      .withdrawForm {
        margin-top: 5px;
 
.ant-form-item-control-input{
    border-radius:25px;
}
      .input-box {
        position: relative;
        display: flex;
        align-items: center;
        border-radius:25px;
        input {
            border-radius:25px;
          font-size: 14px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
        }

        .max-btn {
            margin: 0px 5px;
          width: 65px;
          height: 30px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }
    }
      .withdraw-btn {
        margin-top: 10px;
        font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
        width: 100%;
        height: 40px;
        font-size: 16px;
      }
  
    }
  }

  .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                    border-radius:25px;
                font-size:14px;

                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
              .search-btn{
                border-radius:25px;
                width: 45px;
                 height: 40px;
                 img{
                    width: 25px;
                     margin: 0px -10px;
                 }
              }
            }
.listheadert{
    width: 550px;
}
.fire-list-box-airdrop{
    margin:1em 0em;
    overflow: scroll;
   
        .list-header {
            padding: 20px 1.3em;
        }
        .list-item{
            padding: 1em 0.5em;    
        }
        .list-item, .list-header {
          justify-content: flex-start;
          .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 90px;
            margin-left:0px;
            margin-right:5px;
          }
          &:nth-child(2) {
            width:110px;
            margin-right:5px;
          }
          &:nth-child(3) {
            width: 120px;
            margin-right:5px;
          }
          &:nth-child(4) {
            width: 100px;
            margin-right:5px;
          }
          &:nth-child(5) {
            width: 80px;
            margin-right:5px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .address {
            padding: 2px 4px;
            text-align:center;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }
        }
    }


  .add-coin {
   background: rgba(254,109,70,0.1);
border-radius: 51px 51px 51px 51px;
color: rgba(254, 109, 70, 1);
border: 1px solid rgba(254,109,70,0.5);
    font-size: 14px;
    padding: 6px;
    cursor: pointer;
    white-space: nowrap;
  }

 .panel-container{
   
    .nav-list-box {
          margin: 1em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 72%;
          height: 50px;
        .nav-item {
          cursor: pointer;
          width: 45%;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
        
    }
    .listheadert1{
    width: 715px;
}
    .fire-list-box-userclaim{
        margin:1em 0em;
        overflow: scroll;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 90px;
            margin-right:6px;
          }
          &:nth-child(2) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(3) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(4) {
            width: 120px;
            margin-right:6px;
          }
          &:nth-child(5) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(6) {
            width: 150px;
            margin-right:6px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

 .panel-container{
    .listheadert2{
    width: 715px;
}
.fire-list-box-deposit{
    margin:1em 0em;
    overflow: scroll;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 90px;
            margin-right:6px;
          }
          &:nth-child(2) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(3) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(4) {
            width: 120px;
            margin-right:6px;
          }
          &:nth-child(5) {
            width: 100px;
            margin-right:6px;
          }
          &:nth-child(6) {
            width: 150px;
            margin-right:6px;
          }
        } 
    }
    .list-item:last-child {
            border-bottom:none;
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
          .pid{
            color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 4px;
opacity: 1;
text-align:center;
border: 1px solid rgba(254,109,70,0.5);
          }
          .address {text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
 }

  .panel-container{
   
      .select-b{
        margin:1em 0em;
        display: flex;
        justify-content:space-between;
        .select-box1{

            width: 34%;
            height: 40px;
            line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:16px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
.ant-select-selector{
    border-radius: 34px 34px 34px 34px;
    border:none;
    .ant-select-selection-item{
        width: 100%;
        height:40px;
        line-height: 36px;
    }
}
        }
        .fkk{
            font-family: Roboto-Medium, Roboto;
font-weight: 500;
            font-size:16px;
            .ftitle{
                color:rgba(138, 128, 128, 1);
            }
            
        }
      }
     .batch-box{
        display:flex;
        justify-content:space-between;
      
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
.col{
      font-size: 18px;
}
     }
     .listheadert3{
    width: 520px;
}
    .fire-list-box-airdroplist{
overflow: scroll;
        margin:1em 0em;
        .list-header {
            padding: 20px 1.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

        .col {
          text-align: left;
          font-size:14px;

          &:nth-child(1) {
            width: 90px;
            margin-left:0px;
            margin-right:6px;
          }
          &:nth-child(2) {
            width: 120px;
            margin-right:6px;
          }
          &:nth-child(3) {
            width: 110px;
            margin-right:6px;
          }
          &:nth-child(4) {
            width: 155px;
            margin-right:6px;
          }
         
        } 
    }
    .list-item:last-child {
            /* border-bottom:none; */
        }
    .list-item {
        padding: 1em 0.5em;
        
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
           color: rgba(228, 134, 134, 1);
          }
       
          .address {
            text-align:center;
            padding: 2px 5px;
            a{
                color:rgba(205, 158, 87, 1);
            }
          
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
  }
        }
    }
  }


}
`;

