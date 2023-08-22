import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* pc style */
  @media screen and (min-width: 1950px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 2em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
        &:nth-child(1) {
          width:10%;
         margin-left:10px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
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
    .assets-box{
      padding-top: 1em;
      align-items: center;
      display: flex;
      .asset{
        font-size: 30px;
        margin-right: 20px;
      }
    }

    .userinfo-box {
      width: 90%;
      margin: 0 auto;


      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          display: flex;

          .header-icon {
            position: relative;

            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
            }

            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

   
        }

    

     
      }

    }

}
}
  }

  @media screen and (max-width: 1950px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 2em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
        &:nth-child(1) {
          width:10%;
         margin-left:10px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
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
    .assets-box{
      padding-top: 1em;
      align-items: center;
      display: flex;
      .asset{
        font-size: 30px;
        margin-right: 20px;
      }
    }

    .userinfo-box {
      width: 90%;
      margin: 0 auto;


      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          display: flex;

          .header-icon {
            position: relative;

            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
            }

            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

   
        }

    

     
      }

    }

}
}
  }


  /* mobile style */
  @media screen and (max-width: 1500px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
    
    .fire-list-box {
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 1.5em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
        &:nth-child(1) {
          width:10%;
         margin-left:5px;
        }

        &:nth-child(2) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 17%;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 15%;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 15%;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 15%;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
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
    .assets-box{
      padding-top: 1em;
      align-items: center;
      display: flex;
      .asset{
        font-size: 30px;
        margin-right: 20px;
      }
    }

    .userinfo-box {
      width: 90%;
      margin: 0 auto;


      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          display: flex;

          .header-icon {
            position: relative;

            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
            }

            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

   
        }

    

     
      }

    }

}
}
  }


  @media screen and (max-width: 450px) {
    .panel-box{
      
      .panel-container{  
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
 
    .white-list{
        padding: 1.5em 0px;
        .listheadert{
            width: 800px;
        }
    .fire-list-box {
        overflow: scroll;
.list-item:last-child{
border-bottom:none!important;


}
      .flex-box11 {
        padding: 20px 1.5em;
      }


      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
        &:nth-child(1) {
          width:80px;
         margin-left:5px;
        }

        &:nth-child(2) {
          width: 110px;
          margin-left:10px;
        }

        &:nth-child(3) {
          width: 160px;
          margin-left:10px;
        }

        &:nth-child(4) {
          width: 100px;
          margin-left:10px;
        }
        &:nth-child(5) {
          width: 100px;
          margin-left:10px;
        }

        &:nth-child(6) {
          width: 100px;
          margin-left:10px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
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
    .assets-box{
      padding-top: 1em;
      align-items: center;
      display: flex;
      .asset{
        font-size: 30px;
        margin-right: 20px;
      }
    }

    .userinfo-box {
      width: 90%;
      margin: 0 auto;


      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          display: flex;

          .header-icon {
            position: relative;

            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
            }

            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

   
        }

    

     
      }

    }

}
}
  }

`

