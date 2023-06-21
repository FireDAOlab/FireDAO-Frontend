import styled from 'styled-components'
export default styled.div`
width: 100%;
.form-value{
  padding: 0 10px;
}
.panel-box {
  width: 90%;
  margin: 0 auto;

  .panel-container {
    padding: 4em 0em 0em;
    margin: 0 auto;
    width: 100%;
    border-radius:20px;
    .panel-title{
        width:80%;
        height:50px;
        margin: 0 auto;
        
        .title{
            font-size:24px;
            width: 50%;
        }
        
    }
    .ownerwz{
            width: 80%;
            display: flex;
            margin: 0 auto;
            justify-content:space-between;
            .ant-form-item-control-input{
                border-radius:40px;
                border: 1px solid rgba(255, 255, 255, 0.10);
            }
            .ownerleft{
                width: 48%;
                
                .current{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(36, 27, 27, 1);
                    text-align:left;

                    p{
                        line-height:40px;
                        font-size:14px;
                        padding-left: 20px;
                    }
                }
            }
            .ownerright{
                width: 48%;
                font-size:14px;
                border-radius:40px ;
                .rightwz{
                    width: 100%;
                    height: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    background:rgba(36, 27, 27, 1);
                    /* color:rgba(138, 128, 128, 1); */
                    text-align:left;
                    
                }
                .ant-form input, .ant-form textarea{
                        font-size:14px;
                    }
            }
        }
        .ank{
            width:100%;
            margin:0 auto;
            text-align:center;
           .submi{
            width: 35%;
            margin:30px auto;
            height:50px;
            border-radius: 40px;
            /* background-image:linear-gradient(300deg,#FFC02C  0%,#DD3642 100%);   */
            text-align:center;
            
            p{
                font-size:16px;
                font-weight:bold;
                line-height:40px;
            }
        } 
        }
        

    }
    .paner-container2 {
        padding: 4em 0em 0em;
        margin: 20px auto;
        width: 100%;
        border-radius:20px;
        background:#201414;

        .tokenwz{
            width: 80%;
            margin: 0 auto;
            .enter{
                    height: 40px;
                    width: 48%;
                    background:rgba(36, 27, 27, 1);
                    border: 1px solid rgba(255, 255, 255, 0.10);
                    border-radius:40px;
                    padding-left: 20px;
                    p{
                        line-height:40px;
                    }
                }
                .ant-form-item-control-input-content{
                    background: rgb(32,20,20);
                }
            .chaxun{

                .jixuc{
                    width: 100%;
                    display: flex;
                    justify-content:space-between;
                    
                    .zjk{
                        width: 23%;
                        margin-top:20px;
                        

                        .kk{
                        width:100%;
                        height: 40px;
                        padding-left:20px;
                        line-height:40px;
                        border:1px solid rgba(255, 255, 255, 0.10);
                        background:rgba(36, 27, 27, 1);
                        border-radius:40px;
                    }
                    }
                        
                }
            }
        }
        .FLMup{
        width:80%;
        height:320px;
        margin:40px auto;
        
        .flmleft{
            width:47%;
            height: 310px;
            background-color:rgba(26, 20, 20, 1);
            padding: 60px 25px;
            border-radius:20px;
            border: 1px solid rgba(255, 255, 255, 0.10);
            float:left;
            .pool-wz{
                font-size:14px;
                color: rgba(138, 128, 128, 1);
            }
            .pool-zhi{
                line-height:42px;
                font-weight:bold;
                font-family:Russo One-Regular;
                font-size:34px;
                background-image:-webkit-linear-gradient(left,rgba(255, 78, 80, 1),rgba(249, 212, 35, 1)); 
            -webkit-background-clip:text; 
            -webkit-text-fill-color:transparent; 

            }
            .pool-wz1{
                font-size:14px;
                color: rgba(138, 128, 128, 1);
                margin-top: 20px;
            }
        }
        .flmright{
            height: 310px;
            margin: 0 auto;
            width:47%;
            border-radius:20px;
            background-color:rgba(26, 20, 20, 1);
            padding: 23px 25px;
            float: right;
            border: 1px solid rgba(255, 255, 255, 0.10);
            .pool-wz{
                font-size:14px;
                color: rgba(138, 128, 128, 1);
            }
            .maxzhi{
                border-radius:30px;
                display: flex;
                width: 100%;
                .maxleft{
                    height:47px;
                    /* width: 75%; */
                    /* background:rgba(104, 99, 99, 1); */
                    border: 0px;
                    /* border-radius:30px; */
                    
                    /* .zhong{
                        width: 65%;
                        height: 70%;
                        margin:0 auto;
                        margin-top:5px;
                        background: rgba(26, 20, 20, 1);
                        border-radius:6px;
                    } */
                    
                }
              
                .maxright{
                    width: 20%;
                    height: 47px;
                    /* background-image:linear-gradient(320deg,#FFC02C  0%,#DD3642 100%);   */
                    border-radius:10px;
                    margin-top: 33px;
            .maxwz{
                        font-size:14px;
                        font-weight:bold;
                        color: white;
                    }
                }
            }
.firstk{
width: 80%;
}
            .useradd{
                margin-top: 5px;
                .shuru{
                    height: 47px;
                    /* border-radius: 30px; */
                    border: 0px;
                }
            }
            .withdraw{
                width: 100%;
                height: 50px;
                border-radius:30px;
                background-image:linear-gradient(320deg,#FFC02C  0%,#DD3642 100%); 
            transition:0.5s; 
            margin-top:20px;

            .withwz{
                line-height:40px;
                font-size:14px;
                font-weight:bold;
                 }   
                }
            }
        }
    }
    .panel-container3{
        width: 100%;
        margin:20px auto;
        background: rgba(36, 27, 27, 1);
        border-radius:20px;
        height:660px;


        .pagination {
        text-align: center;
        margin: 35px auto;
      }
        
        .panel{
            margin: 20px auto;
            width: 80%;
            .panelwz{
                font-size: 24px; 
            }
        }

    .records{
        width: 80%;
        margin: 0 auto;
        height: 490px;
        background: rgba(26, 20, 20, 1);
        border-radius:20px;
        overflow: hidden;
  
        .lb{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            color: rgba(138, 128, 128, 1);
        }
        .hh{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            .xuhao{
                color: rgba(228, 134, 134, 1);
                font-size: 14px;
            }
            .pd{
                width: 80px;
                height: 30px;
                text-align:center;
                background: rgba(254, 109, 70, 0.10);
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }


            .fd{
                width: 80px;
                height: 30px;
                text-align:center;
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                background: rgba(254, 109, 70, 0.10);
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }
            .address{
                width:160px;
                height: 30px;
                border:1px solid rgba(205, 158, 87, 0.50);
                border-radius:20px;
                text-align:center;
                background: rgba(205, 158, 87, 0.10);
            p{
                font-size:14px;
                line-height:30px;
                color: rgba(205, 158, 87, 1);
            }
            }
        }
    }
    
    }
    .panel-container4{
    width: 100%;
    margin:20px auto;
    background: rgba(36, 27, 27, 1);
    border-radius:20px;
    height:660px;


    .pagination {
        text-align: center;
        margin: 35px auto;
        }

    .panel{
        margin: 20px auto;
        width: 80%;
        .panelwz{
        font-size: 24px; 
    }
    }

    .records{
        width: 80%;
        margin: 0 auto;
        height: 490px;
        background: rgba(26, 20, 20, 1);
        border-radius:20px;
        overflow: hidden;
        .lb{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            color: rgba(138, 128, 128, 1);
        }
        .hh{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            .xuhao{
                color: rgba(228, 134, 134, 1);
                font-size: 14px;
            }
            .pd{
                width: 80px;
                height: 30px;
                text-align:center;
                background: rgba(254, 109, 70, 0.10);
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }


            .fd{
                width: 80px;
                height: 30px;
                text-align:center;
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                background: rgba(254, 109, 70, 0.10);
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }
            .address{
                width:160px;
                height: 30px;
                border:1px solid rgba(205, 158, 87, 0.50);
                border-radius:20px;
                text-align:center;
                background: rgba(205, 158, 87, 0.10);
            p{
                font-size:14px;
                line-height:30px;
                color: rgba(205, 158, 87, 1);
            }
            }
        }
    }
    
    }

    .panel-container5{
        
    width: 100%;
    margin:20px auto;
    background: rgba(36, 27, 27, 1);
    border-radius:20px;
    height:670px;
   
        .pagination {
            text-align: center;
            margin: 35px auto;
        }   

    .panel{
        margin: 10px auto;
        width: 80%;
        display: flex;
        justify-content:space-between;
        .panelwz{
            font-size: 24px; 
        }   
    .allrewz{
        width: 30%;
        margin-top: 10px;
        height: 30px;
        display: flex;
        justify-content:space-between;
       .allwz{
            width: 48%;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.10);
            background: rgba(255, 255, 255, 0.10);
       }
       .rewz{
            width: 48%;
            border-radius:30px;
            border: 1px solid rgba(255, 255, 255, 0.10);
            background: rgba(255, 255, 255, 0.10);
            text-align:center;
            }
        }
    }

    .records{
        width: 80%;
        margin: 0 auto;
        height: 490px;
        background: rgba(26, 20, 20, 1);
        border-radius:20px;
        overflow: hidden;
        .lb{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            color: rgba(138, 128, 128, 1);
        }
        .hh{
            padding-top: 15px;
            display: flex;
            line-height:20px;
            flex-direction:row;
            justify-content:space-around;
            .xuhao{
                color: rgba(228, 134, 134, 1);
                font-size: 14px;
            }
            .pd{
                width: 80px;
                height: 30px;
                text-align:center;
                background: rgba(254, 109, 70, 0.10);
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }


            .fd{
                width: 80px;
                height: 30px;
                text-align:center;
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                background: rgba(254, 109, 70, 0.10);
                border: 1px solid rgba(254, 109, 70, 0.50);
                p{
                    line-height:30px;
                }
            }
            .address{
                width:160px;
                height: 30px;
                border:1px solid rgba(205, 158, 87, 0.50);
                border-radius:20px;
                text-align:center;
                background: rgba(205, 158, 87, 0.10);
            p{
                font-size:14px;
                line-height:30px;
                color: rgba(205, 158, 87, 1);
                }
            }
        }
    }
    
    }
}
`