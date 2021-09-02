import styled from 'styled-components'


export const PaginateContainer=styled.div`


.paginationBttns {
  width: 80%;

  margin:30px auto;
  height: 90px;
  list-style: none;
  display: flex;
 align-items: center;
 justify-content: center;
}
.paginationBttns a {
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  color:#808191;
  font-size: 14px;
  font-weight: 400;
  background-color:rgba(0,0,0,0) ;
  cursor: pointer;
}
.paginationBttns a:hover {
  color: #FFFFFF;
  background-color: #04B4FF;
}
.paginationActive a {
  color: #FFFFFF;
  background-color: #04B4FF;
}
`