import React from 'react'
import PropTypes from 'prop-types'

function CartAmount(props) {
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
              <td>$860.00</td>
            </tr>
            <tr>
              <td>
                <strong>Total:</strong>
              </td>
              <td>
                <span className="color-primary">
                  $860.00
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

}

export default CartAmount

