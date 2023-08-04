import styled from "styled-components";
export default   styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  .address-list {
    .fire-list-icon{
        display: block;
      align-items: center;
text-align:center;
      .list {
        width: 90% !important;
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
  .fire-list-icon {
    padding: 0em 0 0em;
width: 100%;
.list-icon{
    background: #140E0E;
border-radius: 12px 12px 12px 12px;
opacity: 1;
border: 1px solid rgba(255,255,255,0.1);
width: 100%;

.icon-name{
    font-size:14px;
}

}
    }


.dialog-content{
    position: fixed;
    z-index: 1;
    top: calc(25vh);
    left: calc(50vw - 42.5%);
    /* width: 520px; */
    background: #241B1B;
    border-radius: 13px;
width: 85%;

    border: 1px solid #3E3737;
    padding: 30px;

    .header{
      text-align: right;      
      .close{
        cursor: pointer;
      }
    }
    .title{
      font-size: 18px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 29px;
      }

    .dialog-name,.ant-form-item-label label{
      padding-bottom: 1em ;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      margin-top: 1em;
      line-height: 29px;
    }
    
  }
  
`