import styled from "styled-components";

export default styled.div`
      width: 100%;
      
.ant-pagination .ant-pagination-item-link {
    border-radius:5px;
}
.ant-pagination-disabled{
    border-radius:5px;

}
.panel-container .search-container .search-box .ant-input-affix-wrapper{
    border:none;
}
.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:25px;

}
.ant-select{
    border-radius:25px;
}
.panel-box{
  .panel-container{
    padding: 30px 11.7%;
    .conuser{
      
          float: right;
          background: #373232;
          margin: 0px 13px;
          text-align: center;
          line-height: 28px;
          width: 32px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          .conimg{
           width: 22px;
            margin-left: -10px;
            margin-top: -10px;
          }
    }
  }
}

      .ant-form-item-control-input {
        border-radius: 25px;
      }

      

      .ant-input {
        border-radius: 25px;
      }
.panel-box{
    .conten-contain{
    padding: 30px 3.2%;
}
}

      @media screen and (min-width: 1950px) {
        .ant-btn {
          font-weight: 600;
          font-size: 18px;
        }
        .ant-form{ 
            input{
    font-size:16px;
  }}
        .ant-form-item-label > label {
          color: white;
          font-size: 16px;
        }

        .flex-box {
          width: 100%;
          font-size:16px;
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
          width: 45%;
    padding: 20px;
          text-align: center;
          background-color: #1A1414;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 2em auto;
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
          width: 50%;
          height: 50px;

        }

        .nav-item {
          cursor: pointer;
          width: 23%;
          border-radius: 25px;
          font-size: 18px;
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
          font-size:15px;
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
            span{   margin-top: 2px;
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
            height: 170px;
            background: #1A1414;
            width: 48%;
            align-items: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5em;

            .name {
              font-size: 18px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
              margin-top:0.5em;
            }

            .value {
              font-size: 16px;
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
            padding: 1.5em;
            height: 170px;
            background: #1A1414;
            width: 48%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            .box-title {
              font-size:18px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
              margin-top:0.5em;
            }

            .refer-list {
              display: flex;
              justify-content: space-between;

              .refer-item {
                margin-right: 10px;
                text-align: center;
                margin-top: 1em;

                .name {
                  line-height: 40px;
                  margin-top: 10px;
                  font-family: Helvetica-Bold, Helvetica;
                  font-weight: bold;
                  font-size:18px;
                  color: #8A8080;
                  line-height: 22px;
                }

                .value {
                  font-size: 18px;
                  font-family: Krungthep;
                  line-height: 50px;
                  margin-top: 5px;
                  color: #fff;
                  text-align: left;
                }


              }

            }
          }

        }

        .listheadert:last-child .list-item{
            /* border-bottom:none; */
        }
        .fire-list-box {
          .list-header {
            padding: 20px 2.5em;
          }

          .list-item, .list-header {
            justify-content: flex-start;
         

          .col {
            text-align: left;
            align-items: center;
font-size:16px;
            &:nth-child(1) {
              width:6%;
             margin-left:0px;
            }

            &:nth-child(2) {
              width: 10%;
              margin-left:6px;
              text-align:center;
            }

            &:nth-child(3) {
              width:9%;
              margin-left:6px;
               text-align:center;
            }

            &:nth-child(4) {
              width:9%;
              margin-left:6px;
               text-align:center;
            }

            &:nth-child(5) {
              width:8%;
              margin-left:6px;
            }

            &:nth-child(6) {
              width:11%;
              margin-left:6px;
            }

            &:nth-child(7) {
              width: 10%;
              margin-left:8px;
            }

            &:nth-child(8) {
              width: 10%;
              margin-left:8px;
            }

            &:nth-child(9) {
              width: 11%;
              margin-left:8px;
              text-align: left;

            }

            &:nth-child(10) {
              width: 15%;
              margin-left:8px;
              text-align: left;
            }
          }

        }
          .list-item {
            padding: 1em 0.5em ;
            width: 95%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            .col {
              overflow: hidden;
              padding-left: 0;

            }

            .no {
              color: #FE6D46;
            }

            .pid {
                    padding: 2px 5px;
                color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }

            .fid {
                    padding: 2px 5px;
                color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }

            .address {
                    padding: 2px 5px;
              a {
                color: rgb(255, 146, 96);
              }
              color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
            }
          }
        }
      }
      @media screen and (max-width: 1950px) {
        .ant-btn {
          font-weight: 600;
          font-size: 18px;
        }
        .ant-form{ 
            input{
    font-size:16px;
  }}
        .ant-form-item-label > label {
          color: white;
          font-size: 16px;
        }

        .flex-box {
          width: 100%;
          font-size: 16px;
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
          width: 45%;
    padding: 20px;
          text-align: center;
          background-color: #1A1414;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 2em auto;
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
          .ant-form-item {
            margin: 0em auto;
            width: 98% !important;
            display: flex;

          }

          .send-button {
            width: 98%;
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
          width: 50%;
          height: 50px;

        }

        .nav-item {
          cursor: pointer;
          width: 23%;
          border-radius: 25px;
          font-size: 18px;
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
          font-size:15px;
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
              margin-right: 10px;   margin-top: 2px;
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
            height: 170px;
            background: #1A1414;
            width: 48%;
            align-items: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5em;

            .name {
              font-size: 18px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
              margin-top:0.5em;
            }

            .value {
              font-size: 16px;
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
            padding: 1.5em;
            height: 170px;
            background: #1A1414;
            width: 48%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            .box-title {
              font-size:18px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
              margin-top:0.5em;
            }

            .refer-list {
              display: flex;
              justify-content: space-between;

              .refer-item {
                margin-right: 10px;
                text-align: center;
                margin-top: 1em;

                .name {
                  line-height: 40px;
                  margin-top: 10px;
                  font-family: Helvetica-Bold, Helvetica;
                  font-weight: bold;
                  font-size:18px;
                  color: #8A8080;
                  line-height: 22px;
                }

                .value {
                  font-size: 18px;
                  font-family: Krungthep;
                  line-height: 50px;
                  margin-top: 5px;
                  color: #fff;
                  text-align: left;
                }


              }

            }
          }

        }

        .listheadert:last-child .list-item{
            /* border-bottom:none; */
        }
        .fire-list-box {
          .list-header {
            padding: 20px 2.5em;
          }

          .list-item, .list-header {
            justify-content: flex-start;
         

          .col {
            text-align: left;
            align-items: center;
font-size:16px;
            &:nth-child(1) {
              width:6%;
             margin-left:0px;
            }

            &:nth-child(2) {
              width: 10%;
              margin-left:6px;
              text-align:center;
            }

            &:nth-child(3) {
              width:9%;
              margin-left:6px;
               text-align:center;
            }

            &:nth-child(4) {
              width:9%;
              margin-left:6px;
               text-align:center;
            }

            &:nth-child(5) {
              width:8%;
              margin-left:6px;
            }

            &:nth-child(6) {
              width:11%;
              margin-left:6px;
            }

            &:nth-child(7) {
              width: 10%;
              margin-left:8px;
            }

            &:nth-child(8) {
              width: 10%;
              margin-left:8px;
            }

            &:nth-child(9) {
              width: 11%;
              margin-left:8px;
              text-align: left;

            }

            &:nth-child(10) {
              width: 15%;
              margin-left:8px;
              text-align: left;
            }
          }

        }
  
  
            .list-item {
              padding: 1em 0.5em;
              width: 95%;
              margin: 0 auto;
              border-radius:0px;
              border-bottom:1px solid rgba(255, 255, 255, 0.1);
              .col {
                overflow: hidden;
                padding-left: 0;
  
              }

            .no {
              color: #FE6D46;
            }

            .pid {   padding: 2px 5px;
                    color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);

            }

            .fid {  padding: 2px 5px;
                   color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);

            }

            .address {
                    padding: 2px 5px;
              a {
              color: rgb(255, 146, 96);
              }

background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
            }
          }
        }
      }

      @media screen and (max-width: 1500px) {
        .ant-form{ input{
    font-size:13px;
  }}
        .ant-btn {
          font-weight: 600;
          font-size: 15px;
        }

        .ant-form-item-label > label {
          color: white;
          font-size: 15px;
        }

        .flex-box {
          width: 100%;
          font-size: 14px;
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
          width: 60%;
          text-align: center;
          background-color: #1A1414;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 2em auto;
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
          .ant-form-item {
            margin: 0em auto;
            width: 98% !important;
            display: flex;

          }

          .send-button {
            width: 98%;
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
          width: 50%;
          height: 45px;

        }

        .nav-item {
          cursor: pointer;
          width: 23%;
          border-radius: 25px;
          font-size: 14px;
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
              margin-right: 10px;   margin-top: 2px;
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
            height: 140px;
            background: #1A1414;
            width: 49%;
            align-items: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1.5em;

            .name {
              font-size: 14px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #8A8080;
              line-height: 26px;
            }

            .value {
              font-size: 14px;
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
            padding: 1.5em;
            height: 140px;
            background: #1A1414;
            width: 49%;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);

            .box-title {
              font-size: 14px;
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
                margin-top: 0.5em;
                font-size:14px;

                .name {
                    font-size:14px;
                  line-height: 40px;
                  font-family: Helvetica-Bold, Helvetica;
                  font-weight: bold;
                  color: #8A8080;
                  line-height: 22px;
                }

                .value {
                  font-size: 14px;
                  font-family: Krungthep;
                  line-height: 25px;
                  color: #fff;
                  text-align: left;
                }


              }

            }
          }

        }
        .listheadert:last-child .list-item{
            /* border-bottom:none; */
        }


        .fire-list-box {
            overflow-x: scroll;

            .listheadert{
    width: 1200px;
}
          .list-header {
            padding: 20px 2.5em;
          }

          .list-item, .list-header {
            justify-content: flex-start;
         

          .col {
            text-align: left;
            align-items: center;
font-size:14px;
&:nth-child(1) {
       width:  70px;
       margin-right:5px;
    }
    &:nth-child(2) {
        width:  120px;
       margin-right:5px;
       text-align:center;
    }
    &:nth-child(3) {
       width: 90px;
       margin-right:5px; 
       text-align:center;
    }
    &:nth-child(4) {
        width: 90px;
        margin-right:5px; 
        text-align:center;
    }
    &:nth-child(5) {
       width: 90px;
       margin-right:5px;
    }
    &:nth-child(6) {
        width:  110px;
        margin-right:5px;
    }
    &:nth-child(7) {
       width: 110px;
       margin-right:5px;
    }
    &:nth-child(8) {
       width: 110px;
       margin-right:5px;
    }
    &:nth-child(9) {
       width: 110px;
       margin-right:5px;
    }
    &:nth-child(10) {
        width: 130px;
        margin-right:5px;
    }

           
          }
        }
        

          .list-item {
            padding: 1em 0.5em;
            width: 95%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            .col {
              overflow: hidden;
              padding-left: 0%;

              //text-overflow: ellipsis;

            }

            .no {
              color: #FE6D46;
            }

            .pid {    padding: 2px 5px;
                color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }

            .fid {    padding: 2px 5px;
                color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }

            .address {    padding: 2px 5px;
              a {
                color: rgb(255, 146, 96);
              }
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);

            }
          }
        }

      }
   
   


 @media screen and (max-width: 450px)  {
  .ant-form{ input{
    font-size:14px;
  }}
  .send-fireseed {
    .ant-form-item {
      margin: 0em auto;
      width:100% !important;
      display: flex;

    }
    .flex-box {
        font-size:14px;
      }
    .send-button {
      width: 100%;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      margin: 1em 0em;
      height: 40px;

      /* margin-left: calc(50% - 100px); */
    }

  }
  .ant-form-item-label > label {
          color: white;
          font-size: 14px;
        }
  .panel-box{
        
        .panel-container{
          padding: 18px 5.9%;
          .panel-title{
            font-size:18px;
            padding: 5px 0px;
          }
          .conuser{
            margin: 0px 5px;
            text-align: center;
            line-height: 24px;
            width: 26px;
            .conimg{
                 width: 18px;
                  margin-left: -8px;
                  margin-top: -5px;
                }
      }
      .describe{
        width: 100%;
        margin: 1em auto;
        border-radius:10px;
        padding: 0px;
        border: none;
        background: rgba(36, 27, 27, 1);
        .ant-form-item-label > label {
          font-size:14px;
        }
        .check-box{
          display: flex;
          width: 100%;
          justify-content: center;
          
          .check-btn{
            width: 100px;
            height: 30px;
            font-size:14px;
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
              margin-right: 10px;margin-top: 2px;
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
      }
      
      
        }
        .content2{
        display:block;
        margin: 1em auto;
        .myrecommend{
          width: 100%;
          padding: 0em;
          height:100px;
      border-radius:10px;
      border: none;
      background:rgba(36,27,27,1) ;
          .name{
            font-size:14px;
          }
          .value{
            font-size:14px;
            margin:1em 0;
          }
        }
        .myteamsize{
          border-radius:10px;
      height:100px;
          width: 100%;
          padding: 0em;
          margin: 0em;
          border: none;
          background:rgba(36,27,27,1) ;
          .box-title{
            font-size: 14px;
          }
          .refer-list{
            font-size:14px;
            
          }
        }
      }                                                     
      .header-box{
        .nav-list-box{
          margin: 0.5em 0;
          .fire-nav-list{
            width: 100%;
            height: 40px;
            .nav-item{
              font-size:14px;
            }
          }
        }
      }
      .listheadert:last-child .list-item{
            /* border-bottom:none; */
        }
      .listheadert{
        width: 1190px;
      }
      .fire-list-box{
        overflow-x: scroll;
        border-radius:10px;
      
        .list-header {
                  padding: 20px 2.5em;
                }
      
                .list-item, .list-header {
                  justify-content: flex-start;
                  font-size:14px;
                
      
                .col {
                  font-size:14px;
                  text-align: left;
                  align-items: center;
      
                  &:nth-child(1) {
                    width: 70px;
                    margin-left:5px;
                  }
      
                  &:nth-child(2) {
                    width: 120px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(3) {
                    width:90px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(4) {
                    width: 90px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(5) {
                    width: 80px;
                    margin-left:5px;
                  }
      
                  &:nth-child(6) {
                    width: 120px;
                    margin-left:5px;
                  }
      
                  &:nth-child(7) {
                    width: 110px;
                    margin-left:5px;
                  }
      
                  &:nth-child(8) {
                    width: 110px;
                    margin-left:5px;
                  }
      
                  &:nth-child(9) {
                    width: 110px;
                    margin-left:5px;
                    text-align: left;
      
                  }
      
                  &:nth-child(10) {
                    width: 150px;
                    margin-left:5px;
                    text-align: left;
                  }
      
                }
            }
                .list-item {
                    padding:1em 0.5em;
                    width: 95%;
                    margin: 0 auto;
                    border-radius:0px;
                    border-bottom:1px solid rgba(255, 255, 255, 0.1);        
      
                  .col {
                    overflow: hidden;
                    padding-left: 0%;
      
                    //text-overflow: ellipsis;
      
                  }
      
                  .no {
                    color: #E48686;
                  }
      
                  .pid { padding: 2px 5px;
                   color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
                  }
      
                  .fid { padding: 2px 5px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
                  }
      
                  .address {    padding: 2px 5px;
                    a {
                        color: rgb(255, 146, 96);
                    }   
                    
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
                  }
      }
      }
              }
}

      @media screen and (max-width: 400px)  {
        .ant-form{ input{
    font-size:14px;
  }}
  .send-fireseed {
    .ant-form-item {
      margin: 0em auto;
      width:100% !important;
      display: flex;

    }

    .send-button {
      width: 100%;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      margin: 1em 0em;
      height: 40px;

      /* margin-left: calc(50% - 100px); */
    }

  }
        .panel-box{
        
  .panel-container{
    padding: 16px 5.9%;
    .panel-title{
      font-size:18px;
      padding: 5px 0px;
    }
    .conuser{
      margin: 0px 5px;
      text-align: center;
      line-height: 24px;
      width: 26px;
      .conimg{
           width: 18px;
            margin-left: -8px;
            margin-top: -5px;
          }
}
.describe{
  width: 100%;
  padding: 0px;
  margin: 1em auto;
  border:none;
  background: rgba(36, 27, 27, 1);
  .ant-form-item-label > label {
    font-size:14px;
  }
  .check-box{
          display: flex;
          width: 100%;
          justify-content: center;
          
          .check-btn{
            width: 100px;
            height: 30px;
            font-size:14px;
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
              margin-top: 2px;
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
}


  }
  .content2{
  display:block;
  margin: 1em auto;
  .myrecommend{
    width: 100%;
    padding: 0em;
height:100px;
border:none;
background: rgba(36, 27, 27, 1);
    .name{
      font-size:14px;
    }
    .value{
      font-size:12px;
      overflow: scroll;
    }
  }
  .myteamsize{
    border-radius:10px;
height:100px;
    width: 100%;
    padding: 0em;
    border:none;
background: rgba(36, 27, 27, 1);
    margin: 0em;
    .box-title{
      font-size: 14px;
    }
    .refer-list{
      font-size:14px;
    }
  }
}                                                     
.header-box{
  .nav-list-box{
    margin: 0.5em 0;
    .fire-nav-list{
      width: 100%;
      height: 40px;
      .nav-item{
        font-size:13px;
      }
    }
  }
}
.listheadert:last-child .list-item{
            /* border-bottom:none; */
        }
        .listheadert{
        width: 1190px;
      }
      .fire-list-box{
        overflow-x: scroll;
        border-radius:10px;
      
        .list-header {
                  padding: 20px 2.3em;
                }
      
                .list-item, .list-header {
                  justify-content: flex-start;
                  font-size:14px;
                
      
                .col {
                  font-size:14px;
                  text-align: left;
                  align-items: center;
      
                  &:nth-child(1) {
                    width: 70px;
                    margin-left:5px;
                  }
      
                  &:nth-child(2) {
                    width: 120px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(3) {
                    width:90px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(4) {
                    width: 90px;
                    text-align:center;
                    margin-left:5px;
                  }
      
                  &:nth-child(5) {
                    width: 80px;
                    margin-left:5px;
                  }
      
                  &:nth-child(6) {
                    width: 120px;
                    margin-left:5px;
                  }
      
                  &:nth-child(7) {
                    width: 110px;
                    margin-left:5px;
                  }
      
                  &:nth-child(8) {
                    width: 110px;
                    margin-left:5px;
                  }
      
                  &:nth-child(9) {
                    width: 110px;
                    margin-left:5px;
                    text-align: left;
      
                  }
      
                  &:nth-child(10) {
                    width: 150px;
                    margin-left:5px;
                    text-align: left;
                  }
      
                }
            }
                .list-item {
                    padding:1em 0.5em;
                    width: 96%;
                    margin: 0 auto;
                    border-radius:0px;
                    border-bottom:1px solid rgba(255, 255, 255, 0.1);        
      
                  .col {
                    overflow: hidden;
                    padding-left: 0%;
      
                    //text-overflow: ellipsis;
      
                  }
      
                  .no {
                    color: #E48686;
                  }
      
                  .pid { padding: 2px 5px;
                   color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
                  }
      
                  .fid { padding: 2px 5px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
                  }
      
                  .address {    padding: 2px 5px;
                    a {
                        color: rgb(255, 146, 96);
                    }   
                    
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
                  }
      }
      }
              }
}

      .pagination {
        text-align: center;
      }


    `