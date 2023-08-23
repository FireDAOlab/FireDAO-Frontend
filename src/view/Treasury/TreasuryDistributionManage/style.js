import styled from "styled-components";
export default   styled.div`
.ant-pagination .ant-pagination-item-link {
    border-radius:5px;
}
.ant-pagination-disabled{
    border-radius:5px;

}
.panel-container .search-container .search-box .ant-input-affix-wrapper{
    border:none;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:5px!important;

}
.ant-form-item-control-input{
  border-radius:25px;
  line-height:40px;

  
}

.ant-form-item-control-input-content{
  display: flex;
  text-align:center;
  justify-content: center;
  
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

    .ant-form{ input{
    font-size:16px;
  }}
.ant-form-item-label>label{
  font-size:16px;
  color: white;
}

.ant-form .ant-form-item{
  margin-bottom:0px;
}
.ant-form-item-row{
  margin: 5px 0em ;
}
.max-btn{
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
  width: 100%;
  margin: 0.5em 0em;
    height: 40px;
    font-size:18px;
    font-weight:600;
        }

    .page-title {
      font-size: 30px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      padding: 0px 11.7%;
    color: white;
    }

  .header-nav {
      padding: 10px 11.7%;
      display: flex;

      .fire-nav-list {
        height: 50px;
        width: 70%;

        .nav-item {
          width: 31%;
          padding: 0 10px;
          font-size: 18px;
        }
      }
    }


    .part1{
        .panel-title{
            
      display: flex;
      justify-content: space-between;
      align-items: center;
        }
    }

    .discount{
  width:100%;
margin: 2em auto;
display: flex;
flex-flow: wrap;
justify-content: space-between;

.content-item{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:18px;
 margin: 5px 0px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.min{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-size:18px;
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
  width: 52%;
  text-align:center;    
  font-size:16px;
    
}
.too1dw{
    font-size:16px;

                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
    font-size:16px;

                  width: 85%;
                  text-align:center;
                  .toodw{
                    font-size:16px;

                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
  }
}
}
.content-item1{
  background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
width: 47%;
padding: 20px;
font-size:18px;
line-height:25px;
p{
  font-family: Roboto-SemiBold, Roboto;
font-weight: 600;

}
.min{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  .name{
    font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
width: 75%;
font-size:18px;
  }
  .value{
color: white;
text-align:center;
width: 52%;
font-size:16px;
.too1{
    font-size:16px;
  width: 78%;
  text-align:center;        
}
.too1dw{
    font-size:16px;
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
.too{
    font-size:16px;
                  width: 85%;
                  text-align:center;
                  .toodw{
                    font-size:16px;
                    float:right;
                    font-weight:600;
                    color:rgba(138, 128, 128, 1);
                  }
                }
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
  height: 40px;
  line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:16px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}
.sc{
    width: 25px;
  }
.fire-list-box{
  .list-header{
    font-size:16px;
  }

}
.bdval{
    &:last-child .list-item{
    /* border-bottom:none!important; */
    }
}
  .cate{
    margin:0em;
    .flex-box1{
      padding: 20px 2.5em;
    }
    .catelist{
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
    .flex-box1,  .catelist{
      justify-content: flex-start;
     
    .col1 {
      font-size:16px;
      text-align:left;
      &:nth-child(1) {
        width: 18%;
        margin-left:10px;
      }

      &:nth-child(2) {
        width: 22%;
        margin-left:10px;
      }

      &:nth-child(3) {
        width:24%;
        margin-left:10px;
      }
      &:nth-child(4) {
        width: 22%;
        margin-left:10px;
      }

      &:nth-child(5) {
        width:10%;
        margin-left:50px;
      }
     
    }
  }
    .catelist{
        padding:1em 0.5em;
        width: 94%;
        margin: 0em auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);
      .col1 {
        overflow: hidden;
        padding-left: 0%;
        //text-overflow: ellipsis;

      }
      .no{padding: 2px 4px;
        color: #FE6D46;
        text-align:left;
      }

      .address {
        a{
            color: rgb(255, 146, 96);
        }
    padding: 2px 4px;
        text-align:center;
        background: rgba(205, 158, 87, 0.1);
            border-radius: 30px;
            opacity: 1;
            border: 1px solid rgba(205, 158, 87, 0.5);
        
      }
}


    }

  

 
    .bdvalToken{
    &:last-child .list-item{
    /* border-bottom:none!important; */
    }
}
  .token{
    margin:0em;
    .flex-box2{
      padding: 20px 2.5em;
    }
    .flex-box2,  .tokenlist{
      justify-content: flex-start;
     
    .col2 {
      font-size:16px;
      text-align:left;
      &:nth-child(1) {
        width: 18%;
        margin-left:10px;
      }

      &:nth-child(2) {
        width: 22%;
        margin-left:10px;
      }

      &:nth-child(3) {
        width:24%;
        margin-left:10px;
      }
      &:nth-child(4) {
        width: 10%;
        margin-left:200px;
      }

     
    }
  }
    .tokenlist{
        padding:1em 0.5em;
        width: 94%;
        margin: 0em auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);
      .col2 {
        overflow: hidden;
        padding-left: 0%;
        //text-overflow: ellipsis;

      }
      .no{padding: 2px 4px;
        color: #FE6D46;
        text-align:left;
      }

      .address {
        a{
            color: rgb(255, 146, 96);
        }
    padding: 2px 4px;
        text-align:center;
        background: rgba(205, 158, 87, 0.1);
            border-radius: 30px;
            opacity: 1;
            border: 1px solid rgba(205, 158, 87, 0.5);
        
      }
}


    }
 
}
`

