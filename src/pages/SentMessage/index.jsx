/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// import Dialog from '../../Components/Dialog';
import Network from '../../Components/NetworkError';
import Post from '../../Components/Post';
import Pagination from '../../Components/Pagination';
import {
  sentAction,
  cleanUPSent,
  sentPending,
  // getUserAction,
} from '../../Store/actions/SentMessage';
import Loader from '../../Components/Loader';
import toast from '../../Components/Toast';

const SentMessage = ({
  // isCompleted,
  getDetails,
  error,
  sentMessage,
  sentMessageAction,
  isDelete,
  // cleanUp,
  pending,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [messagePerPage] = useState(7);

  useEffect(() => {
    // console.log(isDelete);
    pending();
    sentMessageAction();
    if (error) toast(error, 'error');
    console.log(sentMessage);
    // if (!isDelete) toast('Delete Successful', 'success');
    // window.addEventListener('online', () => console.log('came online'));
  }, []);

  useEffect(() => {
    if (isDelete) {
      toast('Delete Successful', 'success');
      pending();
      sentMessageAction();
    }
    // window.addEventListener('online', () => console.log('came online'));
  }, [isDelete]);


  const indexOfLastMessage = currentPage * messagePerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagePerPage;
  const currentMessages = sentMessage.slice(indexOfFirstMessage, indexOfLastMessage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="m-md-1 text-center">
        <Alert variant="danger">
      Unverified Account. Please verify your email address or phone number
          {'  '}
          <Button variant="outline-danger">
            Verify Account
          </Button>
        </Alert>
      </div>
      {getDetails && !error && (
        <div className="mx-5 d-flex justify-content-center">
          <div className="w-100 mt-5 align-items-center">
            {/*  */}
            <div className="table-responsive-lg">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="text-center">Time</th>
                    <th scope="col" className="text-center">Sender ID</th>
                    <th scope="col" className="text-center" style={{ width: '400px' }}>Message</th>
                    <th scope="col" className="text-center">Recipient</th>
                    <th scope="col" className="text-center">Action</th>
                  </tr>
                  {/* <div>123</div> */}
                </thead>
              </table>
              {/* </div> */}
              <div className="text-center mt-5">
                <Loader
                  size={15}
                  color="gray
                  "
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {error && error !== 'No Message Found' && (<div className="text-center m-auto" style={{ background: '#f7f7f7' }}><Network /></div>)}
      {error === 'No Message Found' && (<div className="text-center m-auto pt-3"><img src="../../assets/net6.png" alt="message empty" /></div>)}
      {!error && sentMessage.length > 0 && !getDetails && (
      <div className="mx-5 d-flex justify-content-center">
        <div className="w-100 mt-5 align-items-center">
          {/*  */}
          <div className="table-responsive-lg">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="text-center">Time</th>
                  <th scope="col" className="text-center">Sender ID</th>
                  <th scope="col" className="text-center" style={{ width: '400px', overflow: 'hidden' }}>Message</th>
                  <th scope="col" className="text-center">Recipient</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <Post messages={currentMessages} />
              </tbody>
            </table>
          </div>
          <Pagination
            messagePerPage={messagePerPage}
            totalMessages={sentMessage.length}
            paginate={paginate}
          />
        </div>
      </div>
      )}
      <div />
    </>
  );
};

export const sentMessageAction = () => sentAction();
export const cleanUp = () => cleanUPSent();
export const pending = () => sentPending();

const mapStateToProps = state => ({
  sentMessage: state.sent.sentMessage,
  isLoading: state.sent.isLoading,
  isCompleted: state.sent.isCompleted,
  error: state.sent.error,
  isDelete: state.sent.isDelete,
  getDetails: state.sent.getDetails,
});

export default connect(mapStateToProps, { sentMessageAction, cleanUp, pending })(
  SentMessage,
);
