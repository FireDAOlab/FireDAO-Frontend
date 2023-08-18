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
    .ant-form {input{
text-align:center;
    }}
    .phone-list{
      display: none;
    }
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
            width: 35%;
            margin-left:60px;
          }

          &:nth-child(2) {
            width: 50%;
            margin-left:0px;
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
  .flex-box{
  width: 100%;
  border-bottom:  1px solid rgba(255,255,255,0.1);
  .col{
      text-align: left;
      flex-shrink: 0;
      width: 30%;
      margin-top:10px;
    }
    .no1{
     .ant-form-item-row{
      .ant-form-item-control{
        .ant-form-item-control-input{
          background-color: #241b1b;
        }
      }
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

  @media screen and (max-width: 1950px) {
    .ant-form {input{
text-align:center;
    }}
    .phone-list{
      display: none;
    }
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
          width: 60px;
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
            width: 35%;
            margin-left:60px;
          }

          &:nth-child(2) {
            width: 50%;
            margin-left:0px;
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
  .flex-box{
  width: 100%;
  border-bottom:  1px solid rgba(255,255,255,0.1);

  .col{
      text-align: left;
      flex-shrink: 0;
      width: 30%;
      margin-top:10px;
    }
    .no1{
     .ant-form-item-row{
      .ant-form-item-control{
        .ant-form-item-control-input{
          background-color: #241b1b;
        }
      }
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
  }
  @media screen and (max-width: 1500px) {
    .address-list{
      display: block;
    }
    .phone-list{
      display: none;
    }

    .ant-form {input{
text-align:center;
}}
.phone-list{
  display: none;
}
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
      width: 60px;
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
            width: 35%;
            margin-left:60px;
          }

          &:nth-child(2) {
            width: 50%;
            margin-left:0px;
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
.flex-box{
width: 100%;
border-bottom:  1px solid rgba(255,255,255,0.1);
 padding: 5px 0px;
.col{
   
  text-align: left;
  flex-shrink: 0;
  width: 30%;
  margin-top:10px;
}
.no1{
 .ant-form-item-row{
  .ant-form-item-control{
    .ant-form-item-control-input{
      background-color: #241b1b;
    }
  }
 }
}

}

.dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(20vh);
    left: calc(50vw - 250px);
    width: 550px;
    background: #241B1B;
    border-radius: 13px;
    overflow-y: auto;
height:400px;
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
      font-size: 17px;
      margin: 1.5em 44px 0.5em;
      width: 400px;
      height: 45px;
    }
  }
    

  }
  @media screen and (max-width: 450px) {
    .address-list{
      display: none;
    }
    .phone-list{
      display: block;
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
      width: 100%;
      margin: 0.5em auto;
      height: 40px;
    }
  }
 
  .discount{
            margin: 10px auto;
            display: block;
            .icon {
        margin-top:10px;
        width: 25px;
        line-height: 30px;
        font-size: 26px;
        margin-left: 45%;
      }
            .mintfee{
              width: 100%;
          font-size:14px;
          
          .fee1{
            display: block;
            .name{
              width: 100%;
              font-size:14px;
            }
            .value{
              width:100%;
              font-weight: 600;

              text-align:left;
              font-size:14px;
              .too1{
                font-size:14px;
  width: 100%;
  text-align:center;        
}


            }
          }
            }
        
          }

  }
  @media screen and (max-width: 400px) {
    .address-list{
      display: none;
    }
    .phone-list{
      display: block;
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
      width: 100%;
      margin: 0.5em auto;
      height: 40px;
    }
  }
 
  .discount{
            margin: 10px auto;
            display: block;
            .icon {
        margin-top:10px;
        width: 25px;
        line-height: 30px;
        font-size: 26px;
        margin-left: 45%;
      }
            .mintfee{
              width: 100%;
          font-size:14px;
          .fee1{
            display: block;
            .name{
              width: 100%;
              font-size:14px;
            }
            .value{
              width:100%;
              font-weight: 600;

              text-align:left;
              font-size:14px;
              .too1{
                font-size:14px;
  width: 100%;
  text-align:center;        
}


            }
          }
            }
        
          }
  }
`

