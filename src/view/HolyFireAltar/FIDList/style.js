import styled from "styled-components";

export default  styled.div`

@media screen and (max-width: 1950px) {
    .panel-container {
    padding:30px 4.6%;
        .header-box {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .nav-list-box {
            margin: 2em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 45px;
                width: 30%;
                margin: 0;
                .nav-item{
                  font-size:18px;
                }
            }
          }

          .search-container {
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
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

          &:nth-child(1) {
            min-width: 5%;
          }
          &:nth-child(2) {
            min-width: 5%;
          }
          &:nth-child(3) {
            min-width: 9%;
          }
          &:nth-child(4) {
            min-width: 13%;
          }
          &:nth-child(5) {
            min-width: 12%;
          }
          &:nth-child(6) {
            min-width: 8%;
          }
          &:nth-child(7) {
            min-width: 8%;
          }
          &:nth-child(8) {
            min-width: 8%;
          }
          &:nth-child(9) {
            min-width: 8%;
          }
          &:nth-child(10) {
            min-width: 8%;
          }
          &:nth-child(11) {
            min-width: 8%;
          }
          &:nth-child(12) {
            min-width: 10%;
          }
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
}
 

@media screen and (max-width: 1500px) {


    .panel-container {
    padding:30px 4.6%;
        .header-box {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .nav-list-box {
            margin: 2em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 45px;
                width: 50%;
                margin: 0;
                .nav-item{
                  font-size:16px;
                }
            }
          }

          .search-container {
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 50px;
              border: 1px solid #333333;
              padding: 2px;
              .ant-input-affix-wrapper{
                    line-height:2;
                }
              .ant-select-selector {
                background: #1F1212;
                border-radius: 8px;
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
font-size:13px;
          &:nth-child(1) {
            min-width: 4%;
          }
          &:nth-child(2) {
            min-width: 4%;
          }
          &:nth-child(3) {
            min-width: 9%;
          }
          &:nth-child(4) {
            min-width: 13%;
          }
          &:nth-child(5) {
            min-width: 12%;
          }
          &:nth-child(6) {
            min-width: 8%;
          }
          &:nth-child(7) {
            min-width: 8%;
          }
          &:nth-child(8) {
            min-width: 8%;
          }
          &:nth-child(9) {
            min-width: 8%;
          }
          &:nth-child(10) {
            min-width: 8%;
          }
          &:nth-child(11) {
            min-width: 8%;
          }
          &:nth-child(12) {
            min-width: 10%;
          }
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
}
    .pagination {
        text-align: center;
      }

    `