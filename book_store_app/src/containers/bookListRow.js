import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

class BookListRow extends React.Component {
  render() {
    return (
      <>
        <tr className="bookListRowTr">
          <td className="bookListRowTd">教科書</td>
          <td className="bookListRowTd">
            <Link to={"/detail/1"}>
              <img src="../images/icon.png" />
            </Link>
          </td>
          <td className="bookListRowTd">!!</td>
        </tr>
      </>
    );
  }
}

export default BookListRow;
