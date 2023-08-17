import styled from "styled-components";

export default styled.div`
.panel-box{
  width: 100%;
}
@media screen and (min-width: 1950px) {
  .panel-title{
  font-size:30px;
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
      text-align:center;
      width: 23%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      &:last-child{
        margin-right: 0;
    }
      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: block;

        .id {
            text-align:left;
          font-size: 20px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 20px;
        }

        .number-box {
        
          .number {
           
            display:flex;
            justify-content:space-between;
            height: 20px;
            .itemid{
        color:rgba(254, 109, 70, 1);
        font-family: Roboto-Bold, Roboto;
font-weight: bold;
            font-size:18px;
       }
       .itemval{
        font-size:16px;
       }
          }
        }

      }
    }
  }
}


@media screen and (max-width: 1950px) {
  .panel-title{
  font-size:30px;
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
      text-align:center;
      width: 23%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      &:last-child{
        margin-right: 0;
    }
      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: block;


        .id {
            text-align:left;
          font-size: 20px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 20px;
          display: block;

        }

        .number-box {
         
          .number {
          
            display:flex;
            justify-content:space-between;
            height: 20px;
            .itemid{
        color:rgba(254, 109, 70, 1);
        font-family: Roboto-Bold, Roboto;
font-weight: bold;
            font-size:18px;
       }
       .itemval{
        font-size:16px;
       }
          }
        }

      }
    }
  }
}
  /* mobile style */
  @media screen and (max-width: 1500px) {
    .panel-title{
  font-size:21px;
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
      text-align:center;
      width: 23%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      &:last-child{
        margin-right: 0;
    }
      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: block;


        .id {
            text-align:left;
          font-size: 18px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 16px;
          display: block;

        }

        .number-box {
      
          .number {
           
            display:flex;
            justify-content:space-between;
            height: 20px;
            .itemid{
        color:rgba(254, 109, 70, 1);
        font-family: Roboto-Bold, Roboto;
font-weight: bold;
            font-size:16px;
       }
       .itemval{
        font-size:14px;
       }
          }
        }

      }
    }
  }
  }


  @media screen and (max-width: 450px) {
    .panel-title{
  font-size:18px;
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
      text-align:center;
      width: 48%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      &:last-child{
        margin-right: 0;
    }
      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: block;


        .id {
            text-align:left;
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 19px;
          display: block;

        }

        .number-box {

          .number {
         
            display:flex;
            justify-content:space-between;
            height: 20px;
       
            .itemid{
        color:rgba(254, 109, 70, 1);
        font-family: Roboto-Bold, Roboto;
font-weight: bold;
            font-size:14px;
       }
       .itemval{
        font-size:12px;
       }
          }
        }

      }
    }
  }
  }
`

