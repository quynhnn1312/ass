import React from 'react'
import PropTypes from 'prop-types'

function CartAmount({totalCart}) {
  return (
    <div className="cart-amount-wrapper">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 offset-md-8">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <strong>Sub-Total:</strong>
              </td>
              <td>${totalCart}</td>
            </tr>
            <tr>
              <td>
                <strong>Total:</strong>
              </td>
              <td>
                <span className="color-primary">
                  ${totalCart}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  )
}

CartAmount.propTypes = {
  totalCart: PropTypes.number,
}

CartAmount.defaultProps = {
  totalCart: 0,
}

export default CartAmount

