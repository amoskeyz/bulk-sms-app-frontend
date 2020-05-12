/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ListGroup.scss';
// import Dialog from '../../Components/Dialog';
// import Network from '../../Components/NetworkError';
import Groups from '../../Components/Groups';
import Pagination from '../../Components/Pagination';
import toast from '../../Components/Toast';
// import Loader from '../../Components/Loader';
import {
  groupAction,
  cleanUpGroup,
  groupPending,
} from '../../Store/actions/Group';

const ListGroup = ({
  pending, listGroup, groups, error, isLoading, isCompleted, cleanUp,
}) => {
  // console.log(groups, isLoading, 'listggggggg');

  const [currentPage, setCurrentPage] = useState(1);
  const [groupPerPage] = useState(7);

  const indexOfLastGroup = currentPage * groupPerPage;
  const indexOfFirstGroup = indexOfLastGroup - groupPerPage;
  const currentGroup = groups.slice(indexOfFirstGroup, indexOfLastGroup);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    pending();
    listGroup();

    if (error) toast(error, 'error');

    if (isCompleted) cleanUp();

    return () => {
      cleanUp();
    };
  }, []);

  return (
    <>
      <div className="m-md-1 text-center">
        <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
          {'  '}
          <Button variant="outline-danger">
            Verify Account
          </Button>
        </Alert>
      </div>
      <div className="mx-5 d-flex justify-content-center">
        <div className="w-100 mt-5 align-items-center">
          {/*  */}
          {!isLoading && (
          <div className="table-responsive-lg">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Group Name</th>
                  <th scope="col" className="text-center">Numbers</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <Groups groups={currentGroup} />
              </tbody>
            </table>
          </div>
          )}
          <Pagination
            messagePerPage={groupPerPage}
            totalMessages={groups.length}
            paginate={paginate}
            link="#/list-group"
          />
        </div>
      </div>
    </>
  );
};

// export default ListGroup;
export const listGroup = () => groupAction();
export const cleanUp = () => cleanUpGroup();
export const pending = () => groupPending();

const mapStateToProps = state => ({
  isCompleted: state.group.isCompleted,
  isLoading: state.group.isLoading,
  groups: state.group.groups,
  error: state.group.error,
});

export default connect(mapStateToProps, { listGroup, cleanUp, pending })(ListGroup);
