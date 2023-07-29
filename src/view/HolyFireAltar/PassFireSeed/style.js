import styled from "styled-components";

export default styled.div`
      width: 100%;

      .ant-form-item-control-input {
        border-radius: 25px;
      }

      .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector {
          border-radius: 25px;
        }
      }

      .ant-input {
        border-radius: 25px;
      }

      @media screen and (min-width: 1500px) {
        .ant-btn {
          font-weight: 600;
          font-size: 16px;
        }

        .ant-form-item-label > label {
          color: white;
          font-size: 16px;
        }

        .flex-box {
          border-radius: 25px;
          width: 100%;
        }

        .panel-title {
          font-size: 30px;
        }

        .panel-container1 {
          border: none;
          padding: 3em 0em;
          position: relative;
          background: rgba(36, 27, 27, 1);
          width: 100%;

          .tp {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .tpitem {

              /* height: 300px; */
              /* text-align:center; */
              width: 24%;
              background: #140E0E;
              border-radius: 10px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              text-align: center;

              img {
                margin-top: 10px;
                width: 90%;
              }

              p {
                text-align: left;
                margin: 10px;
                font-size: 20px;
                font-family: Roboto-Bold, Roboto;
                font-weight: bold;
              }
            }
          }
        }

        .describe {
          width: 40%;
          text-align: center;
          background-color: #1A1414;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 4em auto;
          margin-bottom: 0em;
        }

        .form-value {
          padding: 0 10px;
        }

        .panel-box {
          margin: 0 auto;

          .panel-container {
            width: 100%;
          }
        }

        .send-fireseed {
          margin: 20px 0px;

          .ant-form-item {
            margin: 0em auto;
            width: 92% !important;
            display: flex;

          }

          .send-button {
            width: 92%;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            margin: 1em 0em;
            height: 40px;
            /* margin-left: calc(50% - 100px); */
          }

        }


        .nav-list-box {
          margin: 2em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 48%;
          height: 45px;
        }

        /* .nav-list { */
        /* display: flex;
        background: #3F3535;
        border-radius: 10px;
        border: 1px solid #333333;
        padding: 3px; */
        .nav-item {
          width: 23%;
          cursor: pointer;
          /* padding: 10px 30px; */
          border-radius: 25px;
          /* margin-right: 5px; */
          font-size: 16px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }

        /* } */
        .ant-form-item-row {
          width: 100%;
          margin: 0.5em 0em;
        }

        .ant-form-horizontal .ant-form-item-label {
          width: 100%;
          text-align: left;
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

        .content2 {
          margin: 2em auto;
          display: flex;
          justify-content: space-between;
          width: 100%;

          .myrecommend {
            height: 150px;
            background: #1A1414;
            width: 48%;
            align-items: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5em;

            .name {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
            }

            .value {
              margin: 1.5em 0em;
              line-height: 40px;
              padding: 0 10px;
              width: 100%;
              justify-content: space-between;
              background: rgba(205, 158, 87, 0.1);
              color: #CD9E57;
              border-radius: 50px 50px 50px 50px;
              opacity: 1;
              border: 1px solid rgba(205, 158, 87, 0.5);
            }
          }

          .myteamsize {
            padding: 2em;
            height: 150px;
            background: #1A1414;
            width: 48%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            .box-title {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
            }

            .refer-list {
              display: flex;
              justify-content: space-between;

              .refer-item {
                margin-right: 10px;
                text-align: center;
                margin-top: 0.2em;

                .name {
                  line-height: 40px;
                  margin-top: 10px;
                  font-family: Helvetica-Bold, Helvetica;
                  font-weight: bold;
                  color: #8A8080;
                  line-height: 22px;
                }

                .value {
                  font-size: 14px;
                  font-family: Krungthep;
                  line-height: 50px;
                  color: #fff;
                  text-align: left;
                }


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
          }

          .col {
            text-align: left;
            align-items: center;

            &:nth-child(1) {
              width: 5%;
            }

            &:nth-child(2) {
              width: 9%;
            }

            &:nth-child(3) {
              width: 5%;
            }

            &:nth-child(4) {
              width: 5%;
            }

            &:nth-child(5) {
              width: 10%;
            }

            &:nth-child(6) {
              width: 16%;
            }

            &:nth-child(7) {
              width: 14%;
            }

            &:nth-child(8) {
              width: 14%;
            }

            &:nth-child(9) {
              width: 13%;
              text-align: center;

            }

            &:nth-child(10) {
              width: 8%;
              text-align: center;
            }

            &:nth-child(11) {
              width: 8%;
            }
          }

          .list-item {
            padding: 0.5em 1em;

            .col {
              overflow: hidden;
              padding-left: 0.5%;
              //text-overflow: ellipsis;

            }
          }

          .list-item {
            padding: 0.5em 1em;

            .col {
              overflow: hidden;
              padding-left: 0.5%;

              //text-overflow: ellipsis;

            }

            .no {
              color: #FE6D46;
            }

            .pid {
              color: #FE6D46;
              border: 1px solid #FE6D46;
              background: rgba(254, 109, 70, 0.20);
              text-align: center;
              border-radius: 25px;
            }

            .fid {
              color: #FE6D46;
              border: 1px solid #FE6D46;
              background: rgba(254, 109, 70, 0.20);
              text-align: center;
              border-radius: 25px;
              margin-right: 20px;
            }

            .address {
              a {
                color: rgba(205, 158, 87, 1);
              }

              border: 1px solid rgba(205, 158, 87, 1);
              background: rgba(205, 158, 87, 0.20);
              text-align: center;
              border-radius: 25px;
              width: 130px;
              margin-right: 40px;

            }
          }
        }

      }

      @media screen and (max-width: 1500px) {
        .ant-btn {
          font-weight: 600;
          font-size: 14px;
        }

        .ant-form-item-label > label {
          color: white;
          font-size: 15px;
        }

        .flex-box {
          border-radius: 25px;
          width: 100%;
        }

        .panel-title {
          font-size: 30px;
        }

        .panel-container1 {
          border: none;
          padding: 3em 0em;
          position: relative;
          background: rgba(36, 27, 27, 1);
          width: 100%;

          .tp {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .tpitem {

              /* height: 300px; */
              /* text-align:center; */
              width: 24%;
              background: #140E0E;
              border-radius: 10px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              text-align: center;

              img {
                margin-top: 10px;
                width: 90%;
              }

              p {
                text-align: left;
                margin: 10px;
                font-size: 20px;
                font-family: Roboto-Bold, Roboto;
                font-weight: bold;
              }
            }
          }
        }

        .describe {
          width: 55%;
          text-align: center;
          background-color: #1A1414;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 4em auto;
          margin-bottom: 0em;
        }

        .form-value {
          padding: 0 10px;
        }

        .panel-box {
          margin: 0 auto;

          .panel-container {
            width: 100%;
          }
        }

        .send-fireseed {
          margin: 20px 0px;

          .ant-form-item {
            margin: 0em auto;
            width: 92% !important;
            display: flex;

          }

          .send-button {
            width: 92%;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            margin: 1em 0em;
            height: 40px;

            /* margin-left: calc(50% - 100px); */
          }

        }


        .nav-list-box {
          margin: 2em 0;
          display: flex;
          width: 100%;
        }

        .fire-nav-list {
          width: 73%;
          height: 45px;

        }

        .nav-item {
          cursor: pointer;
          width: 23%;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;

          &.active {

            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }

        .ant-form-item-row {
          width: 100%;
          margin: 0.2em 0em;
        }

        .ant-form-horizontal .ant-form-item-label {
          width: 100%;
          text-align: left;
        }
        .check-box{
          display: flex;
          width: 100%;
          justify-content: center;
          .check-btn{
            width: 100px;
            height: 30px;

            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(205,158,87,0.1);
            border-radius: 38px 38px 38px 38px;
            opacity: 1;
            border: 1px solid rgba(205,158,87,0.5);
            margin: 10px auto;

            color: #CD9E57;
            span{
              margin-right: 10px;
            }
            &.yes{
              background: rgba(89,170,121,0.1);
              border-radius: 38px 38px 38px 38px;
              border: 1px solid rgba(89,170,121,0.5);
              color: #59AA79;
            }
            &.no{
              background: rgba(205,87,87,0.1);
              border-radius: 38px 38px 38px 38px;
              border: 1px solid rgba(205,87,87,0.5);
              color: #CD5757;
            }
          }
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

        .content2 {
          margin: 2em auto;
          display: flex;
          justify-content: space-between;
          width: 100%;

          .myrecommend {
            height: 150px;
            background: #1A1414;
            width: 48%;
            align-items: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5em;

            .name {
              font-size: 15px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
            }

            .value {
              font-size: 13px;
              margin: 1.5em 0em;
              line-height: 40px;
              padding: 0 10px;
              width: 100%;
              justify-content: space-between;
              background: rgba(205, 158, 87, 0.1);
              color: #CD9E57;
              border-radius: 50px 50px 50px 50px;
              opacity: 1;
              border: 1px solid rgba(205, 158, 87, 0.5);
            }
          }

          .myteamsize {
            padding: 2em;
            height: 150px;
            background: #1A1414;
            width: 48%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            .box-title {
              font-size: 15px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
            }

            .refer-list {
              display: flex;
              justify-content: space-between;

              .refer-item {
                margin-right: 10px;
                text-align: center;
                margin-top: 0.2em;

                .name {
                  line-height: 40px;
                  margin-top: 10px;
                  font-family: Helvetica-Bold, Helvetica;
                  font-weight: bold;
                  color: #8A8080;
                  line-height: 22px;
                }

                .value {
                  font-size: 14px;
                  font-family: Krungthep;
                  line-height: 50px;
                  color: #fff;
                  text-align: left;
                }


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
          }

          .col {
            font-size: 13px;
            text-align: left;
            align-items: center;

            &:nth-child(1) {
              width: 5%;
            }

            &:nth-child(2) {
              width: 9%;
            }

            &:nth-child(3) {
              width: 5%;
            }

            &:nth-child(4) {
              width: 5%;
            }

            &:nth-child(5) {
              width: 10%;
            }

            &:nth-child(6) {
              width: 16%;
            }

            &:nth-child(7) {
              width: 14%;
            }

            &:nth-child(8) {
              width: 14%;
            }

            &:nth-child(9) {
              width: 13%;
              text-align: center;

            }

            &:nth-child(10) {
              width: 8%;
              text-align: center;
            }

            &:nth-child(11) {
              width: 8%;
            }
          }

          .list-item {
            padding: 0.5em 1em;

            .col {
              overflow: hidden;
              padding-left: 0.5%;
              //text-overflow: ellipsis;

            }
          }

          .list-item {
            padding: 0.5em 1em;

            .col {
              overflow: hidden;
              padding-left: 0.5%;

              //text-overflow: ellipsis;

            }

            .no {
              color: #FE6D46;
            }

            .pid {
              color: #FE6D46;
              border: 1px solid #FE6D46;
              background: rgba(254, 109, 70, 0.20);
              text-align: center;
              border-radius: 25px;
            }

            .fid {
              color: #FE6D46;
              border: 1px solid #FE6D46;
              background: rgba(254, 109, 70, 0.20);
              text-align: center;
              border-radius: 25px;
              margin-right: 20px;
            }

            .address {
              a {
                color: rgba(205, 158, 87, 1);
              }

              border: 1px solid rgba(205, 158, 87, 1);
              background: rgba(205, 158, 87, 0.20);
              text-align: center;
              border-radius: 25px;
              width: 130px;
              margin-right: 40px;

            }
          }
        }
      }

      .pagination {
        text-align: center;
      }



    `