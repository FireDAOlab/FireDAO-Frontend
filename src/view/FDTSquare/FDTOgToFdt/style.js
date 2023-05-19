import styled from "styled-components";

export default styled.div`
  .title{
    text-align: center;
  }
  .panel-box {
    width: 100%;

    .panel-container {
      width: 90%;
      .op-box{
        display: flex;
        justify-content: space-between;
        .withdraw-box{
          border-radius: 20px;
          border: 1px solid #eee;
          padding: 20px;
          .name{
            text-align: center;
          }
          .value{
            text-align: center;
            font-size: 18px;
            margin: 30px 0;
          }
          .input-box{
            display: flex;
            .withdraw-input{
              width: 80px;
            }
          }
        }
      }
      .exchange-box {
        border-radius: 20px;
        border: 1px solid #eee;
        padding: 20px;
        .exchange {
          width: 400px;
          .part1 ,.part2{
            display: flex;
            justify-content: space-between;
            .right{
              display: flex;
              position: relative;
              .balance{
                position: absolute;
                right: 0;
                bottom: -20px;
              }
            }
            
          }
          .to{
            text-align: center;
            margin: 20px 0;
          }
          .part2{
            margin-top: 20px;
          }
          .tip{
            padding: 10px 0;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }

    .panel-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .nav-list {

    display: flex;
    background: #3F3535;
    border-radius: 10px;
    border: 1px solid #333333;
    padding: 3px;

    .nav-item {
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 10px;
      margin-right: 10px;
      font-size: 16px;
      font-weight: bold;

      &.active {
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
      }

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`

