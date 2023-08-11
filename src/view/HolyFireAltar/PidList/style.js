import styled from "styled-components";

export default styled.div`
 @media screen and (min-width: 1950px) {


.panel-container {
   padding:30px 4.6%;
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
          border-radius: 45px;
          border: 1px solid #333333;
          padding: 2px;
            height: 45px;
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
  }


  .fire-list-box {
    .list-item{
            padding: 0.5em ;
        }
    .list-item, .list-header {
      justify-content: flex-start;
      /* padding: 0.5em 2.5em 0.5em 2em; */
      
    }
    .list-header{
            padding: 20px 3em;
        }

        .col {
          text-align: left;

          &:nth-child(1) {
            width: 11%;
            margin-right:10px;
            
          }

          &:nth-child(2) {
            width: 11%;
            margin-right:10px;
           
          }

          &:nth-child(3) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(4) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(5) {
            width: 14%;
            margin-right:10px;
          }

          &:nth-child(6) {
            width: 14%;
            margin-right:10px;
          }

          &:nth-child(7) {
            width: 13%;
            margin-right:10px;
          }

          &:nth-child(8) {
            width: 13%;
            margin-right:10px;
          }

          /* &:nth-child(9) {
            width: 9.5%;
            text-align: center;

          }

          &:nth-child(10) {
            width: 10%;
            text-align: center;
          }

          &:nth-child(11) {
            width: 9%;
          } */
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
          .id{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
      .address {
        a{
          color:rgba(205, 158, 87, 1);
        }
            
           
       
border: 1px solid rgba(205,158,87,0.5);
        background: rgba(205, 158, 87, 0.20);
        text-align:center;
        border-radius:25px;
       
      }
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
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
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
      }


      .fire-list-box {
        .list-item{
            padding: 0.5em ;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          
        }
        .list-header{
            padding: 20px 3em;
        }

        .col {
          text-align: left;

          &:nth-child(1) {
            width: 11%;
            margin-right:10px;
            
          }

          &:nth-child(2) {
            width: 11%;
            margin-right:10px;
           
          }

          &:nth-child(3) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(4) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(5) {
            width: 14%;
            margin-right:10px;
          }

          &:nth-child(6) {
            width: 14%;
            margin-right:10px;
          }

          &:nth-child(7) {
            width: 13%;
            margin-right:10px;
          }

          &:nth-child(8) {
            width: 13%;
            margin-right:10px;
          }


          /* &:nth-child(9) {
            width: 9.5%;
            text-align: center;

          }

          &:nth-child(10) {
            width: 10%;
            text-align: center;
          }

          &:nth-child(11) {
            width: 9%;
          } */
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
          }
          .id{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .address {
            a{
              color:rgba(205, 158, 87, 1);
            }
                
               
           
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
           
          }
        }
      }
 }
      

      .pagination {
        text-align: center;
      }

      /* mobile style */
      @media screen and (max-width: 1500px) {
        .panel-container {
       padding:30px 4.6%;
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
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
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
      }


      .fire-list-box {
        .list-item{
            padding: 0.5em ;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          .list-header{
            padding: 20px 2em;
          }
        }

        .col {
          text-align: left;
          font-size:13px;
          &:nth-child(1) {
            width: 9%;
            margin-right:5px;
          }

          &:nth-child(2) {
            width: 9%;
            margin-right:5px;
           
          }

          &:nth-child(3) {
            width: 12%;
            margin-right:5px;
          }

          &:nth-child(4) {
            width: 15%;
            margin-right:5px;
          }

          &:nth-child(5) {
            width: 13%;
            margin-right:5px;
          }

          &:nth-child(6) {
            width: 15%;
            margin-right:5px;
          }

          &:nth-child(7) {
            width: 12%;
            margin-right:5px;
          }

          &:nth-child(8) {
            width: 13%;
            margin-right:5px;
          }

          /* &:nth-child(9) {
            width: 9.5%;
            text-align: center;

          }

          &:nth-child(10) {
            width: 10%;
            text-align: center;
          }

          &:nth-child(11) {
            width: 9%;
          } */
        }

        .list-item {
            padding: 0.5 0em;
            width: 91%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;

          }
          .id{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .address {
            a{
               color: rgba(205, 158, 87, 1);
            } 
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
           
          }
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
            margin: 1em 0;
            display: block;
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
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
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
      }


      .fire-list-box {
        overflow: scroll;
        .list-item{
            padding: 0.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          width: 100%;
        }
        .list-header {
            padding: 20px 3em;
        }
        .col {
        text-align: left;
font-size:12px;
        &:nth-child(1) {
           width:  20%;
           margin-right:5px;
        }
        &:nth-child(2) {
           width: 20%;
           margin-right:5px;
        }
        &:nth-child(3) {
           width: 30%;
           margin-right:5px;
        }
        &:nth-child(4) {
            width: 30%;
            margin-right:5px;
        }
        &:nth-child(5) {
           width: 30%;
           margin-right:5px;
        }
        &:nth-child(6) {
            width: 32%;
            margin-right:5px;
        }
        &:nth-child(7) {
           width: 28%;
           margin-right:5px;
        }
        &:nth-child(8) {
           width: 26%;
           margin-right:5px;
        }
        /* &:nth-child(9) {
           width: 20%;
        }
        &:nth-child(10) {
            width: 20%;
        } */
        /* &:nth-child(11) {
           width: 20%;
        }
        &:nth-child(12) {
            width: 25%;
        } */
      }

        .list-item {
            padding: 0.5 0em;
            width: 83%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
           
            //text-overflow: ellipsis;

          }
          .id{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .address {
            a{
               color: rgba(205, 158, 87, 1);
            }   
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            border-radius:25px;
           
          }
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
            margin: 1em 0;
            display: block;
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
            margin-bottom:1em;
            .search-box {
              display: flex;
              align-items: center;
              background: #3F3535;
              border-radius: 45px;
              border: 1px solid #333333;
              padding: 2px;
                height: 45px;
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
      }


      .fire-list-box {
        overflow: scroll;
        .list-item{
            padding: 0.5em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          width: 100%;
        }
        .list-header {
            padding: 20px 3em;
        }
        .col {
        text-align: left;
font-size:12px;
        &:nth-child(1) {
           width:  22%;
           margin-right:5px;
        }
        &:nth-child(2) {
           width: 22%;
           margin-right:5px;
        }
        &:nth-child(3) {
           width: 32%;
           margin-right:5px;
        }
        &:nth-child(4) {
            width: 35%;
            margin-right:5px;
        }
        &:nth-child(5) {
           width: 32%;
           margin-right:5px;
        }
        &:nth-child(6) {
            width: 36%;
            margin-right:5px;
        }
        &:nth-child(7) {
           width: 30%;
           margin-right:5px;
        }
        &:nth-child(8) {
           width: 30%;
           margin-right:5px;
        }
        /* &:nth-child(9) {
           width: 20%;
        }
        &:nth-child(10) {
            width: 20%;
        } */
        /* &:nth-child(11) {
           width: 20%;
        }
        &:nth-child(12) {
            width: 25%;
        } */
      }

        .list-item {
            padding: 0.5 0em;
            width: 81%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
          .col {
            overflow: hidden;
           
            //text-overflow: ellipsis;

          }
          .id{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .fid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            text-align:center;
            border-radius:25px;
          }
          .address {
            a{
               color: rgba(205, 158, 87, 1);
            }   
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            border-radius:25px;
           
          }
        }
      }
    }
    `