import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectTransaction, apiTransactionList, apiUpdateTransaction, apiDeleteTransaction } from "../../../../createSlices/transactionSlice";
import ShowPerPage from "./components/ShowPerPage";
import TransactionList from './components/TransactionList';
import TransactionSearch from "./components/TransactionSearch";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Transaction(props) {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransaction);
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchData, setSearchData] = useState();

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const onHandlePerPage = (value) => {
    setPerPage(+value);
  };
  const indexOfLastTransaction = activePage * perPage;
  const indexOfFirstTransaction = indexOfLastTransaction - perPage;
  const TransactionData = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const onSubmitSearch = (keyword) => {
    const result = transactions.filter(
      (transaction) =>
        transaction.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );
    keyword == "" ? setSearchData(0) : setSearchData(result);
  };

  useEffect(() => {
    dispatch(apiTransactionList());
  }, [])

  const onHandleStatus = (value,transaction) => {
    const data = {...transaction, "status" : value}
    dispatch(apiUpdateTransaction(data));
  }

  const onHandleRemoveTransaction = (id) => {
    dispatch(apiDeleteTransaction(id));
    Swal.fire({
      icon: "success",
      title: "Đã xóa",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Transaction</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Transaction Manager
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <ShowPerPage
                      perPage={perPage}
                      onHandlePerPage={onHandlePerPage}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <TransactionSearch onSubmitSearch={onSubmitSearch} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <TransactionList
                    transactions={searchData ? searchData : TransactionData}
                    onHandleStatus={onHandleStatus}
                    onHandleRemoveTransaction={onHandleRemoveTransaction}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="dataTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to {perPage} of {transactions.length} entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <Pagination
                      prevPageText="Previous"
                      nextPageText="Next"
                      hideFirstLastPages
                      activePage={activePage}
                      itemsCountPerPage={perPage}
                      totalItemsCount={
                        searchData ? searchData.length : transactions.length
                      }
                      pageRangeDisplayed={5}
                      itemClass="page-item"
                      linkClass="page-link"
                      onChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Transaction.propTypes = {

}

export default Transaction

