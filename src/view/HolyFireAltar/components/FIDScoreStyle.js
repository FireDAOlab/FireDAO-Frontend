import styled from "styled-components";

export default styled.div`

  .more-btn {
    width: 300px;
    height: 40px;
    background: #3F3535;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    margin: 2em auto 0;
    cursor: pointer;
  }

  .list {

    .list-item {
      cursor: pointer;
      display: flex;
      padding: 10px;
      margin-top: 2em;
      margin-right: 2.5%;
      background: #3F3535;
      border-radius: 10px;
      border: 1px solid #7F6868;
      >div{
        width: 20%;
      }
      .coefficients {
        margin: 0 10px;
      }
    }
  }
  .total-score{
    display: flex;
    .name{
      font-size: 16px;
    }
    .score{
      margin-left: 20px;
      font-size: 17px;
    }
  }
  .my-soul{
    margin: 20px 0;
    display: flex;
    align-items: center;
    .name{
      font-size: 16px;
    }
    .value{
      margin-left: 20px;
      
    }
  }
  /* mobile style */
  @media screen and (max-width: 1000px) {

  }
`

