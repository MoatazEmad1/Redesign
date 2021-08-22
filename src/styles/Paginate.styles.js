import styled from 'styled-components'


export const PaginateContainer=styled.div`

.paginationBttns {
  width: 80%;

  margin:50px auto;
  height: 40px;
  list-style: none;
  display: flex;
 align-items: center;
 justify-content: center;
}
.paginationBttns a {
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  
  color:black;
  background-color:rgba(0,0,0,0) ;
  cursor: pointer;
}
.paginationBttns a:hover {
  color: white;
  background-color: #04B4FF;
}
.paginationActive a {
  color: white;
  background-color: #04B4FF;
}
`