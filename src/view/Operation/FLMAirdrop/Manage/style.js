import styled from "styled-components";
export default styled.div`

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
      height: 50px;
    width: 45%;
    line-height:15px;
      .nav-item {
        width:42%;
        font-size:18px;
      }
    }
  }
  .ant-form-item-label>label {
                color: rgba(138, 128, 128, 1);
                font-size:18px ;
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
        font-size:18px;
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
                        font-size:18px;
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
                        font-size:14px;
                    }
            }
        }

        .status{
            width: 18%;
            .pause{
                font-size: 18px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
margin:1em 0;
            }
           
              
.current,.statues {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
                font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;  
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
font-weight: 400;
height: 40px;
margin: 0.5em 0em;
border-radius:50px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
        .max-btn{
            width: 18%;
            font-size: 20px;
font-family: Russo One-Regular, Russo One;
font-weight: 400;
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
                        font-size:18px;
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
                        font-size:18px;
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
                        font-size:18px;
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
                        font-size:18px;
                        padding: 0em 1em;
                        line-height:40px;
                    }
                }
              
        }
    }
  }



  .fire-list-box-airdrop {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 300px;
    }

    .col:nth-child(3) {
      width: 100px;
    }


  }

  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }

  .title {
    text-align: center;
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

  .fire-list-box {
    margin-top: 20px;
  }

  .fire-list-box-admin {
    .col:nth-child(1) {
      width: 10%;
    }

    .col:nth-child(2) {
      width: 80%;
    }
  }

  .list-item {
    padding: 10px 0;
    display: flex;

    .pid {
      margin-right: 10px;
    }
  }

  .discount-list {
    .list-item {
      padding: 10px 0;
      display: flex;
      align-items: center;

      .end {
        margin: 0 10px;
      }

      .discount {
        margin: 0 10px;
      }
    }
  }


  
}
 
`

