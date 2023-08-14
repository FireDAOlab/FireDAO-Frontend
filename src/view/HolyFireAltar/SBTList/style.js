import styled from "styled-components";

export  default   styled.div`

@media screen and (min-width: 1950px) {
    .panel-container {
    padding:30px 11.7%;
    .fire-list-box:last-child .list-item{
            /* border-bottom:none; */
        }

.fire-list-box{
    .list-header{
            padding: 20px 2.3em;
        }
        .list-item{
            padding: 0.5em;
        }
        
        .list-item, .list-header {
          justify-content: flex-start;
          width: 100%;
          font-size:16px;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            text-align:left;
            font-size:16px;
          &:nth-child(1){
            width:10%;
            margin-right:5px;
          }
          &:nth-child(2){
            width: 16%;
            margin-right:5px;
          }
          &:nth-child(3){
            width: 17%;
            margin-right:5px;
          }
          &:nth-child(4){
            width: 18%;
            margin-right:5px;
          }
          &:nth-child(5){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(6){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(7){
            width: 9%;
            margin-right:5px;
          }
        }
     
        .list-item{
            padding: 1em  0.5em;
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

          display: flex;
          justify-content: flex-start;
        }
      }
   

    .sbt11{
        margin: 1em 0em;
        text-align:left;
       
       
        .flex-box2 {
            
            padding: 20px 1em;
        } 
        .flex-nn{
            padding: 0.5em;
        }
        .flex-nn, .flex-box2 {
          justify-content: flex-start;
          font-size: 16px;
       
    .col{
        text-align:left;
        font-size: 16px;
      &:nth-child(1){
       
        width:22%;
         margin-left:5px;
      }
      &:nth-child(2){
        width: 22%;
        margin-left:50px;
      }
      &:nth-child(3){
        width: 22%;
        margin-left:50px;
      }
      &:nth-child(4){
        width: 15%;
        margin-left:50px;
      }
     
    }
}
.flex-nn{
    padding: 1em  0.5em;
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            display: flex;
          justify-content: flex-start;
          .col {
            overflow: hidden;
            padding-left: 0%;
            
            //text-overflow: ellipsis;

          }
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
      color: rgba(205, 158, 87, 1);
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
  color: rgba(254, 109, 70, 1);
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
}
@media screen and (max-width: 1950px) {
    .panel-container {
    padding:30px 11.7%;
.fire-list-box{
    .list-header{
            padding: 20px 2.2em;
        }
        .list-item{
            padding: 0.5em;
        }
        
        .list-item, .list-header {
          justify-content: flex-start;
          width: 100%;
          font-size:16px;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            text-align:left;
            font-size:16px;
          &:nth-child(1){
            width:10%;
            margin-right:5px;
          }
          &:nth-child(2){
            width: 16%;
            margin-right:5px;
          }
          &:nth-child(3){
            width: 17%;
            margin-right:5px;
          }
          &:nth-child(4){
            width: 18%;
            margin-right:5px;
          }
          &:nth-child(5){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(6){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(7){
            width: 9%;
            margin-right:5px;
          }
        }
     
        .list-item{
            padding: 0.5 0em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

          display: flex;
          justify-content: flex-start;
          border-radius: 10px;
        }
      }

    .sbt11{
        margin: 1em 0em;
        text-align:left;
       
       
        .flex-box2 {
            
            padding: 20px 1em;
        } 
        .flex-nn{
            padding: 0.5em;
        }
        .flex-nn, .flex-box2 {
          justify-content: flex-start;
          font-size: 16px;
       
    .col{
        text-align:left;
        font-size: 16px;
      &:nth-child(1){
       
        width:23%;
         margin-left:40px;
      }
      &:nth-child(2){
        width: 23%;
        margin-left:10px;
      }
      &:nth-child(3){
        width: 23%;
        margin-left:10px;
      }
      &:nth-child(4){
        width: 23%;
        margin-left:10px;
      }
     
    }
}
.flex-nn{
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
      color: rgba(205, 158, 87, 1);
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
   color: rgba(254, 109, 70, 1);

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

}

@media screen and (max-width: 1500px) {
    .panel-container {
    padding:30px 11.7%;
.fire-list-box{
    .list-header{
            padding: 20px 2.5em;
        }
        .list-item{
            padding: 0.5em;
        }
       
        .list-item, .list-header {
          justify-content: flex-start;
          width: 100%;
          font-size:16px;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:14px;
          &:nth-child(1){
            width:10%;
            margin-right:5px;
          }
          &:nth-child(2){
            width: 16%;
            margin-right:5px;
          }
          &:nth-child(3){
            width: 17%;
            margin-right:5px;
          }
          &:nth-child(4){
            width: 18%;
            margin-right:5px;
          }
          &:nth-child(5){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(6){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(7){
            width: 9%;
            margin-right:5px;
          }
        }
       
        .list-item{
            padding: 0.5 0em;
            width: 91%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            .col {
            overflow: hidden;

          }
        }
      }
 

   
    .sbt11{
        margin: 1em 0em;
        text-align:left;
       
       
        .flex-box2 {
            
            padding: 20px 1em;
        } 
        .flex-nn{
            padding: 0.5em;
        }
        .flex-nn, .flex-box2 {
          justify-content: flex-start;
          font-size: 14px;
       
    .col{
        text-align:left;
        font-size: 14px;
      &:nth-child(1){
       
        width:23%;
         margin-left:40px;
      }
      &:nth-child(2){
        width: 23%;
        margin-left:10px;
      }
      &:nth-child(3){
        width: 23%;
        margin-left:10px;
      }
      &:nth-child(4){
        width: 23%;
        margin-left:10px;
      }
     
    }
}
.flex-nn{
            padding: 0.5 0em;
            width: 91%;
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
      color: rgba(205, 158, 87, 1);
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
  color: rgba(254, 109, 70, 1);

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
}

@media screen and (max-width: 450px) {
    .panel-container {
    padding:30px 4.6%;
    .listheadert{
            width: 640px;
        }
.fire-list-box{
    overflow:scroll;
    .list-header{
            padding: 20px 2.5em;
        }
        .list-item{
            padding: 0.5em;
        }
        
        .list-item, .list-header {
          justify-content: flex-start;
          width: 100%;
          font-size:12px;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:12px;
      
          &:nth-child(1){
            width:60px;
            margin-right:5px;
          }
          &:nth-child(2){
            width: 90px;
            margin-right:5px;
          }
          &:nth-child(3){
            width: 95px;
            margin-right:5px;
          }
          &:nth-child(4){
            width: 100px;
            margin-right:5px;
          }
          &:nth-child(5){
            width:80px;
            margin-right:5px;
          }
          &:nth-child(6){
            width:80px;
            margin-right:5px;
          }
          &:nth-child(7){
            width: 80px;
            margin-right:5px;
          }
        }
       
        .list-item{
          padding: 0.5em 0em;
          display: flex;
          justify-content: flex-start;
          width: 91%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
       

        }
      }
 
    .sbt11{
        margin: 1em 0em;
        text-align:left;
       
       
        .flex-box2 {
            
            padding: 20px 1em;
        } 
        .flex-nn{
            padding: 0.5em;
        }
        .flex-nn, .flex-box2 {
          justify-content: flex-start;
          font-size: 12px;
       
    .col{
        text-align:left;
        font-size: 12px;
      &:nth-child(1){
       
        width:22%;
         margin-left:10px;
      }
      &:nth-child(2){
        width: 22%;
        margin-left:10px;
      }
      &:nth-child(3){
        width: 22%;
        margin-left:10px;
      }
      &:nth-child(4){
        width: 22%;
        margin-left:10px;
      }
     
    }
}
.flex-nn{
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
      color: rgba(205, 158, 87, 1);
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
    color: rgba(254, 109, 70, 1);

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
}

@media screen and (max-width: 400px) {
    .panel-container {
    padding:30px 4.6%;
.fire-list-box{
    overflow:scroll;
    .list-header{
            padding: 20px 2.5em;
        }
        .list-item{
            padding: 0.5em;
        }
        
        .list-item, .list-header {
          justify-content: flex-start;
          width: 100%;
          font-size:12px;
          /* padding: 0.5em 2.5em 0.5em 2em; */
        }
        margin: 1em 0em;
        .col{
            font-size:12px;
      
          &:nth-child(1){
            width:15%;
            margin-right:5px;
          }
          &:nth-child(2){
            width: 30%;
            margin-right:5px;
          }
          &:nth-child(3){
            width: 33%;
            margin-right:5px;
          }
          &:nth-child(4){
            width: 34%;
            margin-right:5px;
          }
          &:nth-child(5){
            width:28%;
            margin-right:5px;
          }
          &:nth-child(6){
            width:25%;
            margin-right:5px;
          }
          &:nth-child(7){
            width: 15%;
            margin-right:5px;
          }
        }
       
        .list-item{
          padding: 0.5em 0em;
          display: flex;
          justify-content: flex-start;
          width: 81%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
       

        }
      }
  
    .sbt11{
        margin: 1em 0em;
        text-align:left;
       
       
        .flex-box2 {
            
            padding: 20px 1em;
        } 
        .flex-nn{
            padding: 0.5em;
        }
        .flex-nn, .flex-box2 {
          justify-content: flex-start;
          font-size: 12px;
       
    .col{
        text-align:left;
        font-size: 12px;
      &:nth-child(1){
       
        width:22%;
         margin-left:10px;
      }
      &:nth-child(2){
        width: 22%;
        margin-left:10px;
      }
      &:nth-child(3){
        width: 22%;
        margin-left:10px;
      }
      &:nth-child(4){
        width: 22%;
        margin-left:10px;
      }
     
    }
}
.flex-nn{
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
color: rgba(205, 158, 87, 1);
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
    color: rgba(254, 109, 70, 1);

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
}   
`