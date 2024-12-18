import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, onChange }) {
    return (
      <>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={(event) => onChange(event.selected + 1)} // `event.selected` gives the zero-based index
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </>
    );
  }
  