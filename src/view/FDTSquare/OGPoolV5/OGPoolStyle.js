import styled from "styled-components";

export default styled.div`

  .signup-dialog {
    .input-title {
      font-size: 20px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #8A8080;
    }
  }

  .status-header {
    display: flex;
    justify-content: space-between;

    .signUp-btn {
      width: 160px;
      height: 40px;
      border-radius: 50px;
      opacity: 1;
      border: 1px solid rgba(255, 174, 78, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .status-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .info-item {
        margin-right: 10px;
        flex: 1;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 49px 49px 49px 49px;
        opacity: 1;
        border: 1px solid rgba(255, 255, 255, 0.1);
        width: 160px;
        padding: 0 20px;
        font-size: 16px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #FFFFFF;
        display: flex;
        align-items: center;

        .dot {
          width: 8px;
          height: 8px;
          background: #D8D8D8;
          border-radius: 50%;
          margin-right: 20px;

          &.active {
            background: #60C064;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
        }
      }

      .my-id {
        float: right;
      }

    }

  }

  .reward-item {
    display: flex;
    align-items: center;
    margin-left: 10px;

    img {
      margin-right: 6px;
    }
  }

  .active-content-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .content-item-box {
      flex-wrap: wrap;
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      padding: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);

      .name {
        opacity: 0.5;
        margin-bottom: 10px;
      }
      .address{
        padding: 3px 6px;

        color: #CD9E57;
      }
      & {
        &::-webkit-scrollbar {
          display: none;
        }

        scrollbar-width: none;
      }

      .item {
        .address {
          font-size: 12px;
        }
      }
    }

    .flex-box {
      margin-top: 10px;
      align-items: center;

      .name {
        font-size: 16px;
      }

      .value {
        font-size: 18px;
      }
    }

    .content-list {
      justify-content: space-between;
      margin-bottom: 10px;

      .content-item {
        .name {
          font-size: 16px;
        }

        .value {
          font-size: 18px;
        }
      }
    }
  }

  .donate-list {
    min-width: 1200px;

    .col {
      text-align: left;

      overflow: hidden;


      &:nth-child(1) {
        width: 8%;
      }

      &:nth-child(2) {
        width: 8%;
      }

      &:nth-child(3) {
        width: 15%;
      }

      &:nth-child(4) {
        width: 20%;
      }

      &:nth-child(5) {
        width: 8%;
      }

      &:nth-child(6) {
        width: 8%;
      }

      &:nth-child(9) {
        width: 15%;
      }
    }
  }

  .address {
    a {
      color: rgba(205, 158, 87, 1);
      text-align: center;
    }

    padding: 0 5px;
    width: 100px;
    border: 1px solid rgba(205, 158, 87, 1);
    background: rgba(205, 158, 87, 0.20);
    border-radius: 25px;
    overflow: hidden;

  }

  .search-box {
    display: flex;
    align-items: center;
    background: #3F3535;

    border-radius: 45px;
    border: 1px solid #333333;
    padding: 2px;
    height: 45px;

    .ant-input-affix-wrapper {
      line-height: 2;
    }

    .ant-select-selector {
      background: #1F1212;
      border-radius: 8px;
    }
  }

  .active-list-row {
    .col:nth-child(2) {
      width: 60% !important;
    }
  }


  .team-part {
    .in-line {
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;

      .left {
        font-weight: bold;
        margin-right: 20px;
      }

      .info-item {
        margin-right: 10px;

        strong {
          margin-right: 10px;
        }
      }
    }

    .flex-title {
      display: flex;
      justify-content: space-between;
    }
  }

  .list-header {
    padding: 10px 6px;
  }

  .page-title {
    font-size: 30px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    padding: 0px 11.7%;
  }

  .ant-form {
    position: relative;

    .down-icon {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 27%;
      left: 45%;
    }

  }

  .pid {
    width: 80px;
    height: 23px;
    background: rgba(254, 109, 70, 0.1);
    border-radius: 38px 38px 38px 38px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
    display: flex;
    font-size: 14px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #FE6D46;
    justify-content: center;
  }

  .header-nav {
    padding: 10px 11.7%;
    display: flex;

    .fire-nav-list {
      height: 45px;
      width: auto;

      .nav-item {
        width: auto;
        padding: 0 20px;
        font-size: 18px;
      }
    }
  }

  .donate-header {
    display: flex;
    justify-content: space-between;
    font-size: 16px;

    .isW {
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #8A8080;
      display: flex;
      align-items: center;

      .is {
        width: 80px;
        margin-left: 6px;
        height: 30px;
        background: rgba(254, 109, 70, 0.1);
        border-radius: 38px 38px 38px 38px;
        opacity: 1;
        border: 1px solid rgba(254, 109, 70, 0.5);
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #FE6D46;
        justify-content: center;
      }
    }
  }

  .panel-container {
    width: 100%;

    .isInW {
      display: flex;
      width: 100%;
      font-size: 16px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #8A8080;
      padding-bottom: 30px;

      .kk {
        width: 80px;
        color: rgba(254, 109, 70, 1);
        height: 30px;
        line-height: 30px;
        background: rgba(254, 109, 70, 0.1);
        border-radius: 50px 50px 50px 50px;
        opacity: 1;
        border: 1px solid rgba(254, 109, 70, 0.5);
        margin: 0px 10px;
        text-align: center;
      }
    }

    .info {
      font-size: 20px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #AC8989;
      line-height: 34px;
    }
  }

  .part1 {
    .panel-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .donate-info {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;

      .flex-box {
        justify-content: space-between;
        width: 60%;
      }

      .info-item {
        width: 326px;
        height: 140px;
        background: #1A1414;
        border-radius: 20px 20px 20px 20px;
        opacity: 1;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        padding: 0 30px;
        flex-direction: column;
        align-items: flex-start;

        .value {
          line-height: 50px !important;
          font-size: 24px !important;
        }

        .name {
          font-size: 16px;
          font-family: Roboto-Medium, Roboto;
          font-weight: 500;
          color: #8A8080;
          line-height: 21px;
        }
      }
    }


    .donation-box {
      width: 46%;

      margin: 0 auto;
      background: rgba(26, 20, 20, 1);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 20px;

      .title {
        font-size: 24px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        padding-bottom: 10px;

      }

      .donate-part {
        background: rgba(255, 255, 255, 0.1);
        padding: 6px 15px 0;
        margin-top: 6px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        .ant-form-item-control-input {
          background: none;
        }

        .balance-box {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          padding-top: 8px;
          font-family: Roboto-Bold, Roboto;

          p {
            width: 61%;
            text-align: left;
            font-size: 16px;
            color: white;
            font-weight: bold;
          }

          .name {

            font-size: 16px;
            font-weight: bold;
            color: #796B6B;
            line-height: 30px;
          }

          .value {
            font-size: 16px;
            font-weight: bold;
            color: #796B6B;
            display: flex;
            line-height: 30px;
            margin-left: 10px;
          }
        }

        .input-box {
          position: relative;
          display: flex;
          align-items: center;

          .right-tip {
            display: flex;
            align-items: center;

            font-size: 16px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;

            .coin-icon {
              width: 30px;
              height: 30px;
              margin-right: 6px;
            }
          }

          .exchangeAmount {
            height: 50px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            font-size: 20px;
            padding: 0 10px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
          }

          .ant-input-number, .ant-select {
            font-size: 20px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
            height: 50px;
            width: 100% !important;

            .ant-input-number-input-wrap, .ant-select-selector, input {
              height: 100%;
              width: 100% !important;
              font-size: 20px !important;
              font-family: Roboto-Black, Roboto;
              display: flex;
              align-items: center;
              border: none;
              font-weight: 900;

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

        }

      }

      .tip {
        margin-top: 2em;
        font-size: 14px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #8A8080;
      }
    }


    .donate {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;

      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .ant-btn-primary {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
    }


  }

  .part2 {
    .list-top-part {

      .fire-nav-list {
        margin: 1em 0;
        height: 45px;
        width: auto;

        .nav-item {
          width: auto;
          font-size: 18px;
        }
      }
    }

  }

  .part3 {
    .btns {
      display: flex;
      justify-content: space-between;
    }

    .tip {
      strong {
        color: #d84a1b;
      }
    }

    .icon-box {
      width: 200px;
      display: flex;
      justify-content: space-between;
      margin: 20px auto;

      .icon {
        cursor: pointer;
      }
    }

    .add-btn {
      margin: 1em 0;
    }
  }


  .flex-box2 {
    padding: 20px 2em;
  }

  .row2-list-item, .flex-box2 {
    justify-content: flex-start;

    font-size: 18px;
    font-weight: bold;
    color: #8A8080;


    .col {
      text-align: left;

      overflow: hidden;


      &:nth-child(1) {
        width: 10%;
        margin-left: 20px;
      }


      &:nth-child(3) {
        width: 20%;
      }

      &:nth-child(4) {
        width: 30%;
      }

      &:nth-child(5) {
        width: 20%;
      }

      &:nth-child(6) {
        width: 20%;
      }

    }

    .row2-list-item {

      .col {
        overflow: hidden;

      }

      .no {
        color: rgba(228, 134, 134, 1);
      }

      .pid {
        margin-right: 0px;
        color: #FE6D46;
        border: 1px solid #FE6D46;
        background: rgba(254, 109, 70, 0.20);
        border-radius: 25px;
      }

      .name {
        color: white;
      }


      a {
        color: rgba(205, 158, 87, 1);
        text-align: center;
      }

      border: 1px solid rgba(205, 158, 87, 1);
      background: rgba(205, 158, 87, 0.20);
      border-radius: 25px;

    }
  }


  .list-header3, .row3-list-item {
    padding: 6px;
  }


  /* mobile style */
  @media screen and (max-width: 1500px) {
    .page-title {
      font-size: 21px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      padding: 0px 11.7%;
    }

    .ant-form {
      position: relative;

      .down-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 27%;
        left: 45%;
      }

    }

    .pid {
      width: 80px;
      height: 23px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      font-size: 14px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #FE6D46;
      justify-content: center;
    }

    .header-nav {
      padding: 10px 11.7%;
      display: flex;
      width: 100%;

      .fire-nav-list {
        height: 45px;
        width: auto;

        .nav-item {
          width: auto;

          font-size: 16px;
        }
      }
    }

    .donate-header {
      display: flex;
      justify-content: space-between;
      font-size: 16px;

      .isW {
        font-size: 14px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #8A8080;
        display: flex;
        align-items: center;

        .is {
          width: 80px;
          margin-left: 6px;
          height: 30px;
          background: rgba(254, 109, 70, 0.1);
          border-radius: 38px 38px 38px 38px;
          opacity: 1;
          border: 1px solid rgba(254, 109, 70, 0.5);
          display: flex;
          align-items: center;
          font-size: 14px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          color: #FE6D46;
          justify-content: center;
        }
      }
    }

    .panel-container {
      width: 100%;

      .isInW {
        display: flex;
        width: 100%;
        font-size: 16px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #8A8080;
        padding-bottom: 30px;

        .kk {
          width: 80px;
          color: rgba(254, 109, 70, 1);
          height: 30px;
          line-height: 30px;
          background: rgba(254, 109, 70, 0.1);
          border-radius: 50px 50px 50px 50px;
          opacity: 1;
          border: 1px solid rgba(254, 109, 70, 0.5);
          margin: 0px 10px;
          text-align: center;
        }
      }

      .info {
        font-size: 20px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #AC8989;
        line-height: 34px;
      }
    }

    .part1 {
      .panel-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .donate-info {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;

        .flex-box {
          justify-content: space-between;
          width: 60%;

          .info-item {
            margin-left: 50px;

            .value {
              line-height: 50px !important;
              font-size: 20px !important;
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
            font-size: 20px;
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


      .donation-box {
        width: 62%;

        margin: 20px auto 0;
        background: rgba(26, 20, 20, 1);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px;

        .title {
          font-size: 16px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          padding-bottom: 10px;

        }

        .donate-part {
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 15px 0;
          margin-top: 6px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);

          .ant-form-item-control-input {
            background: none;
          }

          .balance-box {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            padding-top: 8px;
            font-family: Roboto-Bold, Roboto;

            p {
              width: 61%;
              text-align: left;
              font-size: 14px;
              color: white;
              font-weight: bold;
            }

            .name {

              font-size: 14px;
              font-weight: bold;
              color: #796B6B;
              line-height: 30px;
            }

            .value {
              font-size: 14px;
              font-weight: bold;
              color: #796B6B;
              display: flex;
              line-height: 30px;
              margin-left: 10px;
            }
          }

          .input-box {
            position: relative;
            display: flex;
            align-items: center;

            .right-tip {
              display: flex;
              align-items: center;

              font-size: 14px;
              font-family: Roboto-Black, Roboto;
              font-weight: 900;

              .coin-icon {
                width: 22px;
                height: 22px;
                margin-right: 6px;
              }
            }

            .exchangeAmount {
              height: 50px;
              display: flex;
              flex-grow: 1;
              align-items: center;
              font-size: 20px;
              padding: 0 10px;
              font-family: Roboto-Black, Roboto;
              font-weight: 900;
            }

            .ant-input-number, .ant-select {
              font-size: 15px;
              font-family: Roboto-Black, Roboto;
              font-weight: 900;
              height: 50px;
              width: 100% !important;

              .ant-input-number-input-wrap, .ant-select-selector, input {
                height: 100%;
                width: 100% !important;
                font-size: 20px !important;
                font-family: Roboto-Black, Roboto;
                display: flex;
                align-items: center;

                font-weight: 900;

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

          }

        }

        .tip {
          margin-top: 2em;
          font-size: 14px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          color: #8A8080;
        }
      }


      .donate {
        margin-top: 1em;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;

        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      }

      .ant-btn-primary {
        margin-top: 1em;
        width: 100%;
        height: 43px;
        font-size: 16px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
      }


    }

    .part2 {
      .list-top-part {

        .fire-nav-list {
          margin: 1em 0;
          height: 45px;
          width: 43%;

          .nav-item {
            width: 42%;
            font-size: 16px;
          }
        }
      }

    }

    .part3 {
      .btns {
        display: flex;
        justify-content: space-between;
      }

      .tip {
        strong {
          color: #d84a1b;
        }
      }

      .icon-box {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin: 20px auto;

        .icon {
          cursor: pointer;
        }
      }

      .add-btn {
        margin: 1em 0;
      }
    }


    .flex-box2 {
      padding: 20px 2em;
    }

    .row2-list-item, .flex-box2 {
      justify-content: flex-start;
      font-size: 14px;
      font-weight: bold;
      color: #8A8080;


      .col {
        font-size: 14px;
        text-align: left;
        padding-left: 0em;
        overflow: hidden;

        &:nth-child(1) {
          width: 10%;
        }

        &:nth-child(3) {
          width: 20%;
        }

        &:nth-child(4) {
          width: 30%;
        }

        &:nth-child(5) {
          width: 20%;
        }

        &:nth-child(6) {
          width: 20%;
        }

      }
    }

    .row2-list-item {

      .col {
        overflow: hidden;

      }

      .no {
        color: rgba(228, 134, 134, 1);
      }

      .pid {
        color: #FE6D46;
        border: 1px solid #FE6D46;
        background: rgba(254, 109, 70, 0.20);
        border-radius: 25px;
      }

      .address {
        a {
          color: rgba(205, 158, 87, 1);
          text-align: center;
        }

        width: 100px;
        border: 1px solid rgba(205, 158, 87, 1);
        background: rgba(205, 158, 87, 0.20);
        border-radius: 25px;

      }
    }


  }


  .pagination {
    text-align: center;
  }

  .team-list {
    .list-header, .list-item {
      .col:nth-child(1) {
        padding-left: 10px;
      }
    }

    .col {
      &:nth-child(1) {
        margin-left: 10px;
        width: 50px;
      }

      &:nth-child(2) {
        width: 50px;
      }

      &:nth-child(3) {
        width: 50px;
      }

      &:nth-child(4) {
        width: 150px;
      }

      &:nth-child(5) {
        width: 50px;
      }

      &:nth-child(6) {
        width: 50px;
      }
    }
  }

  .donate-list {
    min-width: 1200px;

    .list-header, .list-item {
      justify-content: flex-start;
      overflow: hidden;
    }

    .col {
      text-align: left;
      white-space: nowrap;
      padding: 0 10px;
      overflow: hidden;


      &:nth-child(1) {
        margin-left: 10px;
        width: 60px;
      }

      &:nth-child(2) {
        width: 80px;
      }

      &:nth-child(3) {
        width: 100px;
      }

      &:nth-child(4) {
        width: 150px;
      }

      &:nth-child(5) {
        width: 80px;
      }

      &:nth-child(6) {
        width: 80px;
      }

      &:nth-child(7) {
        width: 80px
      }

      &:nth-child(8) {
        width: 110px
      }

      &:nth-child(9) {
        width: 180px;

      }

    }
  }
`

