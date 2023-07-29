import styled from "styled-components";
export default styled.div`
.ant-form-item-control-input{
  border-radius:25px;
}
.ant-input{
  border-radius:25px;
  font-size:15px;

}

.ant-form-item-label>label{
  font-size:15px;
  
}
.ant-form-item-row{
  margin: 15px 0em ;
}
.max-btn{
  background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
  width: 100%;
  margin: 1em 0em;
    height: 40px;
    font-size:16px;
    font-weight:600;
}
.header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
      height: 45px;
    width: 57%;
    line-height:15px;
      .nav-item {
        width:42%;
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
      }16px;
    }
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
     
      font-size: 16px;
      margin-bottom:5px;
    }
    .value{
      width: 100%;
      font-size: 15px;
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
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
        }

        .col {
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            width: 30%;
            margin-left:100px;
          }

          &:nth-child(2) {
            width: 30%;
          }

          &:nth-child(3) {
            width: 30%;
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
            width: 130px;
            margin-right:40px;
           
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

  }
  .value{
color: white;
text-align:center;
width: 25%;
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

  }
  .value{
color: white;
text-align:center;
width: 25%;
  }
}
}
  }

  .tj{
  display: flex;
  width: 20%;
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
font-size:16px;
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

  }
  .value{
color: white;
text-align:center;
width: 25%;
  }
}
}
}


@media screen and (max-width: 1500px) {
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
  margin: 1em 0em;
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
  .fire-list-box {
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
        }

        .col {
          text-align: left;
          align-items: center;
          &:nth-child(1) {
            width: 30%;
            margin-left:100px;
          }

          &:nth-child(2) {
            width: 30%;
          }

          &:nth-child(3) {
            width: 30%;
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
            width: 130px;
            margin-right:40px;
           
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
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

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

  }
  .value{
color: white;
text-align:center;
width: 25%;
  }
}

}
.whitelist{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
  width: 47%;
  padding: 20px;font-size:15px;
  p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

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

  }
  .value{
color: white;
text-align:center;
width: 25%;
  }
}
}
  }

.tj{
  display: flex;
  width: 42%;
}
.kk{
  width: 45%;
  height: 30px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:15px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}
}
.pagination {
        text-align: center;
      }


  
`

