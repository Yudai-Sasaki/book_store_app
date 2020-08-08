import React from 'react';
import './home.css';
import BookListRow from './bookListRow';

class BookList extends React.Component {
    render(){
        return(
            <table className = "bookListTable">
                <div className = "bookListThElement">                    
                    <tr className = "bookListRowTr">
                        <th className = "bookListRowTh">本の題名</th>
                    </tr>
                </div>
                <div className = "bookListTdElement">
                    <BookListRow/>
                </div>
            </table>
        );
    }
}

export default BookList;