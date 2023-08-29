import styled from "styled-components";
export default styled.div`
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
    border-radius:5px;

}
.ant-switch-checked {
      /* margin-left: 50px; */
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }
    .ant-switch-handle {
      width: 24px;
      height: 24px;
      top: 0px;
    }

    .ant-switch {
      margin-left: 55px;
      min-width: 45px;
      height: 25px;
      margin-top: 6px;
    }
.sc{
    width: 25px;
}
@media screen and (min-width: 1950px){

    .panel-box {
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
    color: white;
  }
  .header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
      height: 50px;
    width:85%;
    line-height:15px;
    padding: 0em;
    .nav-list{
        width:38%;
        height: 50px;
        display: flex;
       

        .nav-item {
        width:50%;
        font-size:18px;
      }
    }
    .nav-list1{
         margin-left: 8px;
        width: 19%;
        height: 50px;
        display: flex;
        .nav-item {
        width:100%;
        font-size:18px;
      }
    }
    }
  }
  .ant-form-item-label>label {
                color: rgba(138, 128, 128, 1);
                font-size:18px ;
                font-weight:bold;
            }
            .ant-input-affix-wrapper{
                font-size:18px ;
                color: white;
                border-radius: 50px;
            }
  .ant-form-item-control-input{
    border-radius:50px;
    .ant-input{
        border-radius:50px;
        font-size:16px;
    }
  }
  
  .content-item{
        .title{
            font-size:30px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
text-align:left;
margin-bottom:0.6em;
        }
    }

    .part1{
    .content-item{
        .ownerModify{
           
            width: 50%;
            .ownerLeft{
                width: 100%;
                font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;

                .current{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
            }
            .ownerRight{
                margin:1em 0;
                width: 100%;
                font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
                
                .ant-form input, .ant-form textarea{
                        font-size:16px;
                    }
            }
        }

        .status{
            width: 20%;
            .pause{
                font-size: 17px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
margin:1em 0;
            }
           
              
.statues {
    width: 100%;
p{
    font-size: 18px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
    display: flex;
        justify-content: space-between;
}
}
  


        }
        .submi{
            width:50%;
            display:flex;
            justify-content:space-between;
            .max-btn{
            width: 45%;
            font-size: 20px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
        .max-btn{
            width: 20%;
            font-size: 20px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }


        .coinModify{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
        }


        .coinWith{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFq{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFlm{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }
    }
  }
.setl2{
width: 100%;
.panel-container{
    .panel-title{
        
        display: flex; 
        justify-content: space-between ; 
        .tj{
  display: flex;
  width: 27%;
  .kk{
  width: 48%;
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
.kk1{
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
}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }
    }
    .bdval{
    &:last-child .list-item{
    border-bottom:none!important;
    }
}
.fire-list-box-admin{
    margin:1.5em 0em;
        .flex-box1{
          padding: 20px 2.5em;
          
        }
        .flex-box1,  .list-item{
          justify-content: flex-start;
         
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 20%;
            margin-left:20px;
          }

          &:nth-child(2) {
            width: 20%;
            margin-left:20px;
          }

          &:nth-child(3) {
            width:10%;
            margin-left:410px;
          }
         
        }
      }
        .list-item-admin {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .fire-list-box-airdropAmount {
    margin:1.5em 0em;
        .flex-box2{
          padding: 20px 2.5em;
        }
        .flex-box2,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 35%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:24%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdropA {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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

  .part2{
    width: 100%;
.panel-container{
    .panel-title{
        display: flex; 
        .tj2{
            display: none;
        }
        .selectbox{
            display: flex; 
            justify-content:end;
            width: 77%;
            .tj1{
                margin-right:5px;
  width: 17%;
  .kk{
  width: 100%;
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

}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }}
    }
  .fire-list-box-airdrop {
    margin:1.5em 0em;
        .flex-box3{
          padding: 20px 2.5em;
        }
        .flex-box3,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 35%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:24%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdrop {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }


  .check-icon {
    width: 26px;
    height: 26px;
  }

  .remove-btn {
    margin-left: 16px;
  }

  .ant-checkbox-inner {
    border-color: #d46b08 !important;
  }

  .remove-check {
    padding: 0 10px;

    Button {
      margin-left: 10px;
    }
  }
  
}

@media screen and (max-width: 1950px){
    .panel-box {
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
    color: white;
  }
  .header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
        padding: 0em;
      height: 50px;
    width:85%;
    line-height:15px;
    .nav-list{
        width:38%;
        height: 50px;
        display: flex;
       

        .nav-item {
        width:50%;
        font-size:18px;
      }
    }
    .nav-list1{
         margin-left: 8px;
        width: 19%;
        height: 50px;
        display: flex;
        .nav-item {
        width:100%;
        font-size:18px;
      }
    }
    }
  }
  .ant-form-item-label>label {
                color: rgba(138, 128, 128, 1);
                font-size:18px ;
                font-weight:bold;
            }
            .ant-input-affix-wrapper{
                font-size:18px ;
                color: white;
                border-radius: 50px;
            }
  .ant-form-item-control-input{
    border-radius:50px;
    .ant-input{
        border-radius:50px;
        font-size:16px;
    }
  }
  
  .content-item{
        .title{
            font-size:30px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
text-align:left;
margin-bottom:0.6em;
        }
    }

    .part1{
    .content-item{
        .ownerModify{
           
            width: 50%;
            .ownerLeft{
                width: 100%;
                font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;

                .current{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
            }
            .ownerRight{
                margin:1em 0;
                width: 100%;
                font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
                
                .ant-form input, .ant-form textarea{
                        font-size:16px;
                    }
            }
        }

        .status{
            width: 20%;
            .pause{
                font-size: 17px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
margin:1em 0;
            }
           
              
.statues {
    width: 100%;
p{
    font-size: 18px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
    display: flex;
        justify-content: space-between;
}
}
  


        }
        .submi{
            width:50%;
            display:flex;
            justify-content:space-between;
            .max-btn{
            width: 45%;
            font-size: 20px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
        .max-btn{
            width: 20%;
            font-size: 20px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }


        .coinModify{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
        }


        .coinWith{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFq{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFlm{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:16px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }
    }
  }
.scc{
    
}

.setl2{
width: 100%;
.panel-container{
    .panel-title{
        display: flex; 
        justify-content: space-between ; 
        .tj{
  display: flex;
  width: 27%;
  .kk{
  width: 48%;
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
.kk1{
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
}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }
    }
    .bdval{
    &:last-child .list-item{
    border-bottom:none!important;
    }
}
.fire-list-box-admin{
    margin:1.5em 0em;
        .flex-box1{
          padding: 20px 2.5em;
        }
        .flex-box1,  .list-item{
          justify-content: flex-start;
          font-size:16px;
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 20%;
            margin-left:20px;
          }

          &:nth-child(2) {
            width: 20%;
            margin-left:20px;
          }

          &:nth-child(3) {
            width:10%;
            margin-left:410px;
          }
          
        }
      }
        .list-item-admin {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .fire-list-box-airdropAmount {
    margin:1.5em 0em;
        .flex-box2{
          padding: 20px 2.5em;
        }
        .flex-box2,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 35%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:24%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdropA {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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

  .part2{
    width: 100%;
.panel-container{
    .panel-title{
        display: flex; 
        .tj2{
            display: none;
        }
        .selectbox{
            display: flex; 
            justify-content:end;
            width: 77%;
            .tj1{
                margin-right:5px;
  width: 17%;
  .kk{
  width: 100%;
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

}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }}
    }
  .fire-list-box-airdrop {
    margin:1.5em 0em;
        .flex-box3{
          padding: 20px 2.5em;
        }
        .flex-box3,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:16px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 35%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:24%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdrop {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }


  .check-icon {
    width: 26px;
    height: 26px;
  }

  .remove-btn {
    margin-left: 16px;
  }

  .ant-checkbox-inner {
    border-color: #d46b08 !important;
  }

  .remove-check {
    padding: 0 10px;

    Button {
      margin-left: 10px;
    }
  }
  
}


@media screen and (max-width: 1500px){
    .panel-box {
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
    color: white;
  }
  .header-nav {
    padding: 10px 11.7%;
    display: flex;
    width: 100%;

    .fire-nav-list {
        padding: 0em;
        height: 45px;
    width:95%;
    line-height:15px;
    .nav-list{
        width:42%;
        height: 45px;
        display: flex;
        .nav-item {
        width:50%;
        font-size:16px;
      }
    }
    .nav-list1{
         margin-left: 8px;
        width: 21%;
        height: 45px;
        display: flex;
        .nav-item {
        width:100%;
        font-size:16px;
      }
    }
    }
  }
  .ant-form-item-label>label {
                color: rgba(138, 128, 128, 1);
                font-size:16px ;
                font-weight:bold;
            }
            .ant-input-affix-wrapper{
                font-size:14px ;
                color: white;
                border-radius: 50px;
            }
  .ant-form-item-control-input{
    border-radius:50px;
    .ant-input{
        border-radius:50px;
        font-size:14px;
    }
  }
  
  .content-item{
        .title{
            font-size: 21px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
text-align:left;
margin-bottom:0.6em;
        }
    }

    .part1{
    .content-item{
        .ownerModify{
           
            width: 50%;
            .ownerLeft{
                width: 100%;
                font-size: 16px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;

                .current{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:13px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
            }
            .ownerRight{
                margin:1em 0;
                width: 100%;
                font-size: 16px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
                
                .ant-form input, .ant-form textarea{
                        font-size:14px;
                    }
            }
        }

        .status{
            width: 25%;
            .pause{
                font-size: 15px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
margin:1em 0;
            }
           
.statues {
    width: 100%;
             
p{
    font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
    display: flex;
        justify-content: space-between;
}
}
  


        }
        .submi{
            width:50%;
            display:flex;
            justify-content:space-between;
            .max-btn{
            width: 45%;
            font-size: 16px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
        .max-btn{
            width: 25%;
            font-size:16px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }


        .coinModify{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:13px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
        }


        .coinWith{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFq{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFlm{
            width: 50%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }
    }
  }
.setl2{
width: 100%;
.panel-container{
    .panel-title{
        display: flex; 
        justify-content: space-between ; 
        .tj{
  display: flex;
  width: 32%;
  .kk{
  width: 48%;
  height: 40px;
  line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:14px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}
.kk1{
    width: 45%;
    height: 40px;
    line-height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 34px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    text-align: center;
    font-weight: 400;
    margin-right: 10px;
}
}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }
    }
    .bdval{
    &:last-child .list-item{
    border-bottom:none!important;
    }
}
.fire-list-box-admin{
    margin:1.5em 0em;
        .flex-box1{
          padding: 20px 2.2em;
          font-size:16px;
        }
        .flex-box1,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 13%;
            margin-left:20px;
          }

          &:nth-child(2) {
            width: 25%;
            margin-left:20px;
          }

          &:nth-child(3) {
            width:15%;
            margin-left:230px;
          }
         
        }
      }
        .list-item-admin {
            
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .fire-list-box-airdropAmount {
    margin:1.5em 0em;
        .flex-box2{
          padding: 20px 2.5em;
        }
        .flex-box2,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 30%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:30%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdropA {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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

  .part2{
    width: 100%;
.panel-container{
    .panel-title{
        display: flex; 
        .tj2{
            display: none;
        }
        .selectbox{
            display: flex; 
            justify-content:end;
            width: 74%;
            .tj1{
                margin-right:5px;
  width: 17%;
  .kk{
  width: 100%;
  height: 40px;
  line-height:40px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:14px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}

}
.search-container {
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }}
    }
  .fire-list-box-airdrop {
    margin:1.5em 0em;
        .flex-box3{
          padding: 20px 2.5em;
        }
        .flex-box3,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 15%;
            margin-left:10px;
          }

          &:nth-child(2) {
            width: 35%;
            margin-left:10px;
          }

          &:nth-child(3) {
            width:20%;
            margin-left:10px;
          }
          &:nth-child(4) {
            width:24%;
            margin-left:10px;
          }
        }
      }
        .list-item-airdrop {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }


  .check-icon {
    width: 26px;
    height: 26px;
  }

  .remove-btn {
    margin-left: 13px;
  }

  .ant-checkbox-inner {
    border-color: #d46b08 !important;
  }

  .remove-check {
    padding: 0 10px;

    Button {
      margin-left: 10px;
    }
  }
  
}

@media screen and (max-width: 450px){
    .panel-box {
    width: 100%;
    .panel-container{
      width: 100%;
    }
  }
  
  .page-title{
    font-size: 18px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    padding: 0px;
    color: white;
    display:flex;
  }
  .header-nav {
    padding: 0px;
    display: flex;
    width: 100%;

    .fire-nav-list {
        padding: 0em;
        height: 40px;
    width:100%;
    line-height:15px;
    .nav-list{
        width:67%;
        height: 40px;
        display: flex;
        .nav-item {
        width:49%;
        font-size:14px;
      }
    }
    .nav-list1{
         margin-left: 8px;
        width: 30%;
        height: 40px;
        display: flex;
        .nav-item {
        width:100%;
        font-size:14px;
      }
    }
    }
  }
  .ant-form-item-label>label {
                color: rgba(138, 128, 128, 1);
                font-size:14px ;
                font-weight:bold;
            }
            .ant-input-affix-wrapper{
                font-size:14px ;
                color: white;
                border-radius: 50px;
            }
  .ant-form-item-control-input{
    border-radius:50px;
    .ant-input{
        border-radius:50px;
        font-size:14px;
    }
  }
  
  .content-item{
        .title{
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
text-align:left;
margin-bottom:0.6em;
        }
    }

    .part1{
    .content-item{
        .ownerModify{
           
            width: 100%;
            .ownerLeft{
                width: 100%;
                font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;

                .current{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
            }
            .ownerRight{
                margin:1em 0;
                width: 100%;
                font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
                
                .ant-form input, .ant-form textarea{
                        font-size:14px;
                    }
            }
        }

        .status{
            width: 100%;
            .pause{
                font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
margin:1em 0;
            }
           
              
.statues {
    width: 100%;
p{
    font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
    display: flex;
        justify-content: space-between;
}
}
        }
        .submi{
            width:100%;
            display:flex;
            justify-content:space-between;
            .max-btn{
            width: 100%;
            font-size: 16px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
        .max-btn{
            width: 100%;
            font-size:16px;
font-family: Russo One-Regular, Russo One;
font-weight: bold;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }


        .coinModify{
            width: 100%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
        }


        .coinWith{
            width: 100%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFq{
            width: 100%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }

        .setFlm{
            width: 100%;
            .current{
                font-family: Roboto-SemiBold, Roboto;
                    font-weight: 600;   
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(255,255,255,0.1);
                    text-align:left;

                    p{
                       
                        width: 100%;
                        height: 100%;
                        color: white;
                        font-size:14px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }
    }
  }
.setl2{
width: 100%;
.panel-container{
    .panel-title{
        display: flex;
        justify-content:space-between; 
        .tj{
  display: flex;
  justify-content:space-between; 
width: 60%;
  .kk{
    width: 44;
  height: 30px;
  line-height:30px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:14px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:5px;
&:last-child{
    margin-right:0px;
}
}
.kk1{
    font-size:14px;
              height: 30px;
              line-height:30px;
&:last-child{
    margin-right:0px;
}
}
}
.search-container {
            margin:0.5em 0em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }
    }
   
    .bdval{
    &:last-child .list-item{
    border-bottom:none!important;
    }
}
.fire-list-box-admin{
    margin:1.5em 0em;
        .flex-box1{
          padding: 20px 1.5em;
          font-size:14px;
        }
        .flex-box1,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 22%;
            margin-left:5px;
          }

          &:nth-child(2) {
            width:40%;
            margin-left:5px;
          }

          &:nth-child(3) {
            width:16%;
            margin-left:43px;
          }
         
        }
      }
        .list-item-admin {
        
            
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}

.listheadert{
    width: 530px;
}
  .fire-list-box-airdropAmount {
    overflow: scroll;
    margin:1.5em 0em;
        .flex-box2{
          padding: 20px 1.8em;
        }
        .flex-box2,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 80px;
            margin-left:0px;
          }

          &:nth-child(2) {
            width: 140px;
            margin-left:5px;
          }

          &:nth-child(3) {
            width:80px;
            margin-left:5px;
          }
          &:nth-child(4) {
            width:180px;
            margin-left:5px;
          }
        }
      }
        .list-item-airdropA {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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

  .part2{
    width: 100%;
.panel-container{
    .panel-title{
        display: block; 
        .tj2{
            float: right;
            display:block;
                margin-left:5px;
  width: 30%;
  .kk{
  width: 100%;
  height: 30px;
  line-height:30px;
  background: rgba(255,255,255,0.15);
border-radius: 34px 34px 34px 34px;
font-size:14px;
border: 1px solid rgba(255,255,255,0.15);
text-align:center;
font-weight:400;
margin-right:10px;
}

}
        .selectbox{
            display: block; 
            width: 100%;
           .tj1{
            display: none;
           }
.search-container {
            margin:1em 0em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
                .ant-input-affix-wrapper{
                    line-height:2;
                    padding: 0 11px;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
              }
            }
          }}
    }
    .listheadert{
        width: 570px;
    }
  .fire-list-box-airdrop {
    margin:1.5em 0em;
    overflow: scroll;
        .flex-box3{
          padding: 20px 1.8em;
          
        }
        .flex-box3,  .list-item{
          justify-content: flex-start;
        .col {
          font-size:14px;
          text-align:left;
          &:nth-child(1) {
            width: 80px;
            margin-left:0px;
          }

          &:nth-child(2) {
            width: 140px;
            margin-left:5px;
          }

          &:nth-child(3) {
            width:120px;
            margin-left:5px;
          }
          &:nth-child(4) {
            width:190px;
            margin-left:5px;
          }
        }
      }
        .list-item-airdrop {
            &:last-child{
                border-bottom: none;
            }
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
          .no{
            padding: 2px 4px;
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
}


  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }


  .check-icon {
    width: 26px;
    height: 26px;
  }

  .remove-btn {
    margin-left: 13px;
  }

  .ant-checkbox-inner {
    border-color: #d46b08 !important;
  }

  .remove-check {
    padding: 0 10px;

    Button {
      margin-left: 10px;
    }
  }
  
}



.pagination {
        text-align: center;
      }
 
`

