import styled from 'styled-components'
export default styled.div`
width: 100%;
.form-value{
  padding: 0 10px;
}
.panel-box {
  width: 90%;
  margin: 0 auto;

  .panel-container {
    padding: 4em 0em;
    margin: 0 auto;
    width: 100%;
    border-radius:20px;
    .panel-title{
        width:80%;
        height:80px;
        display:flex;
        margin: 0 auto;
        justify-content:space-between;
        
        .title{
            font-size:24px;
            width: 50%;
        }
    }
  }
}
`