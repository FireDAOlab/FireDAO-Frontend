import styled from "styled-components";
const OGPoolStyle = styled.div`
  .fire-list-box{
    .col{
      .icon{
        width: 20px!important;
      }
    }
  }
  
  .flex-box{
    display: flex;
  }
  .other-reward{
    display: flex;
    justify-content: space-between;
  }
  .address {
    a {
      color: rgba(205, 158, 87, 1);
    }

    width: 130px;
    margin-right: 45px;

    border: 1px solid rgba(205, 158, 87, 1);
    background: rgba(205, 158, 87, 0.20);
    border-radius: 25px;
    text-align: center;
  }
  @media screen and (max-width: 1950px ) {
    .ant-input {
      font-size: 16px;
    }

    .ant-btn {
      margin-right: 20px;
      padding: 0 30px;
      font-size: 18px;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      height: 40px;
    }

    .ant-form-item-label > label {
      color: rgba(138, 128, 128, 1);
      font-size: 16px;

    }

    .ant-form-item-control-input-content {
      font-size: 16px;
      padding: 0px 10px;
    }

    .flex-box {
      align-items: center;
    }


    .ant-form {
      margin-bottom: 1.8em;

      .ant-form-item {
        margin-bottom: 20px;
        font-size: 16px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
      }
    }

    .ant-form-item-control-input {
      width: 50%;
      border-radius: 25px;
    }

    .current-status {
      font-size: 16px;
      white-space: nowrap;
      margin-right: 10px;
    }

    .tip-box {
      padding: 1.6em 0;
      font-size: 18px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #8A8080;
    }

    .ant-switch-checked {
      /* margin-left: 50px; */
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .switchh {
      width: 25%;
      line-height: 35px;

      p {
        font-size: 16px;
        color: white;
        display: flex;
        font-weight: 500;
        justify-content: space-between;
      }

    }

    .ant-switch-handle {
      width: 24px;
      height: 24px;
      top: 0px;
    }

    .ant-switch {
      margin-left: 55px;
      min-width: 45px;
      height: 25px;
      margin-top: 6px;
    }

    .page-title {
      margin-left: 5%;
      padding: 0 8%;
      font-size: 30px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
    }

    .panel-title1 {
      margin: 1em 0em;
      font-size: 18px;
      font-family: Roboto-Bold, Roboto;
      font-weight: 500;
    }

    .panel-title {
      font-size: 26px;
      margin: 1em 0em;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
    }

    .panel-container {
      width: 90%;
      margin: 10px auto;
      padding: 1em 8%;

      .operate-box {
        margin-top: 20px;
        text-align: center;

        .add {
          width: 160px;
        }
      }

      .info {
        font-size: 14px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #AC8989;
        line-height: 18px;
        max-width: 420px;
      }
    }

    .part2 {
      .header-box {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .fresh-icon {
          position: absolute;
          left: 260px;
          top: 40px;
          width: 26px;
          height: 26px;
          cursor: pointer;
          transition: 0.5s;

          &:hover {
            transform: rotate(180deg);
          }
        }

        .nav-list-box {
          margin: 0em 0em 2em 0;
          display: flex;
          width: 90%;

          .fire-nav-list {
            height: 45px;
            width: 30%;
            margin: 0;

            .nav-item {
              font-size: 18px;
            }
          }
        }
      }

      .fire-list-box {
        .list-header {
          padding: 20px 1em;
        }

        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */

        }

        .col {
          text-align: left;
          padding-left: 0.5%;

          &:nth-child(1) {
            width: 7%;
            margin-left: 10px;
          }

          &:nth-child(2) {
            width: 10%;
          }

          &:nth-child(3) {
            width: 13%;
          }

          &:nth-child(4) {
            width: 17.5%;
          }

          &:nth-child(5) {
            width: 8%;
            /* padding-right: 5px; */
          }

          &:nth-child(6) {
            width: 9%;
          }

          &:nth-child(7) {
            width: 8%;
          }

          &:nth-child(8) {
            width: 11%;
          }

          &:nth-child(9) {
            width: 16%;

          }

        }


        .list-item {
          padding: 0.5em 1em;

          .col {
            overflow: hidden;

          }

          .no {
            color: #FE6D46;
            width: 60px;
          }

          .pid {
            text-align: center;
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            border-radius: 25px;
            width: 60px;
            margin-right: 36px;
          }

          .address {
            a {
              color: rgba(205, 158, 87, 1);
            }

            width: 130px;
            margin-right: 45px;

            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            border-radius: 25px;
            text-align: center;
          }
        }
      }

    }


    .part21 {
      .fire-list-box {

        .list-item, .list-header {
          justify-content: flex-start;

        }

        .col {
          text-align: left;
          font-size: 16px;

          &:nth-child(1) {
            width: 15%;

            margin-left: 30px;

          }

          &:nth-child(2) {
            width: 16%;
            margin-left: 10px;

          }

          &:nth-child(3) {
            width: 20%;
            margin-left: 15px;
          }

          &:nth-child(4) {
            width: 28%;
            margin-left: 10px;
          }

          &:nth-child(5) {
            width: 15%;
            margin-left: 15px;
          }
        }

        .list-item {
          padding: 0.5em 2.5em;

          .col {
            overflow: hidden;

            //text-overflow: ellipsis;

          }

          .no {
            color: rgba(228, 134, 134, 1);
          }

          .pid {
            color: rgba(254, 109, 70, 1);
            border: 1px solid rgba(254, 109, 70, 0.5);
            background: rgba(254, 109, 70, 0.20);
            text-align: center;
            border-radius: 25px;

          }

          .address {
            color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align: center;
            border-radius: 25px;
            padding: 0px 10px;
          }

          .sc {
            width: 25px;
          }
        }
      }

      .hh1 {

        .hhi, .flex-box1 {
          justify-content: flex-start;

        }

        .col {
          text-align: left;
          font-size: 16px;

          &:nth-child(1) {
            width: 13%;

            margin-left: 30px;

          }

          &:nth-child(2) {
            width: 18%;
            margin-left: 10px;

          }

          &:nth-child(3) {
            width: 28%;
            margin-left: 10px;
          }

          &:nth-child(4) {
            width: 15%;
            margin-left: 15px;
          }

          &:nth-child(5) {
            width: 15%;
            margin-left: 15px;
          }
        }

        .hhi {
          padding: 0.5em 2.5em;

          .col {
            overflow: hidden;

            //text-overflow: ellipsis;

          }

          .no {
            color: rgba(228, 134, 134, 1);
          }

          .pid {
            color: rgba(254, 109, 70, 1);
            border: 1px solid rgba(254, 109, 70, 0.5);
            background: rgba(254, 109, 70, 0.20);
            text-align: center;
            border-radius: 25px;

          }

          .address {
            color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align: center;
            border-radius: 25px;
            padding: 0px 10px;
          }

          .sc {
            width: 25px;
          }
        }
      }

      .hh {
        display: flex;
        width: 60%;

        .btns {
          margin-top: 1.7em;
          float: left;
          font-size: 18px;
        }

      }

    }

    .part3 {
      .operate-btns {
        width: 100%;

        Button {
          width: 100%;
          height: 40px;
          margin-top: 1em;
        }
      }

      .donate-info {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;

        .flex-box1 {
          display: flex;
          justify-content: space-between;
          width: 60%;

          .info-item {
            margin-left: 50px;

            .value {
              font-size: 24px;
              font-family: Roboto-Bold, Roboto;
              font-weight: bold;
              color: #FFA756;
              line-height: 50px;
              background: white;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .info-item {

          .name {
            font-size: 16px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #8A8080;
            line-height: 30px;
          }

          .value {
            font-size: 24px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            line-height: 50px;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

      }

      .rate1 {
        margin-top: 0.5em;

        .info-item {
          .name {
            font-size: 16px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #8A8080;
            line-height: 30px;
          }

          .value {
            font-size: 24px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            line-height: 50px;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      .donate-pid {
        .flex-box {
          margin: 1.5em 0;
          justify-content: space-between;
          align-items: center;

          .pid {
            padding: 6px 10px;
            border-radius: 10px;
            background: linear-gradient(90deg, rgba(#dd3642, 0.3) 0%, rgba(#FFC02C, 0.5) 100%);
            border: 1px solid #DD3642;
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .value {
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #796B6B;
            line-height: 28px;
          }
        }
      }

      .input-box {
        position: relative;

        .exchangeAmount {
          height: 50px;
          display: flex;
          align-items: center;
          font-size: 18px;
          padding: 0 20px;
        }

        .ant-input-number, .ant-select {
          height: 50px;
          padding: 0 66px 0 40px;
          width: 100% !important;

          .ant-input-number-input-wrap, .ant-select-selector, input {
            height: 100%;
            width: 100% !important;

            &:focus-visible {
              outline: none;
            }
          }

          .ant-select-clear {
            margin-right: 66px;
          }
        }

        .max-btn {
          width: 60px;
          position: absolute;
          right: 10px;
          top: 10px;
        }

        .coin-icon {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 30px;
          height: 30px;
        }

        .coin-name {
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 20px;
        }
      }

      .balance-box {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-family: Roboto-Bold, Roboto;

        .name {
          font-weight: bold;
          color: #796B6B;
          line-height: 30px;
        }

        .value {
          font-weight: bold;
          color: #FFFFFF;
          line-height: 30px;
        }
      }

      .down-icon {
        width: 40px;
        height: 40px;
        margin: 0.5em 0 1em calc(50% - 20px);

      }

      .donate {
        margin-top: 1em;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
      }

      .tip {
        margin-top: 2em;
        font-size: 16px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        color: #FFFFFF;
      }
    }

    .header-nav {
      width: 90%;
      margin-left: 5%;
      display: flex;
      padding: 0 8%;

      .fire-nav-list {
        .nav-item {
          width: 150px;
          height: 55px;
          font-size: 18px;
          color: rgba(138, 128, 128, 1);
          line-height: 20px;
          /* background: rgba(255, 255, 255, 0.10); */
        }

        .nav-item.active {
          color: white;
        }
      }
    }

    .part4 {
      .sum-list {
        .sum-item-box {
          margin-top: 20px;
          padding: 10px 10px;
          box-shadow: #fff1f0 0 0 10px;
          text-align: center;

          .col {
            &:nth-child(1) {
              width: 60px;
            }

            &:nth-child(2) {
              width: 60px;
            }

            &:nth-child(3) {
              width: 60px;
            }

            &:nth-child(4) {
              width: 250px;
            }

            &:nth-child(5) {
              width: 50px;
            }

            &:nth-child(6) {
              width: 30px;
            }

            &:nth-child(7) {
              width: 100px;
            }

          }

          .sum-list-header {
            display: flex;

            .index {
              margin-right: 10px;
              font-weight: bold;
            }
          }

          .sum-item-header {
            border-bottom: 1px solid #eee;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;

            .col:nth-child(4) {
              width: 160px;
              overflow: hidden;
            }
          }

          .sum-list-footer {
            border-top: 1px solid #eee;
            display: flex;
            padding-top: 10px;

            .col {
              margin-right: 10px;

              &:nth-child(1) {
                width: 150px !important;
              }

              &:nth-child(2) {
                width: 120px !important;
              }

              &:nth-child(3) {
                width: 120px !important;
              }
            }
          }

          .sum-item {
            .col:nth-child(4) {
              width: 160px;
              overflow: hidden;
            }

            padding: 5px 0px;
            display: flex;

            justify-content: space-between;
          }
        }

      }
    }

  }

  .pagination {
    text-align: center;
  }

  @media screen and (max-width: 1500px) {
    .ant-form-item-label > label {
      color: rgba(138, 128, 128, 1);
      font-size: 14px;
    }

    .ant-input {
      font-size: 14px;
    }

    .ant-btn {
      margin-right: 20px;
      padding: 0 30px;
      font-size: 15px;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      height: 40px;
    }

    .ant-form {
      margin-bottom: 1.8em;

      .ant-form-item {
        margin-bottom: 20px;
      }
    }

    .ant-form-item-control-input {
      width: 50%;
      border-radius: 25px;
    }

    .current-status {
      font-size: 16px;
      white-space: nowrap;
      margin-right: 10px;
    }

    .tip-box {
      padding: 1em 0;
      font-size: 13px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #8A8080;
    }

    .ant-switch-checked {
      /* margin-left: 50px; */
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .switchh {
      width: 25%;

      p {
        font-size: 14px;
        color: white;
        display: flex;
        font-weight: 500;
        justify-content: space-between;
      }

    }

    .ant-switch-handle {
      width: 24px;
      height: 24px;
      top: 0px;
    }

    .ant-switch {
      margin-left: 55px;
      min-width: 45px;
      height: 25px;
      margin-top: 6px;
    }

    .page-title {
      margin-left: 5%;
      padding: 0 8%;
      font-size: 21px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
    }

    .panel-title {
      font-size: 19px;
      margin: 1em 0em;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
    }

    .panel-title1 {
      margin: 1em 0em;
      font-size: 16px;
      font-family: Roboto-Bold, Roboto;
      font-weight: 500;
    }

    .panel-container {
      width: 90%;
      margin: 10px auto;
      padding: 1em 8%;

      .operate-box {
        margin-top: 20px;

        .add {
          width: 160px;
        }
      }

      .info {
        font-size: 13px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #AC8989;
        line-height: 18px;
        max-width: 420px;
      }
    }


    .part2 {
      .header-box {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .fresh-icon {
          position: absolute;
          left: 260px;
          top: 40px;
          width: 26px;
          height: 26px;
          cursor: pointer;
          transition: 0.5s;

          &:hover {
            transform: rotate(180deg);
          }
        }

        .nav-list-box {
          margin: 0em 0em 2em 0;
          display: flex;
          width: 90%;

          .fire-nav-list {
            height: 45px;
            width: 50%;
            margin: 0;

            .nav-item {
              font-size: 16px;
            }
          }
        }
      }

      .fire-list-box {
        .list-header {
          padding: 20px 1em;
        }

        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */

        }

        .col {
          font-size: 14px;
          text-align: left;
          padding-left: 0.5%;

          &:nth-child(1) {
            width: 6%;
            margin-left: 5px;
          }

          &:nth-child(2) {
            width: 6%;
            margin-left: 10px;
          }

          &:nth-child(3) {
            width: 13%;
            margin-left: 10px;
          }

          &:nth-child(4) {
            width: 16%;
            margin-left: 10px;
            margin-right: 0px;
          }

          &:nth-child(5) {
            width: 8%;
            margin-left: 10px;
          }

          &:nth-child(6) {
            width: 9%;
            margin-left: 5px;

          }

          &:nth-child(7) {
            width: 8%;
          }

          &:nth-child(8) {
            width: 11%;
          }

          &:nth-child(9) {
            width: 16%;

          }

        }


        .list-item {
          padding: 0.5em 1em;

          .col {
            overflow: hidden;

          }

          .no {
            color: #FE6D46;
          }

          .pid {
            text-align: center;
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            border-radius: 25px;
            margin-right: 0px;
          }

          .address {
            a {
              color: rgba(205, 158, 87, 1);

            }

            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            border-radius: 25px;
            text-align: center;
          }
        }
      }

    }


    .part21 {
      .fire-list-box {
        .list-header {
          padding: 20px 2em;
        }

        .list-item, .list-header {
          justify-content: flex-start;

        }

        .col {
          text-align: left;
          font-size: 14px;

          &:nth-child(1) {
            width: 15%;

            margin-left: 30px;

          }

          &:nth-child(2) {
            width: 16%;
            margin-left: 10px;

          }

          &:nth-child(3) {
            width: 20%;
            margin-left: 15px;
          }

          &:nth-child(4) {
            width: 28%;
            margin-left: 10px;
          }

          &:nth-child(5) {
            width: 15%;
            margin-left: 15px;
          }
        }

        .list-item {
          padding: 0.5em 2.5em;

          .col {
            overflow: hidden;

            //text-overflow: ellipsis;

          }

          .no {
            color: rgba(228, 134, 134, 1);
          }

          .pid {
            color: rgba(254, 109, 70, 1);
            border: 1px solid rgba(254, 109, 70, 0.5);
            background: rgba(254, 109, 70, 0.20);
            text-align: center;
            border-radius: 25px;

          }

          .address {
            color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align: center;
            border-radius: 25px;
            padding: 0px 10px;
          }

          .sc {
            width: 25px;
          }
        }
      }

      .hh1 {

        .hhi, .flex-box1 {
          justify-content: flex-start;

        }

        .col {
          text-align: left;
          font-size: 14px;

          &:nth-child(1) {
            width: 13%;

            margin-left: 30px;

          }

          &:nth-child(2) {
            width: 18%;
            margin-left: 10px;

          }

          &:nth-child(3) {
            width: 28%;
            margin-left: 10px;
          }

          &:nth-child(4) {
            width: 15%;
            margin-left: 15px;
          }

          &:nth-child(5) {
            width: 15%;
            margin-left: 15px;
          }
        }

        .hhi {
          padding: 0.5em 2.5em;

          .col {
            overflow: hidden;

            //text-overflow: ellipsis;

          }

          .no {
            color: rgba(228, 134, 134, 1);
          }

          .pid {
            color: rgba(254, 109, 70, 1);
            border: 1px solid rgba(254, 109, 70, 0.5);
            background: rgba(254, 109, 70, 0.20);
            text-align: center;
            border-radius: 25px;

          }

          .address {
            color: rgba(205, 158, 87, 1);
            border: 1px solid rgba(205, 158, 87, 0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align: center;
            border-radius: 25px;
            padding: 0px 10px;
          }

          .sc {
            width: 25px;
          }
        }
      }

      .hh {
        display: flex;


        .btns {
          margin-top: 1.7em;
          float: left;
          font-size: 18px;
        }

      }

    }

    .part3 {
      .operate-btns {
        width: 100%;

        Button {
          width: 100%;
          height: 40px;
          margin-top: 1em;
        }
      }

      .donate-info {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;

        .flex-box1 {
          display: flex;
          justify-content: space-between;
          width: 60%;

          .info-item {
            margin-left: 50px;

            .value {
              font-size: 18px;
              font-family: Roboto-Bold, Roboto;
              font-weight: bold;
              color: #FFA756;
              line-height: 50px;
              background: white;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .info-item {

          .name {
            font-size: 14px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #8A8080;
            line-height: 30px;
          }

          .value {
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            line-height: 50px;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

      }

      .rate1 {
        display: block;
        margin-top: 0.5em;

        .info-item {
          .name {
            font-size: 14px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #8A8080;
            line-height: 30px;
          }

          .value {
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            line-height: 50px;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      .donate-pid {
        .flex-box {
          margin: 1.5em 0;
          justify-content: space-between;
          align-items: center;

          .pid {
            padding: 6px 10px;
            border-radius: 10px;
            background: linear-gradient(90deg, rgba(#dd3642, 0.3) 0%, rgba(#FFC02C, 0.5) 100%);
            border: 1px solid #DD3642;
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFA756;
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .value {
            font-size: 18px;
            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #796B6B;
            line-height: 28px;
          }
        }
      }

      .input-box {
        position: relative;

        .exchangeAmount {
          height: 50px;
          display: flex;
          align-items: center;
          font-size: 18px;
          padding: 0 20px;
        }

        .ant-input-number, .ant-select {
          height: 50px;
          padding: 0 66px 0 40px;
          width: 100% !important;

          .ant-input-number-input-wrap, .ant-select-selector, input {
            height: 100%;
            width: 100% !important;

            &:focus-visible {
              outline: none;
            }
          }

          .ant-select-clear {
            margin-right: 66px;
          }
        }

        .max-btn {
          width: 60px;
          position: absolute;
          right: 10px;
          top: 10px;
        }

        .coin-icon {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 30px;
          height: 30px;
        }

        .coin-name {
          position: absolute;
          right: 10px;
          top: 10px;
          font-size: 20px;
        }
      }

      .balance-box {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-family: Roboto-Bold, Roboto;

        .name {
          font-weight: bold;
          color: #796B6B;
          line-height: 30px;
        }

        .value {
          font-weight: bold;
          color: #FFFFFF;
          line-height: 30px;
        }
      }

      .down-icon {
        width: 40px;
        height: 40px;
        margin: 0.5em 0 1em calc(50% - 20px);

      }

      .donate {
        margin-top: 1em;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
      }

      .tip {
        margin-top: 2em;
        font-size: 16px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        color: #FFFFFF;
      }
    }

    .header-nav {
      width: 90%;
      margin-left: 5%;
      display: flex;
      padding: 0 8%;

      .fire-nav-list {
        .nav-item {
          width: 150px;
          height: 55px;
          font-size: 16px;
          color: rgba(138, 128, 128, 1);
          line-height: 20px;
          /* background: rgba(255, 255, 255, 0.10); */
        }

        .nav-item.active {
          color: white;
        }
      }
    }

    .part4 {
      .sum-list {
        .sum-item-box {
          margin-top: 20px;
          padding: 10px 10px;
          box-shadow: #fff1f0 0 0 10px;
          text-align: center;

          .col {
            &:nth-child(1) {
              width: 60px;
            }

            &:nth-child(2) {
              width: 60px;
            }

            &:nth-child(3) {
              width: 60px;
            }

            &:nth-child(4) {
              width: 250px;
            }

            &:nth-child(5) {
              width: 50px;
            }

            &:nth-child(6) {
              width: 30px;
            }

            &:nth-child(7) {
              width: 100px;
            }

          }

          .sum-list-header {
            display: flex;

            .index {
              margin-right: 10px;
              font-weight: bold;
            }
          }

          .sum-item-header {
            border-bottom: 1px solid #eee;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;

            .col:nth-child(4) {
              width: 160px;
              overflow: hidden;
            }
          }

          .sum-list-footer {
            border-top: 1px solid #eee;
            display: flex;
            padding-top: 10px;

            .col {
              margin-right: 10px;

              &:nth-child(1) {
                width: 150px !important;
              }

              &:nth-child(2) {
                width: 120px !important;
              }

              &:nth-child(3) {
                width: 120px !important;
              }
            }
          }

          .sum-item {
            .col:nth-child(4) {
              width: 160px;
              overflow: hidden;
            }

            padding: 5px 0px;
            display: flex;

            justify-content: space-between;
          }
        }

      }
    }
  }
`;
export default OGPoolStyle;
