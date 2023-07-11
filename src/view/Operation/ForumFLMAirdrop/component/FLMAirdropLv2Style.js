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
        width: 15%;
        height: 40px;
        display: flex;
        justify-content:space-between;
        
       .allwz{
        width: 100%;
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
            flex-direction:row;
            justify-content:space-around;
            color: rgba(138, 128, 128, 1);
        }
        .hh{
            padding-top: 15px;
            display: flex;
            flex-direction:row;
            justify-content:space-around;
            
            .pd{
                width: 80px;
                height: 30px;
                text-align:center;
                color:rgba(254, 109, 70, 1);
            }


            .fd{
                width: 80px;
                height: 30px;
                text-align:center;
                color:rgba(254, 109, 70, 1);
                border-radius: 20px ;
                
            }
            .address{
                width:150px;
                height: 30px;
                text-align:center;
                font-size:14px;
                color: rgba(205, 158, 87, 1);
           
            }
            .sc{
                border: none;
            }
            .sc img{
                width: 25px;
                height: 25px;
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