import styled from "styled-components";

export default styled.div`
      .list-box{
        margin: 2em 0 1em;
        .col{
          &:nth-child(1){
            width: 5%;
          }
          &:nth-child(2){
            width: 5%;
          }
          &:nth-child(3){
            width: 30%;
          }
          &:nth-child(4){
            width: 30%;
          }
        }
        .list-header{
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
          padding: 0.5em 1em;
        }
        .list-item{
          padding: 0.5em 1em;
          display: flex;
          justify-content: space-between;
          background: #3F3535;
          border-radius: 10px;
          margin: 0.5em 0;
        }
      }
    `