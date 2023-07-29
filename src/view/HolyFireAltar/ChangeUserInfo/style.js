import styled from "styled-components";

export default styled.div`
        .panel-title{
          position: relative;
          .close{
            position: absolute;
            right: -0.5em;
            top: -0.5em;
            font-size: 30px;
            cursor: pointer;
          }
        }
      .mint-tip {
        text-align: center;
        padding: 5em 0 1em;
        margin-top: -20px;
        color: #856465;
        span{
          color: #fff;
        }
      }

      .content-box {
        display: flex;
        padding: 2em 0;
        min-width: 600px;
      }

      .username{
        padding: 0 20px;
      }
      .button-box{
        text-align: center;
        .subBtn {
          padding: 0 4em;
          border-radius: 10px;
          margin: 0 auto;
        }
      }
      /* mobile style */
      @media screen and (max-width: 1000px) {
        .content-box   {
          min-width: 100%;
        }
      }
    `