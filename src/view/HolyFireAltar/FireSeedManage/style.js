import styled from "styled-components";
export default styled.div`
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
    width:62%;

margin: 0 auto;
background: rgba(26, 20, 20, 1);
border-radius: 20px;
border: 1px solid rgba(255,255,255,0.1);
padding: 20px;
  }
  .current{
    display: flex;
    justify-content: center;
          font-size: 16px;
          padding-top:8px;
          font-family: Roboto-Bold, Roboto;
    .name{
      font-weight: bold;
      font-size: 18px;
    }
    .value{
      margin-left: 10px;
    }
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

  
`

