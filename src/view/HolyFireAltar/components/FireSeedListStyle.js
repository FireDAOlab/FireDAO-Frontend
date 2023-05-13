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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .list-item {
      cursor: pointer;
      padding: 10px;
      margin-top: 2em;
      margin-right: 2.5%;
      background: #3F3535;
      border-radius: 10px;
      border: 1px solid #7F6868;
      width: 23%;

      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: flex;
        justify-content: space-between;

        .id {
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 19px;
        }

        .number-box {
          background: rgba(#DD3642, 0.5);

          .number {
            text-align: center;
            width: 60px;
            height: 24px;
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
            border-radius: 10px;
            border: 1px solid;
            border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
          }
        }

      }
    }
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {

  }
`

