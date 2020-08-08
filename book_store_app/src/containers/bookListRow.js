import React from "react";
import "./home.css";

class BookListRow extends React.Component {
  render() {
    return (
      <>
        <tr className="bookListRowTr">
          <td className="bookListRowTd">教科書</td>
          <td className="bookListRowTd">i</td>
          <td className="bookListRowTd">!!</td>
        </tr>
      </>
    );
  }
}

export default BookListRow;
