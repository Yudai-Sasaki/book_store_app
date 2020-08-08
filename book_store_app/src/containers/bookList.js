import React from "react";
import "./home.css";
import BookListRow from "./bookListRow";

class BookList extends React.Component {
  render() {
    return (
      <>
        <div className="bookListThElement">
          <table className="bookListTable">
            <thead>
              <tr className="bookListRowTr">
                <th className="bookListRowTh">本の題名</th>
                <th className="bookListRowTh">詳細</th>
                <th className="bookListRowTh">削除</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="bookListTdElement">
          <table className="bookListTable">
            <tbody>
              <BookListRow />
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default BookList;
