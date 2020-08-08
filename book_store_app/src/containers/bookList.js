import React from "react";
import "./home.css";
import BookListRow from "./bookListRow";

class BookList extends React.Component {
  render() {
    return (
      <>
        <div className="bookListThElement">
          <table className="bookListTable">
            <tr className="bookListRowTr">
              <th className="bookListRowTh">本の題名</th>
            </tr>
          </table>
        </div>
        <div className="bookListTdElement">
          <table className="bookListTable">
            <BookListRow />
          </table>
        </div>
      </>
    );
  }
}

export default BookList;
