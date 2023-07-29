import styled from "styled-components";

export default  styled.div`
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      @media screen and (min-width: 1000px) {
        .panel-box {
          min-width: 1000px;
          margin: 0 auto; 
        }

        .panel-container {
          width: 100%;
        }

        .airdrop-info {

          display: flex;
          padding-top: 50px;

          .img-box {
            border: 1px solid #7F6868;
            border-radius: 5%;
            flex-shrink: 0;
            background: #3F3535;
            padding: 10px;
            width: 320px;

            img {
              border-radius: 20px;
              width: 300px;
              margin: 0 auto;
            }

            .title {
              line-height: 50px;
              font-size: 30px;
              font-weight: bold;
              color: #FFFFFF;
              text-align: center;
            }
          }

          .right-content {
            padding-left: 20px;
            .amount-box{margin-top: 60px;
              h3{
                font-weight: bold;
                color: #FFFFFF;
                font-size: 18px;
              }}
            .title1 {
              font-size: 24px;
            }

            .title2 {
              margin-top: 10px;
              font-size: 26px;
            }

            .ant-btn {
              width: 200px;
              height: 50px;
              font-size: 20px;
              font-weight: bold;
              margin-top: 20px;
            }

            .available {
              margin-top: 20px;
              font-size: 20px;
              font-weight: bold;
              color: #ccc;
              line-height: 24px;
            }

            .fireseed {
              margin-top: 20px;

              strong {
                font-size: 50px;
                font-weight: bold;
                color: #D8D8D8;
                line-height: 60px;
                background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              span {
                font-size: 20px;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 24px;
                margin-left: 10px;
              }
            }
          }
        }

        .airdrop-list {
          margin-top: 30px;


          .header {
            display: flex;
            justify-content: space-between;

            span {
              font-size: 16px;
              font-weight: bold;
              color: #ccc;
              line-height: 19px
            }
          }

          .row {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;

            .col {
              display: flex;
              justify-content: space-between;
              width: 160px;
              margin: 0 10px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 20px;
              &:nth-child(1) {
                margin-left: 0;
              }
              &:nth-child(3) {
                margin-right: 0;
                justify-content: center;
              }
            }
          }
        }

        .airdrop-time {
          width: 500px;

          .header {
            font-size: 16px;
            font-weight: bold;
            color: #ccc;
            line-height: 19px;
            margin-top: 20px;

          }

          .row {
            margin-top: 16px;
            display: flex;
            align-items: center;

            text-align: center;
            color: #ccc;

            span {
              margin: 0 10px;
            }

            .col {
              color: #fff;

              width: 130px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 20px;

              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-claim-list {
          font-weight: bold;
          margin-top: 50px;

          .col {
            width: 20%;
          }

          .header {
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            margin-top: 8px;
            background: #3F3535;
            border-radius: 10px;

          }
        }
      }
      @media screen and (max-width: 1000px) {
        .panel-box {
          width: 94%;
          margin: 0 auto;
        }

        .panel-container {
          padding: 1em!important;
          width: 100%;
        }


        .airdrop-info {

          padding-top: 50px;

          .img-box {
            border: 1px solid #7F6868;
            border-radius: 5%;
            flex-shrink: 0;
            background: #3F3535;
            padding: 10px;
            width: 100%;

            img {
              border-radius: 20px;
              width: 100%;
              margin: 0 auto;
            }

            .title {
              line-height: 50px;
              font-size: 30px;
              font-weight: bold;
              color: #FFFFFF;
              text-align: center;
            }
          }

          .right-content {
            margin-top: 50px;
            padding-left: 20px;
            .amount-box{margin-top: 60px;
              h3{
                font-weight: bold;
                color: #FFFFFF;
                font-size: 18px;
              }}
            .title1 {
              font-size: 24px;
            }

            .title2 {
              margin-top: 10px;
              font-size: 26px;
            }

            .ant-btn {
              width: 200px;
              height: 50px;
              font-size: 20px;
              font-weight: bold;
              margin-top: 20px;
            }

            .available {
              margin-top: 20px;
              font-size: 20px;
              font-weight: bold;
              color: #ccc;
              line-height: 24px;
            }

            .fireseed {
              margin-top: 20px;

              strong {
                font-size: 50px;
                font-weight: bold;
                color: #D8D8D8;
                line-height: 60px;
                background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              span {
                font-size: 20px;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 24px;
                margin-left: 10px;
              }
            }
          }
        }

        .airdrop-list {
          margin-top: 30px;
          .header {
            display: flex;
            justify-content: space-between;

            span {
              font-size: 16px;
              font-weight: bold;
              color: #ccc;
              line-height: 19px
            }
          }

          .row {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            font-size: 12px;
            .col:nth-child(3){
              width: 70px;
            }
            .col {
              display: flex;
              justify-content: space-between;
              width: 90px;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 14px;
              font-size: 12px;
              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-time {
          .header {
            font-size: 16px;
            font-weight: bold;
            color: #ccc;
            line-height: 19px;
            margin-top: 20px;

          }

          .row {
            margin-top: 16px;
            display: flex;
            align-items: center;

            text-align: center;
            color: #ccc;

            span {
              margin: 0 10px;
            }

            .col {
              color: #fff;
              height: 40px;
              background: #3F3535;
              border-radius: 10px;
              border: 1px solid #342727;
              line-height: 40px;
              padding: 0 10px;

              &:nth-child(3) {
                justify-content: center;
              }
            }
          }
        }

        .airdrop-claim-list {
          font-weight: bold;
          margin-top: 50px;

          .col {
            width: 20%;
          }

          .header {
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            margin-top: 8px;
            background: #3F3535;
            border-radius: 10px;

          }
        }
      }
    `