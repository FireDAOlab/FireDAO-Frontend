import styled from "styled-components";

export  default   styled.div`


@media screen and (max-width: 1950px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
    .list-header{
        text-align:left;
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
          &:nth-child(1){
            width:10%;
          }
          &:nth-child(2){
            width: 16%;
          }
          &:nth-child(3){
            width: 17%;
          }
          &:nth-child(4){
            width: 18%;
          }
          &:nth-child(5){
            width:15%;
          }
          &:nth-child(6){
            width:15%;
          }
          &:nth-child(7){
            width: 9%;
          }
        }
        .list-header{
          display: flex;
          justify-content: flex-start;
          font-size: 18px;
          font-weight: bold;
          padding: 20px 1.5em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-start;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    }

    .fire-list-box{
        margin: 1em 0em;
        text-align:left;

        .list-header1 {
            font-size: 18px;
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:22%;
      }
      &:nth-child(2){
        width: 22%;
      }
      &:nth-child(3){
        width: 22%;
      }
      &:nth-child(4){
        width: 22%;
      }
     
    }
}  
        .list-item, .list-header1 {
          justify-content: flex-start;
        }

}
.disabox{
  display:flex;
}
    .soulaccount{
    margin: 10px 0;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
    }
    .value{
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .fidscore{

margin: 10px 50px;
display: flex;
align-items: center;
.name{
  font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
}
.score{
  text-align:center;
  margin-left: 20px;
  font-size: 15px;
  line-height:30px;
  width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
}
}
}


@media screen and (max-width: 1500px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
    .list-header{
        text-align:left;
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:13px;
          &:nth-child(1){
            width:10%;
          }
          &:nth-child(2){
            width: 16%;
          }
          &:nth-child(3){
            width: 17%;
          }
          &:nth-child(4){
            width: 18%;
          }
          &:nth-child(5){
            width:15%;
          }
          &:nth-child(6){
            width:15%;
          }
          &:nth-child(7){
            width: 9%;
          }
        }
        .list-header{
          display: flex;
          justify-content: flex-start;
          font-size: 13px;
          font-weight: bold;
          padding: 20px 1.5em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-start;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    }

    .fire-list-box{
        margin: 1em 0em;
        text-align:left;

        .list-header1 {
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:70px;
        width:22%;
      }
      &:nth-child(2){
        width: 22%;
      }
      &:nth-child(3){
        width: 22%;
      }
      &:nth-child(4){
        width: 22%;
      }
     
    }
}  
        .list-item, .list-header1 {
          justify-content: flex-start;
        }

}

.disabox{
  display:flex;
}
    .soulaccount{
    margin: 10px 0;
    display: flex;
    align-items: center;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
    }
    .value{
        font-size:14px;
      text-align:center;
      margin-left: 20px;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .fidscore{

margin: 10px 50px;
display: flex;
align-items: center;
.name{
  font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
}
.score{
  text-align:center;
  margin-left: 20px;
  font-size: 14px;
  line-height:30px;
  width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
}
}
}

@media screen and (max-width: 450px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
  overflow: scroll;
    .list-header{
        text-align:left;
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:13px;
          &:nth-child(1){
            width:15%;
          }
          &:nth-child(2){
            width: 30%;
          }
          &:nth-child(3){
            width: 33%;
          }
          &:nth-child(4){
            width: 34%;
          }
          &:nth-child(5){
            width:28%;
          }
          &:nth-child(6){
            width:25%;
          }
          &:nth-child(7){
            width: 15%;
          }
        }
        .list-header{
          display: flex;
          justify-content: flex-start;
          font-size: 13px;
          font-weight: bold;
          padding: 20px 1.5em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: flex-start;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    }

    .fire-list-box{
        margin: 1em 0em;
        text-align:left;

        .list-header1 {
    font-weight: bold;
    color: #8A8080;
            padding: 20px 1em;
    .col{
        text-align:left;

      &:nth-child(1){
        margin-left:30px;
        width:17%;
      }
      &:nth-child(2){
        width: 28%;
      }
      &:nth-child(3){
        width: 23%;
      }
      &:nth-child(4){
        width: 22%;
      }
     
    }
}  
        .list-item, .list-header1 {
          justify-content: flex-start;
        }

}
.disabox{
  display:block;
}
    .soulaccount{
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    .name{
      font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
    }
    .value{
        font-size:14px;
      text-align:center;
      line-height:30px;
      width: 160px;
height: 30px;
background: rgba(205,158,87,0.1);
border-radius: 50px ;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
    }
  }
  .fidscore{

margin: 10px 0px;
display: flex;
justify-content:space-between;
align-items: center;
.name{
  font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
line-height: 21px;
font-size:14px;
}
.score{
  text-align:center;
  margin-left: 20px;
  font-size: 14px;
  line-height:30px;
  width: 160px;
height: 30px;
background: rgba(254,109,70,0.1);
border-radius: 50px ;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
}
}
}
    
`