import styled from "styled-components";

export default styled.div`
.ant-pagination .ant-pagination-item-link {
    border-radius:5px;
}
.ant-pagination-disabled{
    border-radius:5px;

}
.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border-radius:5px;

}
.panel-container .search-container .search-box .ant-input-affix-wrapper{
    border:none;
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

    .fire-list-box {
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
        }
        .pid{
          
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
padding: 2px 5px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{
            padding: 2px 5px;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 5px;
          color:rgba(205, 158, 87, 1);
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
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

   

    .fire-list-box {
        .list-header {
            padding: 20px 2.2em;
        }
        .list-item{
            padding: 1em 0.5em;
           
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
       

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
        }
        .pid{
            padding: 2px 4px;
          text-align:center;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .fid{
            padding: 2px 4px;
            text-align:center;
          color:rgba(254, 109, 70, 1);
          background: rgba(254,109,70,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
        }
        .address{
            padding: 2px 4px;
            text-align:center;
          color:rgba(205, 158, 87, 1);
          background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
        }
}
} }

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
 

    .listheadert{
width: 1130px;
}
.listitemt{
width: 1130px;
}
.fire-list-box {
overflow-x: scroll;
  .list-header {
      padding: 20px 2em;
  }
  .list-item{
    padding: 0.5em;
    
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
        margin-right:5px;
    }
    &:nth-child(5) {
       width: 95px;
       margin-right:5px;
    }
    &:nth-child(6) {
        width:  80px;
        margin-right:5px;
    }
    &:nth-child(7) {
       width: 80px;
       margin-right:5px;
    }
    &:nth-child(8) {
       width: 80px;
       margin-right:5px;
    }
    &:nth-child(9) {
       width: 80px;
       margin-right:5px;
    }
    &:nth-child(10) {
        width: 80px;
        margin-right:5px;
    }
    &:nth-child(11) {
       width: 80px;
       margin-right:5px;
    }
    &:nth-child(12) {
        width: 80px;
        margin-right:5px;
    }
  }
}

.list-item {
padding: 1 0.5em;
        width: 96%;
        margin: 0em auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);
    .col {
      overflow: hidden;
    }
    .pid{
        text-align:center;
        
      }
      .fid{
        text-align:center;
        
      }
    }
  }
}   }


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


  .listheadert{
    width: 1120px;
}
.listitemt{
    width: 1120px;
}
  .fire-list-box {
    overflow: scroll;
      .list-header {
          padding: 20px 2.2em;
      }
      .list-item{
        padding: 0.5em;
        
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
           width: 90px;
           margin-right:5px;
        }
        &:nth-child(4) {
            width: 110px;
            margin-right:5px;
        }
        &:nth-child(5) {
           width: 95px;
           margin-right:5px;
        }
        &:nth-child(6) {
            width:  80px;
            margin-right:5px;
        }
        &:nth-child(7) {
           width: 80px;
           margin-right:5px;
        }
        &:nth-child(8) {
           width: 80px;
           margin-right:5px;
        }
        &:nth-child(9) {
           width: 80px;
           margin-right:5px;
        }
        &:nth-child(10) {
            width: 80px;
            margin-right:5px;
        }
        &:nth-child(11) {
           width: 80px;
           margin-right:5px;
        }
        &:nth-child(12) {
            width: 80px;
            margin-right:5px;
        }
      }
    }

  .list-item {
    padding: 1 0.5em;
            width: 96%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
        .col {
          overflow: hidden;
        }
        .pid{
            text-align:center;
            
          }
          .fid{
            text-align:center;
            
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

.listheadert{
  width: 1100px;
}
.listitemt{
  width: 1100px;
}
.fire-list-box {
  overflow: scroll;
    .list-header {
        padding: 20px 2.2em;
    }
    .list-item{
      padding: 0.5em;
      
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
         width: 90px;
         margin-right:5px;
      }
      &:nth-child(4) {
          width: 110px;
          margin-right:5px;
      }
      &:nth-child(5) {
         width: 95px;
         margin-right:5px;
      }
      &:nth-child(6) {
          width:  80px;
          margin-right:5px;
      }
      &:nth-child(7) {
         width: 80px;
         margin-right:5px;
      }
      &:nth-child(8) {
         width: 80px;
         margin-right:5px;
      }
      &:nth-child(9) {
         width: 80px;
         margin-right:5px;
      }
      &:nth-child(10) {
          width: 80px;
          margin-right:5px;
      }
      &:nth-child(11) {
         width: 80px;
         margin-right:5px;
      }
      &:nth-child(12) {
          width: 80px;
          margin-right:5px;
      }
    }
  }

.list-item {
  padding: 1 0.5em;
          width: 96%;
          margin: 0em auto;
          border-radius:0px;
          border-bottom:1px solid rgba(255, 255, 255, 0.1);
      .col {
        overflow: hidden;
      }
      .pid{
          text-align:center;
          
        }
        .fid{
          text-align:center;
          
        }
      }
    }
}

}
    .pagination {
        text-align: center;
      }

    `