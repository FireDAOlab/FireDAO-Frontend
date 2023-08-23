import styled from "styled-components";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 0 auto;


  @media screen and (min-width: 1950px){
    .fire-list-box {
        margin:1.5em 0em;
          .list-header {
            padding: 20px 2.3em;
          }
          .list-item, .list-header {
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:71%;
             margin-left:5px;
             span{
                display: inline-block;
            
             }
             .draft{
    color: #FE6D46;
    text-align:center;
    background: rgba(254,109,70,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
  .chain{
    color:#CD9E57;
    text-align:center;
    background: rgba(205,158,87,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
            }

            &:nth-child(2) {
              width: 27%;
              padding-left: 4em;
            }

            
          }
        }
        
          .list-item {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
  

  }

  @media screen and (max-width: 1950px){
    .fire-list-box {
        margin:1.5em 0em;
        .list-item:last-child{
    border-bottom:none!important;
}
          .list-header {
            padding: 20px 2.3em;
          }
          .list-item, .list-header {
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
                width:71%;
             margin-left:5px;
             span{
                display: inline-block;
            
             }
             .draft{
    color: #FE6D46;
    text-align:center;
    background: rgba(254,109,70,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
  .chain{
    color:#CD9E57;
    text-align:center;
    background: rgba(205,158,87,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
            }

            &:nth-child(2) {
              width: 27%;
              padding-left: 4em;
            }
            
          }
        }
        
          .list-item {   
            padding:1em 0.5em ;
            font-size:16px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
  }


  @media screen and (max-width: 1500px){
    .fire-list-box {
        margin:1.5em 0em;
          .list-header {
            padding: 20px 1.8em;
          }
          .list-item, .list-header {
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:15px;
            &:nth-child(1) {
              width:72%;
             margin-left:5px;
             span{
                display: inline-block;
            
             }
             .draft{
    color: #FE6D46;
    text-align:center;
    background: rgba(254,109,70,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
  .chain{
    color:#CD9E57;
    text-align:center;
    background: rgba(205,158,87,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
width:90px;
padding:2px 5px;
margin-left:10px;
  }
            }

            &:nth-child(2) {
              width: 25%;
              padding-left: 0em;
            }

            
          }
        }
        
          .list-item {   
            padding:1em 0.5em ;
            font-size:15px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:15px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
  

  }

  @media screen and (max-width: 450px){
    .fire-list-box {
        margin:1.5em 0em;
          .list-header {
            padding: 20px 1.2em;
          }
          .list-item, .list-header {
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:65%;
             margin-left:0px;
             span{
                display: inline-block;
            
             }
             .draft{
    color: #FE6D46;
    text-align:center;
    background: rgba(254,109,70,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
width:75px;
padding:2px 5px;
margin-left:5px;
  }
  .chain{
    color:#CD9E57;
    text-align:center;
    background: rgba(205,158,87,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
width:75px;
padding:2px 5px;
margin-left:5px;
  }
            }

            &:nth-child(2) {
              width: 33%;
              padding-left: 5px;
            }

            
          }
        }
        
          .list-item {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
  

  }


  @media screen and (max-width: 400px){
    .fire-list-box {
        margin:1.5em 0em;
          .list-header {
            padding: 20px 1.2em;
          }
          .list-item, .list-header {
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:68%;
             margin-left:0px;
             span{
                display: inline-block;
            
             }
             .draft{
    color: #FE6D46;
    text-align:center;
    background: rgba(254,109,70,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
width:75px;
padding:2px 5px;
margin-left:5px;
  }
  .chain{
    color:#CD9E57;
    text-align:center;
    background: rgba(205,158,87,0.1);
border-radius: 39px 39px 39px 39px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
width:75px;
padding:2px 5px;
margin-left:5px;
  }
            }

            &:nth-child(2) {
              width: 31%;
              padding-left: 5px;
            }

            
          }
        }
        
          .list-item {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
  

  }
`

