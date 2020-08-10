/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  apiOrderList,
} from "../../../../../../createSlices/orderSlice";
import { Link } from "react-router-dom";

function TransactionList({
  transactions,
  onHandleStatus,
  onHandleRemoveTransaction,
}) {
  const [transactionId, setTransactionId] = useState();
  const dispatch = useDispatch();
  const orders = useSelector(selectOrder);
  const changeStatus = (e, value, transaction) => {
    if (!onHandleStatus) return;
    e.preventDefault();
    onHandleStatus(value, transaction);
  };

  const removeTransaction = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Chắc chắn xóa transaction?",
      text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Không đồng ý!",
    }).then((result) => {
      if (result.value) {
        if (!onHandleRemoveTransaction) return;
        onHandleRemoveTransaction(id);
      }
    });
  };

  const onListOrderByTransactionId = (e, id) => {
    e.preventDefault();
    if (id) {
      dispatch(apiOrderList());
      setTransactionId(id);
    }
  };
  var listOrderByTransactionId = [];
  if (transactionId) {
    listOrderByTransactionId = orders.filter(
      (order) => order.transactionId === transactionId
    );
  }

  var totalTransaction = 0;

  return (
    <div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th width="30%">Information</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date booking</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.id}</td>
              <td>
                <li>{transaction.name}</li>
                <li>{transaction.email}</li>
                <li>{transaction.phone}</li>
                <li>{transaction.address}</li>
              </td>
              <td>${transaction.total}</td>
              <td>
                {transaction.status === 0 ? (
                  <span className="badge badge-secondary">Tiếp nhận</span>
                ) : (
                  ""
                )}
                {transaction.status === 1 ? (
                  <span className="badge badge-info">Đang vận chuyển</span>
                ) : (
                  ""
                )}
                {transaction.status === 2 ? (
                  <span className="badge badge-success">Hoàn thành</span>
                ) : (
                  ""
                )}
                {transaction.status === -1 ? (
                  <span className="badge badge-danger">Đã Huỷ</span>
                ) : (
                  ""
                )}
              </td>
              <td>{transaction.created_at}</td>
              <td>
                <div>
                  <a
                    href="#"
                    className="btn btn-sm btn-info"
                    data-toggle="modal"
                    data-target="#modal-lg"
                    onClick={(e) =>
                      onListOrderByTransactionId(e, transaction.id)
                    }
                  >
                    <i className="fa fa-eye" /> View
                  </a>
                  &nbsp;
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-success">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => changeStatus(e, 1, transaction)}
                      >
                        <i className="fa fa-ban" /> &nbsp; Đang bàn giao
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => changeStatus(e, 2, transaction)}
                      >
                        <i className="fa fa-ban" /> &nbsp; Đã bàn giao
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => changeStatus(e, -1, transaction)}
                      >
                        <i className="fa fa-ban" /> &nbsp; Hủy
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => removeTransaction(e, transaction.id)}
                      >
                        <i className="fas fa-trash-alt" /> &nbsp; Xóa
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="modal fade show" id="modal-lg" aria-modal="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Orders # <b className="transaction-id">{transactionId}</b>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" id="md-content">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {listOrderByTransactionId.map((order, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link target="_blank" to="/">
                          {order.name}
                        </Link>
                      </td>
                      <td>
                        <img
                          width="100px"
                          src={order ? order.image : ""}
                          width="80px"
                          alt=""
                        />
                      </td>
                      <td>
                        $
                        {order.discount > 0
                          ? ((100 - order.discount) / 100) * order.price
                          : order.price}
                      </td>
                      <td>{order.quantity}</td>
                      <td>
                        $
                        {
                          (totalTransaction +=
                            order.discount > 0
                              ? ((100 - order.discount) / 100) *
                                order.price *
                                order.quantity
                              : order.price * order.quantity)
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Closed
              </button>
              <p>
                Total: <span id="md-total-order">${totalTransaction}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TransactionList.propTypes = {
  onHandleStatus: PropTypes.func,
  transactions: PropTypes.array,
  onHandleRemoveTransaction: PropTypes.func,
};

TransactionList.defaultProps = {
  onHandleStatus: null,
  transactions: [],
  onHandleRemoveTransaction: [],
};

export default TransactionList;
