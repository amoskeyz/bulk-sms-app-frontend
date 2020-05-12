/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Network from '../../Components/NetworkError';
import Transactions from '../../Components/Transactions';
import Pagination from '../../Components/Pagination';
import {
  transactionAction,
  cleanUpTransaction,
  transactionPending,
  // getUserAction,
} from '../../Store/actions/Transaction';
import Loader from '../../Components/Loader';
import toast from '../../Components/Toast';
// import Loader from '../../Components/Loader';

const Transaction = ({
  getDetails,
  error,
  transactions,
  transact,
  // cleanUp,
  pending,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionPerPage] = useState(7);

  const indexOfLastTransaction = currentPage * transactionPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    // console.log(isDelete);
    pending();
    transact();
    if (error) toast(error, 'error');
    console.log(error);
    // if (!isDelete) toast('Delete Successful', 'success');
    // window.addEventListener('online', () => console.log('came online'));
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
        {/* <Alert variant="info" dismissible /> */}
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
      {error && error !== 'No Transaction Found' && (<div className="text-center m-auto" style={{ background: '#f7f7f7' }}><Network /></div>)}
      {error === 'No Transaction Found' && (<div className="text-center m-auto pt-3" style={{ background: '#f7f7f7' }}><img src="../../assets/net11.jpg" alt="transaction empty" /></div>)}
      {!error && transactions.length > 0 && !getDetails && (
      <div className="mx-5 d-flex justify-content-center">
        <div className="w-100 mt-5 align-items-center">
          {/*  */}
          <div className="table-responsive-lg">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="text-center">Time</th>
                  <th scope="col" className="text-center">Method</th>
                  <th scope="col" className="text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                <Transactions transactions={currentTransactions} />
              </tbody>
            </table>
          </div>
          <Pagination
            messagePerPage={transactionPerPage}
            totalMessages={transactions.length}
            paginate={paginate}
          />
        </div>
      </div>
      )}
    </>
  );
};

export const transact = () => transactionAction();
export const cleanUp = () => cleanUpTransaction();
export const pending = () => transactionPending();

const mapStateToProps = state => ({
  transactions: state.transaction.transactions,
  isLoading: state.transaction.isLoading,
  isCompleted: state.transaction.isCompleted,
  error: state.transaction.error,
  isDelete: state.transaction.isDelete,
  getDetails: state.transaction.getDetails,
});
export default connect(mapStateToProps, { transact, pending, cleanUp })(Transaction);
