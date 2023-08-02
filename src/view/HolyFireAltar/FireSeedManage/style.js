import styled from "styled-components";
export default styled.div`
.ant-form-item-control-input{
  border-radius:25px;
  line-height:40px;
  
}
.ant-form-item-control-input-content{
  display: flex;
  text-align:center;
  
}
.ant-input{
  width: 100%;
  border-radius:25px;
  border:none;
padding: 0px 10px;
}
.ant-input:focus{
  outline:none;
  border:none;
}


  @media screen and (max-width: 1950px) {
    .max-btn{
          font-size:20px;
        }
    .fire-list-box{
  margin: 2em auto;
  .list-header{
    font-size:16px;
  }

}

.ant-form-item-label>label{
  font-size:16px;
  color: white;
}

.ant-form .ant-form-item{
  margin-bottom:0px;
}
.ant-form-item-row{
  margin: 15px 0em ;
}
.max-btn{
  background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
  width: 100%;
  margin: 0.5em 0em;
    height: 40px;
    font-size:20px;
    font-weight:600;
}
.header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
      height: 45px;
    width: 60%;
    line-height:15px;
      .nav-item {
        width:42%;
        font-size:18px;
      }
    }
  }
    .panel-box{
    width: 100%;
    .panel-container{
      width: 100%;
    }
 
  }
  .page-title{
    font-size: 30px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    padding: 0px 11.7%;
  }

  .part1 {
    .panel-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .discount-list{
    .list-item{
      padding: 10px 0;
      display: flex;
      align-items: center;
      .end{
        margin: 0 10px;
      }
      .discount{
        margin: 0 10px;
      }
    }
  }
  .sc{
    width: 25px;
  }
  .current-box{
    width:42%;

margin: 4em auto;
background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
padding: 20px;
  }
  .current{
    /* display: flex; */
    justify-content: center;
          font-size: 16px;
          padding-top:8px;
          font-family: Roboto-Bold, Roboto;
    .name{
  color: white;
     
      font-size: 20px;
      margin-bottom:5px;
    }
    .value{
      width: 100%;
      font-size: 16px;
      height: 35px;
      border-radius: 25px;
      padding-left:5px;
      margin:5px 0px;
                    border: 1px solid rgba(205,158,87,0.5); 
                    background: rgba(205,158,87,0.1);
                    line-height:35px;
                    width:100%;
                    color: #CD9E57;    
                  }
  }

  .fire-list-box {
      
        .list-item{
          font-size:16px;
          .ant-form-item-row{
  margin: 0em ;


}
        }
        .flex-box2,  .list-item{
          justify-content: flex-start;
          font-size:16px;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        .col1 {
          font-size:16px;
          text-align: left;
          justify-content: flex-start;
          &:nth-child(1) {
            width: 10%;
            margin-left:50px;
          }

          &:nth-child(2) {
            width: 15%;
            margin-left:50px;
          }

          &:nth-child(3) {
            width:28%;
            margin-left:50px;
          }
          &:nth-child(4) {
            width: 22%;
            margin-left:50px;
            text-align:left;
          }
        }
      }
        .list-item {
            padding: 0.5em 1em;
          .col1 {
            overflow: hidden;
            padding-left: 0.5%;
            text-align:center;
            //text-overflow: ellipsis;

          }
  }
}
  .no{
            color: #FE6D46;

          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }

          .address {
                color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
           
          }

          .fire-list-box{
        margin: 2em 0em;
        text-align:left;

        .flex-box3,.dis {
            font-size: 16px;
            justify-content: flex-start;
            font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
            
    .col{
        text-align:left;
font-size:16px;
      &:nth-child(1){
        margin-left:70px;
        width:30%;
      }
      &:nth-child(2){
        width: 30%;
      }
      &:nth-child(3){
        width: 30%;
      }
     
     
    }
}  
        .flex-box3 {
          font-size:16px;
          padding: 20px 1em;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        }
        .dis{
          padding: 0.5em 0em;
            .start{
              width: 35%;
              text-align:center;
              float: left;
              .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}

            }
            .space{
              float:left;
              padding:5px ;
            }
            .end{
              text-align:center;
              float: left;
              width: 35%;
              .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
} 
}
.dis1{
  float: left;
  text-align:center;
  .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}
}     
        }

}
.ant-form-item-control-input-content{
          height: 40px;
        }
          .fire-list-box{
        margin: 2em 0em;
        text-align:left;
        

        .flex-box1,.lever {
            font-size: 16px;
            justify-content: flex-start;
            font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
            
    .col{
        text-align:left;
        font-size:16px;
      &:nth-child(1){
        margin-left:70px;
        width:30%;
      }
      &:nth-child(2){
        width: 30%;
      }
      &:nth-child(3){
        width: 30%;
      }
      
     
    }
}  

       .flex-box1 {
          font-size:16px;
          padding: 20px 1em;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        }
        .lever{
          padding: 0.5em 0em;
          
            .value{
              
              .dtoo1{
  width: 85%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(228, 134, 134, 1);
                  }
            }
        }


}
  .amountbox{
    width:100%;

margin: 2em auto;

display: flex;
justify-content:space-between;

.general{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:16px;
line-height:25px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
font-size:20px;
}
.user{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:20px;
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;

  }
  .value{
color: white;
text-align:center;
width: 52%;
  }
}

}
.whitelist{
  
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
  width: 47%;
  padding: 20px;
  p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
font-size:20px;
}
.user{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;
font-size:20px;

  }
  .value{
color: white;
text-align:center;
width: 52%;
  }
}
}
  }

  .tj{
  display: flex;
  width: 27%;
}
.kk{
  width: 45%;
  height: 30px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:16px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}

.discount{
  width:100%;

margin: 2em auto;

display: flex;
justify-content:space-between;

.mintfee{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:20px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.fee1{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:20px;
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;

  }
  .value{
    font-size:16px;
color: white;
text-align:center;
width: 52%;
.too1{
  width: 58%;
  text-align:center;        
}
.too1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
}
}
.mintdis{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:20px;
line-height:25px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.fee1{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;
font-size:20px;
  }
  .value{
color: white;
text-align:center;
width: 52%;
font-size:16px;
.dtoo1{
  width: 78%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
}
}
}
.discount1{
  width: 42%;
    margin: 4em auto;
    background: rgba(26,20,20,1);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    padding: 20px;
    .nnn{
      font-size:20px;
      font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 18px;
    }

    
            .disac{
              display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;
font-size:20px;

  }
  .value{
color: white;
text-align:center;
font-size:20px;
width: 52%;
.dtoo1{
  width: 78%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
            }
          }

  }





@media screen and (max-width: 1500px) {
  .max-btn{
          font-size:15px;
        }
.ant-input{
  border-radius:25px;
  font-size:14px;

}
.ant-form input{
  font-size:14px;

}
.ant-form-item-label>label{
  font-size:14px;
  
}
.ant-form-item-row{
  margin: 5px 0em ;
}
.max-btn{
  background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
  width: 100%;
  margin: 0.5em 0em;
    height: 40px;
    font-size:15px;
    font-weight:600;
}
.header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
      height: 45px;
    width: 86%;
    
    line-height:15px;
      .nav-item {
        width:42%;
        font-size:14px;
      }
    }
  }
  .panel-box{
    width: 100%;
    .panel-container{
      width: 100%;
    }
 
  }
  .page-title{
    font-size: 21px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    padding: 0px 11.7%;
  }

  .part1 {
    .panel-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .discount-list{
    .list-item{
      padding: 10px 0;
      display: flex;
      align-items: center;
      .end{
        margin: 0 10px;
      }
      .discount{
        margin: 0 10px;
      }
    }
  }
  .current-box{
    width:60%;

margin: 4em auto;
background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
padding: 20px;
  }
  .current{
    /* display: flex; */
    font-size: 14px;
    justify-content: center;
          padding-top:8px;
          font-family: Roboto-Bold, Roboto;
    .name{
      font-size: 14px;
      margin-bottom:5px;
    }
    .value{
      width: 100%;
      font-size: 14px;
      height: 35px;
      border-radius: 25px;
      padding-left:5px;
      margin:5px 0px;
                    border: 1px solid rgba(205,158,87,0.5); 
                    background: rgba(205,158,87,0.1);
                    line-height:35px;
                    width:100%;
                    color: #CD9E57;    
                  }
  }
  .ant-form-item-control-input-content{
          height: 40px;
        }
  .fire-list-box {
        .list-header{
            padding: 20px 1em;
        }
        .flex-box2, .list-header {
          justify-content: flex-start;
          font-size:14px;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        }
        .list-item{
          .ant-form-item-row{
  margin: 0em ;
  font-size:14px;

}
        }

        .col {
          text-align: left;
          align-items: center;
          font-size:14px;
          &:nth-child(1) {
            width: 18%;
            margin-left:50px;
          }

          &:nth-child(2) {
            width: 20%;
            text-align: center;
          }

          &:nth-child(3) {
            width: 22%;
            text-align: center;
            margin-left:30px;
            margin-right: 0px;
          }
          &:nth-child(4) {
            width: 22%;
            margin-left:50px;
          }
        }
        .flex-box2 {
            padding: 0.5em 1em;
            font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
font-size:14px;
          .col1 {
            overflow: hidden;
            padding-left: 0.5%;
            //text-overflow: ellipsis;

          }
        }
}
  .no{
            color: #FE6D46;
            text-align:center
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;

          }

          .address {
            
                color: rgba(205, 158, 87, 1);
           
               width: 120px;
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
            /* width: 130px; */
            margin-right:40px;
           
          }
          .sc{

          }

          .fire-list-box{
        margin: 2em 0em;
        text-align:left;

        .flex-box3,.dis {
            font-size: 14px;
            justify-content: flex-start;
            font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
            
    .col{
      font-size:14px;
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:30%;
      }
      &:nth-child(2){
        width: 30%;
      }
      &:nth-child(3){
        width: 30%;
      }
     
     
    }
}  
        .flex-box3 {
          font-size:14px;
          padding: 20px 1em;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        }
        .dis{
          padding: 0.5em 0em;
            .start{
              width: 35%;
              text-align:center;
              float: left;
              .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}

            }
            .space{
              float:left;
              padding:5px ;
            }
            .end{
              text-align:center;
              float: left;
              width: 35%;
              .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
} 
}
.dis1{
  float: left;
  text-align:center;
  .dtoo1{
  width: 100%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}
}     
        }

}


          .fire-list-box{
        margin: 2em 0em;
        text-align:left;

        .flex-box1,.list-item {
            font-size: 14px;
            font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;
        font-size:14px;
      &:nth-child(1){
        margin-left:70px;
        width:25%;
      }
      &:nth-child(2){
        width: 25%;
      }
      &:nth-child(3){
        width: 25%;
      }
     
     
    }
    
}  

.flex-box1 {
          font-size:14px;
          padding: 20px 1em;
          font-family: Roboto-Medium, Roboto;
font-weight: bold;
color: #8A8080;
        }
        .list-item, .flex-box1 {
          justify-content: flex-start;
        }
        .lever{
          padding: 0.5em 0em;
            .value{
              
              .dtoo1{
  width: 85%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(228, 134, 134, 1);
                  }
            }
        }

}

  .amountbox{
    width:100%;

margin: 2em auto;

display: flex;
justify-content:space-between;

.general{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:15px;
line-height:25px;
font-size:14px;
p{
  font-size:14px;
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.user{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:14px;
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;

  }
  .value{
    font-size:14px;
    font-weight:600;
color: white;
text-align:center;
width: 62%;

  }
}

}
.whitelist{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
  width: 47%;
  padding: 20px;
  font-size:14px;
  p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
font-size:14px;
}
.user{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:14px;
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;

  }
  .value{
color: white;
font-weight:600;
text-align:center;
width: 62%;
font-size:14px;
  }
}
}
  }

.tj{
  display: flex;
  width: 29%;
}
.kk{
  width: 45%;
  height: 30px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:14px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}


.discount{
  width:100%;

margin: 2em auto;

display: flex;
justify-content:space-between;

.mintfee{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:14px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.fee1{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:14px;
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;

  }

  .value{
color: white;
font-weight:600;
text-align:center;
width: 62%;
font-size:14px;
.too1{
  width: 46%;
  text-align:center;        
}
.too1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
}
}
.mintdis{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:14px;
line-height:25px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.fee1{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
font-size:14px;

width: 75%;

  }
  .value{
color: white;
font-weight: 600;
text-align:center;
width: 62%;
font-size:14px;
.dtoo1{
  width: 78%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
}
}
}
.discount1{
  width: 60%;
    margin: 4em auto;
    background: rgba(26,20,20,1);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.1);
    padding: 20px;
    .nnn{
      font-size:14px;
      font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FFFFFF;
line-height: 18px;
    }
            .disac{
              .name{
                width: 34.5%;
              font-size:14px;
            }
            .value{
              width: 34.5%;
              text-align:left;
              font-size:14px;
              .dtoo1{
  width: 78%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
            }
            }
          }
}

@media screen and (max-width: 400px) {
  .ant-form-item-label>label{
  font-size:12px;
}
.ant-input{
  font-size:12px;
}
  .page-title{
    font-size:16px;
    padding: 0;
  }
  .header-nav{
    padding: 0;
    width: 100%;
    .fire-nav-list{
      width: 100%;
    height: 35px;
    .nav-item{
      font-size:12px;
    }
    }
  }
  .panel-box{
    .panel-container{
      padding: 16px 5.9%;
      .panel-title{
        font-size:16px;
      }
      .current-box{
        width: 100%;
        margin: 10px 0;
        .current{
          .name{
            font-size:12px;
          }
          .value{
            font-size:12px;
          }
        }
        
      
      }
  .max-btn{
          font-size:15px;
        }
      .amountbox{
        display: block;
        margin: 10px 0;
        .general{
          width: 100%;
          font-size:12px;
          .user{
            display: block;
            .name{
              width: 100%;
              font-size:12px;
            }
            .value{
              width:100%;
              font-weight: 600;

              font-size:12px;
            }
          }
        }
      }
      .whitelist{
        margin: 10px 0;
          width: 100%;
          font-size:12px;
          .user{
            display: block;
            .name{
              width: 100%;
              font-size:12px;
            }
            .value{
              width:100%;
              font-weight: 600;

              font-size:12px;
            }
          }
          
      }
      .panel-title{
            .tj{
            display: flex;
            width: 58%;
            .kk{
              font-size:10px;
            }
            }
          }

          .fire-list-box {
            margin: 0.5em 0;
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
        }
        .list-item{
          .ant-form-item-row{
  margin: 0em ;
}
        }
        .col {
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            width: 15%;
            margin-left:0px;
          }

          &:nth-child(2) {
            width: 18%;
            text-align: center;
          }

          &:nth-child(3) {
            width:35%;
            text-align: center;
           
            margin-left:20px;
          }
          &:nth-child(4) {
            width: 22%;
            margin-left:20px;
          }
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
  .no{
            color: #FE6D46;
            
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }

          .address {
                color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
            width: 50px;
            margin-right:0px;
           
          }
          .fire-list-box{
        margin: 2em 0em;
        text-align:left;

        .flex-box1,.list-item {
            font-size: 18px;
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:30%;
      }
      &:nth-child(2){
        width: 30%;
      }
      &:nth-child(3){
        width: 30%;
      }
     
     
    }
}  
        .list-item, .flex-box1 {
          justify-content: flex-start;
        }
        .list-item{
            .value{
              
              .dtoo1{
  width: 85%;
  text-align:center;        
  color:rgba(228, 134, 134, 1);
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(228, 134, 134, 1);
                  }
            }
        }

}

          .discount{
            margin: 10px auto;
            display: block;
            .mintfee{
              width: 100%;
          font-size:12px;
          .fee1{
            display: block;
            .name{
              width: 100%;
              font-size:12px;
            }
            .value{
              width:100%;
              font-weight: 600;

              text-align:left;
              font-size:12px;
              .too1{
  width: 67%;
  text-align:center;        
}
.too1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
            }
          }
            }
            .mintdis{
              margin: 10px 0;
              width: 100%;
          font-size:12px;
          .fee1{
            display: block;
            .name{
              width: 100%;
              font-size:12px;
            }
            .value{
              width:100%;
              font-weight: 600;

              text-align:left;
              font-size:12px;
              .dtoo1{
  width: 80%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
            }
          }
            }
          }
          .discount1{
            margin: 10px auto;
            display: block;
            width: 100%;
            .disac{
              .name{
              width: 100%;
              font-size:12px;
            }
            .value{
              width:100%;
              text-align:left;
              font-size:12px;
              .dtoo1{
  width: 80%;
  text-align:center;        
}
.dtoo1dw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
                  width: 85%;
                  text-align:center;
                  .toodw{
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
            }
            }
          }

        .content-item{
          .fire-list-box{

          }
        }  

    }
  }
}

.pagination {
        text-align: center;
      }


  
`

