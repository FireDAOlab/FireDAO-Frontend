import styled from "styled-components";

export default styled.div`

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
    border-radius:5px;

}
.fire-list-box{
    margin: 1em 0em!important;
}
 @media screen and (min-width: 1950px) {

  
.panel-container {
   padding:30px 4.6%;
    .header-box {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 80px;
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
        height: 50px;
            margin: 1.5em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 50px;
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



  .fire-list-box {
    margin: 1em 0em;
    .list-header {
            padding: 20px 2.2em;
        }
    .list-item, .list-header {
      justify-content: flex-start;
      /* padding: 0.5em 2.5em 0.5em 2em; */
      


        .col {
          text-align: left;
          font-size:15px;
          &:nth-child(1) {
            width: 9%;
            margin-right:20px;
            text-align:center;
          }

          &:nth-child(2) {
            width: 9%;
            margin-right:20px;
            text-align:center;
          }

          &:nth-child(3) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(4) {
            width: 13%;
            margin-right:10px;
            text-align:center;
          }

          &:nth-child(5) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(6) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(7) {
            width: 12%;
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
    }
        .listitemt:last-child .list-item{
            border-bottom:none;
        }
        .list-item {
            padding: 1em 0.5em;
        
        width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

          .col {
            overflow: hidden;
            padding-left: 0%;
            
            //text-overflow: ellipsis;

          }
          .pid{
        text-align:center; 
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 5px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{ text-align:center; 
            padding: 2px 5px;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 5px;
            text-align:center; 
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
    color:rgba(205, 158, 87, 1)
}
        }
    }
  }
}
 }
 @media screen and (max-width: 1950px) {


    .panel-container {
       padding:30px 4.6%;
        .header-box {
            height: 80px;
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
            height: 50px;
            margin: 1.5em 0;
            display: flex;
            width: 90%;
            .fire-nav-list{
                height: 50px;
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
        margin: 1em 0em;
    .list-header {
            padding: 20px 2.2em;
        }
    .list-item, .list-header {
      justify-content: flex-start;
      /* padding: 0.5em 2.5em 0.5em 2em; */
      


        .col {
          text-align: left;
          font-size:15px;
          &:nth-child(1) {
            width: 9%;
            margin-right:20px;
            text-align:center;
          }

          &:nth-child(2) {
            width: 9%;
            margin-right:20px;
            text-align:center;
          }

          &:nth-child(3) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(4) {
            width: 13%;
            margin-right:10px;
            text-align:center;
          }

          &:nth-child(5) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(6) {
            width: 12%;
            margin-right:10px;
          }

          &:nth-child(7) {
            width: 12%;
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
    }
        .listitemt:last-child .list-item{
            border-bottom:none;
        }
        .list-item {
            padding: 1em 0.5em;
        
        width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

          .col {
            overflow: hidden;
            padding-left: 0%;
            
            //text-overflow: ellipsis;

          }
          .pid{
        text-align:center; 
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 5px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{ text-align:center; 
            padding: 2px 5px;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 5px;
            text-align:center; 
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
    color:rgba(205, 158, 87, 1)
}
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
          height: 80px;
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
            margin: 1.5em 0;
            display: flex;
            width: 70%;
            height: 45px;
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

      .listheadert{
width: 900px;
}
.listitemt{
width: 900px;
}
.fire-list-box {
    margin: 1em 0em;
overflow-x: scroll;
  .list-header {
      padding: 20px 2em;
  }
  .list-item, .list-header {
    justify-content: flex-start;
    /* padding: 0.5em 2.5em 0.5em 2em; */


  .col {
    text-align: left;
font-size:14px;
&:nth-child(1) {
       width:  70px;
       margin-right:5px;
    }
    &:nth-child(2) {
        width:  70px;
       margin-right:5px;
    }
    &:nth-child(3) {
       width: 100px;
       margin-right:5px;
    }
    &:nth-child(4) {
        width: 120px;
        margin-right:10px;
    }
    &:nth-child(5) {
       width: 100px;
       margin-right:5px;
    }
    &:nth-child(6) {
        width:  110px;
        margin-right:5px;
    }
    &:nth-child(7) {
       width: 100px;
       margin-right:5px;
    }
    &:nth-child(8) {
       width: 100px;
       margin-right:5px;
    }
    
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
            padding: 1 0.5em;
        width: 95%;
        margin: 0em auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);
        .col {
      overflow: hidden;
    }
    .pid{
        text-align:center; 
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 5px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{ text-align:center; 
            padding: 2px 5px;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 5px;
            text-align:center; 
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
    color:rgba(205, 158, 87, 1)
}
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
          height: 100px;
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
            height: 40px;
            .fire-nav-list{
                height: 40px;
                width: 60%;
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

.listheadert{
    width: 850px;
}
.listitemt{
    width: 850px;
}
      .fire-list-box {
        margin: 1em 0em;
        overflow: scroll;
        .list-header {
        padding: 20px 2em;
    }
        
   
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          width: 100%;
        
        .col {
        text-align: left;
        font-size:14px;
        &:nth-child(1) {
           width:  70px;
           margin-right:5px;
        }
        &:nth-child(2) {
            width:  70px;
           margin-right:5px;
        }
        &:nth-child(3) {
           width: 100px;
           margin-right:5px;
        }
        &:nth-child(4) {
            width: 115px;
            margin-right:5px;
        }
        &:nth-child(5) {
           width: 110px;
           margin-right:5px;
        }
        &:nth-child(6) {
            width:  120px;
            margin-right:5px;
        }
        &:nth-child(7) {
           width: 100px;
           margin-right:5px;
        }
        &:nth-child(8) {
           width: 105px;
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
    }
        .list-item {
            padding: 1 0.5em;
            width: 95%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            .col {
          overflow: hidden;
        }
        .pid{
        text-align:center; 
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 5px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{ text-align:center; 
            padding: 2px 5px;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 5px;
            text-align:center; 
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
    color:rgba(205, 158, 87, 1)
}
        }
        }
      }
    }

 
    `