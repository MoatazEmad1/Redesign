import React,{useState} from 'react'
import {tembarr} from './tembData'
import {PaginateContainer} from '../styles/Paginate.styles'
import ReactPaginate from "react-paginate";
function Paginate() {
    const [users, setUsers] = useState(tembarr.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    // const displayUsers = users
    // .slice(pagesVisited, pagesVisited + usersPerPage)
    // .map((user) => {
    //   return (
    //     <div className="user">
    //       <h3>{user.firstName}</h3>
    //       <h3>{user.lastName}</h3>
    //       <h3>{user.email}</h3>
    //     </div>
    //   );
    // });
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <PaginateContainer>
           
            <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
         
        />
   
        </PaginateContainer>
    )
}

export default Paginate
