import styled from "styled-components";

export default styled.div`
@media screen and (min-width: 1000px) {
  .panel-title{
  font-size:30px;
}
.panel-container1{
  border: none;
  padding: 3em 0em;
  position: relative;
background: rgba(36, 27, 27, 1);
width: 100%;
  .tp{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .tpitem{
      
height: 300px;
      /* text-align:center; */
      width: 24%;
background: #140E0E;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      img{
        margin:10px;
        width: 90%;
      }
      p{
        margin: 10px;
        font-size: 20px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
      }
    }
  }
}

/* .content1{
  border: none;
  padding: 3em 0em;
  position: relative;
background: rgba(36, 27, 27, 1);
width: 100%;
} */
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .list-item {
      cursor: pointer;
      padding: 10px;
      margin-top: 2em;
      margin-right: 2.5%;
      background: #3F3535;
      border-radius: 10px;
      border: 1px solid #7F6868;
      width: 23%;

      &:nth-child(4n) {
        margin-right: 0;
      }

      .img {
        width: 100%;
      }

      .item-info {
        margin-top: 1em;
        display: flex;
        justify-content: space-between;

        .id {
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 19px;
        }

        .number-box {
          background: rgba(#DD3642, 0.5);

          .number {
            text-align: center;
            width: 60px;
            height: 24px;
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
            border-radius: 10px;
            border: 1px solid;
            border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
          }
        }

      }
    }
  }
}
  /* mobile style */
  @media screen and (max-width: 1000px) {
    .panel-container{
  border: none;
background: rgba(36, 27, 27, 1);
width: 100%;
position: relative;

  .tp{
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    .tpitem{
      width: 24%;
      background: rgba(36, 27, 27, 1);
      border-radius: 50px 50px 50px 50px;
border: 1px solid rgba(254,109,70,0.5);
    }
  }
}
  }
`

