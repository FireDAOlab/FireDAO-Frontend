import styled from "styled-components";

export default  styled.div`

@media screen and (min-width: 1950px) {
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
            padding: 20px 3em;
        }
        .list-item{
            padding: 0.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;
          font-size:15px;
          &:nth-child(1) {
            width: 8%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(2) {
            width: 8%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(3) {
            width: 9%;
            margin-right:5px;
          }
          &:nth-child(4) {
            width: 12%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(5) {
            width: 10%;
            margin-right:5px;
          }
          &:nth-child(6) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(7) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(8) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(9) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(10) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(11) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(12) {
            width: 9%;
            margin-right:5px;
          }
        }
    }
    .list-item {
        padding: 0.5 0em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
        }
        .pid{
          
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{
          
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
          
          color:rgba(205, 158, 87, 1);
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
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
            width: 4%;
          }
          &:nth-child(2) {
            width: 4%;
          }
          &:nth-child(3) {
            width: 9%;
          }
          &:nth-child(4) {
            width: 13%;
          }
          &:nth-child(5) {
            width: 12%;
          }
          &:nth-child(6) {
            width: 8%;
          }
          &:nth-child(7) {
            width: 8%;
          }
          &:nth-child(8) {
            width: 8%;
          }
          &:nth-child(9) {
            width: 8%;
          }
          &:nth-child(10) {
            width: 8%;
          }
          &:nth-child(11) {
            width: 8%;
          }
          &:nth-child(12) {
            width: 10%;
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
            padding: 20px 3em;
        }
        .list-item{
            padding: 0.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;
          font-size:15px;
          &:nth-child(1) {
            width: 8%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(2) {
            width: 8%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(3) {
            width: 9%;
            margin-right:5px;
          }
          &:nth-child(4) {
            width: 12%;
            margin-right:5px;
            text-align:center;
          }
          &:nth-child(5) {
            width: 10%;
            margin-right:5px;
          }
          &:nth-child(6) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(7) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(8) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(9) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(10) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(11) {
            width: 7%;
            margin-right:5px;
          }
          &:nth-child(12) {
            width: 9%;
            margin-right:5px;
          }
        }
    }
    .list-item {
        padding: 0.5 0em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
        }
        .pid{
          
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{
          
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
          
          color:rgba(205, 158, 87, 1);
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
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
            padding: 20px 2em;
        }
        .list-item{
            padding: 0.5em 0.2em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }

        .col {
          text-align: left;
font-size:11px;
          &:nth-child(1) {
            width: 5%;
            margin-right:2px;
          }
          &:nth-child(2) {
            width: 5%;
            margin-right:2px;
          }
          &:nth-child(3) {
            width: 9%;
            margin-right:2px;
          }
          &:nth-child(4) {
            width: 13%;
            margin-right:2px;
          }
          &:nth-child(5) {
            width: 11%;
            margin-right:2px;
          }
          &:nth-child(6) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(7) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(8) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(9) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(10) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(11) {
            width: 8%;
            margin-right:2px;
          }
          &:nth-child(12) {
            width: 10%;
            margin-right:2px;
          }
        }
    }
    .list-item {
        padding: 0.5 0em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
            padding-left: 0%;
            //text-overflow: ellipsis;

          }
        }
}

@media screen and (max-width: 450px) {


  .panel-container {
  padding:30px 4.6%;
      .header-box {
        display: block;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }

      .nav-list-box {
          margin:1em 0;
          display: flex;
          width: 100%;
          .fire-nav-list{
            height: 40px;
            width: 66%;
              margin: 0;
              .nav-item{
                font-size:14px;
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
            margin: 1em 0;
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
    overflow: scroll;
      .list-header {
          padding: 20px 2.5em;
      }
      .list-item{
        padding: 0.5em 0.2em;
      }
      .list-item, .list-header {
        justify-content: flex-start;
        /* padding: 0.5em 2.5em 0.5em 2em; */
      }

      .col {
        text-align: left;
font-size:11px;
        &:nth-child(1) {
           width:  15%;
           margin-right:5px;
        }
        &:nth-child(2) {
           width: 15%;
           margin-right:5px;
        }
        &:nth-child(3) {
           width: 21%;
           margin-right:5px;
        }
        &:nth-child(4) {
            width: 30%;
            margin-right:5px;
        }
        &:nth-child(5) {
           width: 28%;
           margin-right:5px;
        }
        &:nth-child(6) {
            width: 20%;
            margin-right:5px;
        }
        &:nth-child(7) {
           width: 20%;
           margin-right:5px;
        }
        &:nth-child(8) {
           width: 20%;
           margin-right:5px;
        }
        &:nth-child(9) {
           width: 20%;
           margin-right:5px;
        }
        &:nth-child(10) {
            width: 20%;
            margin-right:5px;
        }
        &:nth-child(11) {
           width: 20%;
           margin-right:5px;
        }
        &:nth-child(12) {
            width: 27%;
            margin-right:5px;
        }
      }
  }
  .list-item {
    padding: 0.5 0em;
            width: 83%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
        .col {
          overflow: hidden;
          padding-left: 0%;
          //text-overflow: ellipsis;

        }
      }
}

@media screen and (max-width: 400px) {


.panel-container {
padding:30px 4.6%;
    .header-box {
      display: block;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .nav-list-box {
        margin:1em 0;
        display: flex;
        width: 100%;
        .fire-nav-list{
          height: 40px;
          width: 66%;
            margin: 0;
            .nav-item{
              font-size:12px;
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
          margin: 1em 0;
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
  overflow: scroll;
    .list-header {
        padding: 20px 2.5em;
    }
    .list-item{
        padding: 0.5em 0.2em;
    }
    .list-item, .list-header {
      display: flex;
      justify-items: flex-start;
      /* padding: 0.5em 2.5em 0.5em 2em; */
    }

    .col {
      text-align: left;
font-size:11px;
      &:nth-child(1) {
         width:  20%;
          margin-right:2px;
      }
      &:nth-child(2) {
         width: 20%;
         margin-right:2px;
      }
      &:nth-child(3) {
         width: 25%;
         margin-right:2px;
      }
      &:nth-child(4) {
          width: 35%;
          margin-right:2px;
      }
      &:nth-child(5) {
         width: 32%;
         margin-right:2px;
      }
      &:nth-child(6) {
          width: 23%;
           margin-right:2px;
      }
      &:nth-child(7) {
         width: 22%;
          margin-right:2px;
      }
      &:nth-child(8) {
         width: 22%;
          margin-right:2px;
      }
      &:nth-child(9) {
         width: 22%;
          margin-right:2px;
      }
      &:nth-child(10) {
          width: 22%;
           margin-right:2px;
      }
      &:nth-child(11) {
         width: 22%;
          margin-right:2px;
      }
      &:nth-child(12) {
          width: 28%;
           margin-right:2px;
      }
    }
}
.list-item {
    padding: 0.5 0em;
            width: 81%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
      .col {
        overflow: hidden;
        padding-left: 0%;
        //text-overflow: ellipsis;

      }
    }
}
    .pagination {
        text-align: center;
      }

    `