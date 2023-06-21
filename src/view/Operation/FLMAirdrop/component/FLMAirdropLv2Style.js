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
    padding: 2em 0em;
    margin: 0 auto;
    width: 100%;
    border-radius:20px;
    .panel-title{
        width:80%;
        height:55px;
        display:flex;
        margin: 0 auto;
        justify-content:space-between;
        
        .title{
            font-size:24px;
            width: 50%;
        }

        .allrewz{
        width: 30%;
        height: 40px;
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
       }
      }
    }

    .records{
        width: 80%;
        margin: 0 auto;
        height: 540px;
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
    .pagination {
        text-align: center;
        margin: 25px auto;
      }

  }

}
`