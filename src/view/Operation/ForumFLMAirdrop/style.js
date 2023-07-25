import styled from 'styled-components'
export default styled.div`
width: 100%;
.form-value{
  padding: 0 10px;
}
.fire-list-box{
        min-width:0px;
    }
.panel-box {
  width: 90%;
  margin: 0 auto;

  .panel-container {
    
    padding: 4em 0em;
    margin: 0 auto;
    width: 100%;
    border-radius:20px;
    .panel-title{
        width:80%;
        height:80px;
        display:flex;
        margin: 0 auto;
        justify-content:space-between;
        
        .title{
            font-size:24px;
            width: 50%;
        }
        .lv{
            width: 25%;
            height: 40px;
            display: flex;
            justify-content:space-between;
            img{
                    width: 18px;
                    height: 18px;
                    margin-right: 5px;
                }
            .lvleft{
                width: 46%;
                background-color: rgba(36, 27, 27, 1);
                border-radius:10px;
                
            }
            .lvright{
                width: 46%;
                background-color: rgba(36, 27, 27, 1);
                border-radius:10px;
                margin-left:15px;
            }
        }
    }
    .FLMup{
        width:80%;
        height:295px;
        margin:5px auto;
        
        .flmleft{
            width:47%;
            background-color:rgba(26, 20, 20, 1);
            border: 1px solid rgba(255, 255, 255, 0.10);
            padding: 55px 25px;
            height: 285px;
            border-radius:20px;
            float:left;
            .pool-wz{
                font-size:14px;
                color: rgba(138, 128, 128, 1);
            }
            .pool-zhi{
                font-weight:bold;
                font-family:Russo One-Regular;
                font-size:36px;
                background-image:-webkit-linear-gradient(left,rgba(255, 78, 80, 1),rgba(249, 212, 35, 1)); 
            -webkit-background-clip:text; 
            -webkit-text-fill-color:transparent; 

            }
            .pool-shu{
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                .pool-wz2{
                    font-size:20px;
                    font-weight:bold;
                }
            }
        }
        .ant-form-item{
            width: 100%;
            
        }
        .ant-form-item-label>label{
font-size:14px;
                color: rgba(138, 128, 128, 1);
                margin-bottom:25px;
        }
        .flmright{
            margin: 0 auto;
            width:47%;
            height: 285px;
            border-radius:20px;
            background-color:rgba(26, 20, 20, 1);
            border: 1px solid rgba(255, 255, 255, 0.10);
            padding: 50px 25px;
            float: right;
            .pool-wz{
                
            }
            .maxzhi{
                width: 100%;
                
                .inputbox {
                    
                    position: relative;
                    display: flex;
                    width: 100%;
                    align-items: center;
                .maxleft{
                    width: 100;
                    height: 47px;
                    font-size: 23px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400px;
                }
              
                .max-btn {
          width: 65px;
          height: 40px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          top: 3px;
          right: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600px;
          cursor: pointer;
        }
                }
        .withdraw{
            margin-top: 25px;
            height: 45px;
                width: 100%;
                font-size:16px;
                line-height:35px;
                font-weight:bold;;
            }
            }

            .useradd{
                margin-top: 5px;
                .shuru{
                    height: 47px;
                    /* border-radius: 30px; */
                    border: 0px;
                }
            }
            
        }
    }
  }

    .panel-container2{
    width: 100%;
    margin:20px auto;
    background: rgba(36, 27, 27, 1);
    border-radius:20px;
    height:790px;

    .pagination {
        text-align: center;
        margin: 35px auto;
      }
    .panel{
        margin: 25px auto;
        width: 80%;
        height:120px;

        .nav-list-box {
            margin: 2em 0;
            display: flex;
            width: 100%;
            
            .fire-nav-list{
                width: 320px;
                margin: 0;
            }
        }
    }

        .panelwz{
            font-size: 24px; 
        }
    .allrewz{
        width: 40%;
        height: 40px;
        display: flex;
       .allwz{
        width: 45%;
        border-radius: 30px;
        background-image:linear-gradient(300deg,#FFC02C  0%,#DD3642 100%);  
            text-align:center;

            p{
                line-height:40px;
            }
         
       }
       .rewz{
        width: 45%;
        border-radius:30px;
        margin-left:10px;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: rgba(255, 255, 255, 0.10);
        text-align:center;
        
        p{
            line-height:40px;
        }
       }
    }


    .records{
        width: 80%;
        margin: 0 auto;
        height: 530px;
        background: rgba(26, 20, 20, 1);
        border-radius:20px;
        overflow: auto;
        .lb{
            display: flex;
            justify-content: space-around;
            padding-top: 15px;
            /* flex-direction:row; */
            color: rgba(138, 128, 128, 1);
            text-align:left;

        }
        .hh{
            /* -webkit-box-pack: start; */
            /* justify-content: flex-start; */
            padding-top: 15px;
            display: flex;
            flex-direction:row; 
             justify-content:space-around;
            .xuhao{
                color: rgba(228, 134, 134, 1);
                font-size: 14px;
            }
            .pd{
                width: 80px;
                height: 30px;
                background: rgba(254, 109, 70, 0.10);
                color:rgba(254, 109, 70, 1);
            
            }


            .fd{
                width: 80px;
                height: 30px;
                /* text-align:left; */
                color:rgba(254, 109, 70, 1);
             
            }
            .address{
                font-size:14px;
                width:150px;
                color: rgba(205, 158, 87, 1);
                height: 30px;
                /* text-align:left; */
          
            }
            .zchang{
                width:80px;
                height: 30px;
                font-size:14px;
                color:white;
                /* text-align:left; */
            }
            .sj{
                width:200px;
                height: 30px;
                font-size:14px;
                color: rgba(205, 158, 87, 1);
     
            }
        }
       }
    
    }
}
`