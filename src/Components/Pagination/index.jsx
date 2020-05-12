import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({
  messagePerPage, totalMessages, paginate, link,
}) => {
  const pageNumber = [];
  //   let i;

  for (let i = 1; i <= Math.ceil(totalMessages / messagePerPage); i++) {
    pageNumber.push(i);
  }
  console.log(pageNumber);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" href={link} tabIndex="-1" aria-disabled>Previous</a>
        </li>
        {pageNumber.map(number => (
          <li key={number} className="page-item">
            <a className="page-link" href={link} onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="/report/message">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
