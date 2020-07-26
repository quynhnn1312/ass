/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from "../../../../components/Main/Breadcrumb";


function Checkout(props) {
  return (
    <div className="checkout-page">
      <Breadcrumb />
      <div id="content" className="main-content-wrapper">
  {/* Start of Checkout Wrapper */}
  <div className="checkout-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <main id="primary" className="site-main">
            <div className="user-actions-area">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="user-actions user-login">
                    <h3>Returning customer? <span id="show_login">Click here to login.</span></h3>
                    <div id="checkout_login" className="display-content">
                      <div className="login-info">
                        <p className="login-text">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                        <form>
                          <div className="form-row mb-3">
                            <div className="form-group col-12 col-sm-12 col-md-6">
                              <label htmlFor="login_user">Username Or Email <span className="text-danger">*</span></label>
                              <input type="text" className="form-control" id="login_user" required />
                            </div>
                            <div className="form-group col-12 col-sm-12 col-md-6">
                              <label htmlFor="login_pass">Password <span className="text-danger">*</span></label>
                              <input type="password" className="form-control" id="login_pass" required />
                            </div>
                          </div>
                          <div className="form-row align-items-center mb-3">
                            <div className="form-group col-4 col-sm-2 col-md-2 col-lg-1">
                              <button type="submit" className="btn btn-secondary">Login</button>
                            </div>
                            <div className="form-group col-8 col-sm-10 col-md-10 col-lg-11">
                              <div className="form-check">
                                <div className="custom-checkbox">
                                  <input className="form-check-input" type="checkbox" id="remember_check" />
                                  <span className="checkmark" />
                                  <label className="form-check-label" htmlFor="remember_check">remember Me</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="lost-password">
                            <a href="#">Lost your password?</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div> {/* end of user-actions */}
                  <div className="user-actions user-coupon">
                    <h3>Have A Coupon? <span id="show_coupon">Click Here To Enter Your Code.</span></h3>
                    <div id="checkout_coupon" className="display-content">
                      <div className="coupon-info">
                        <form action="#">
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                              <div className="input-group">
                                <input type="text" name="coupon" defaultValue placeholder="Coupon Code" id="input-coupon" className="form-control mr-3" required />
                                <input type="submit" defaultValue="Apply Coupon" id="button-coupon" className="btn btn-secondary" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> {/* end of user-actions */}
                </div>
              </div> {/* end of row */}
            </div> {/* end of user-actions */}
            <div className="checkout-area">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="checkout-form">
                    <div className="section-title left-aligned">
                      <h2>Billing Details</h2>
                    </div>
                    <form action="#">
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="first_name">First Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="first_name" required />
                        </div>
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="last_name">Last Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="last_name" required />
                        </div>
                      </div>
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="company_name">Company</label>
                          <input type="text" className="form-control" id="company_name" />
                        </div>
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                          <input type="email" className="form-control" id="email_address" required />
                        </div>
                      </div>
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-12">
                          <label htmlFor="p_address">Address <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="p_address" required />
                        </div>
                      </div>
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="city_name">City <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="city_name" required />
                        </div>
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="province_name">Province <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="province_name" required />
                        </div>
                      </div>
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="zip_code">Zip Code <span className="text-danger">*</span></label>
                          <input type="number" className="form-control" id="zip_code" required />
                        </div>
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="country_name" className="d-block">Country <span className="text-danger">*</span></label>
                          <select name="country_id" id="country_name" className="form-control nice-select" required>
                            <option value> --- Please Select --- </option>
                            <option value>Argentina</option>
                            <option value>Bangladesh</option>
                            <option value>Belgium</option>
                            <option value>Brazil</option>
                            <option value>Germany</option>
                            <option value>India</option>
                            <option value>United Kingdom</option>
                            <option value>United States</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row mb-3">
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="tel_number">telephone</label>
                          <input type="tel" className="form-control" id="tel_number" />
                        </div>
                        <div className="form-group col-12 col-sm-12 col-md-6">
                          <label htmlFor="fax_num">Fax</label>
                          <input type="text" className="form-control" id="fax_num" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-12 col-sm-12 col-md-12">
                          <div className="form-check mb-3">
                            <div className="custom-checkbox">
                              <input className="form-check-input" type="checkbox" id="create_account" />
                              <span className="checkmark" />
                              <label className="form-check-label" htmlFor="create_account">Create an account?</label>
                            </div>
                          </div>
                          <div className="new-account-info mt-4">
                            <div className="form-row">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <p className="mb-4">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                <label htmlFor="new_pass">Account Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" id="new_pass" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-12 col-sm-12 col-md-12">
                          <div className="form-check mb-3">
                            <div className="custom-checkbox">
                              <input className="form-check-input" type="checkbox" id="different_shipping" />
                              <span className="checkmark" />
                              <label className="form-check-label" htmlFor="different_shipping" id="different_shipping_address">Ship to a different address?</label>
                            </div>
                          </div>
                          <div className="ship-box-info mt-4">
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-6">
                                <label htmlFor="f_name">First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="f_name" required />
                              </div>
                              <div className="form-group col-12 col-sm-12 col-md-6">
                                <label htmlFor="l_name">Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="l_name" required />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-6">
                                <label htmlFor="com_name">Company</label>
                                <input type="text" className="form-control" id="com_name" />
                              </div>
                              <div className="form-group col-12 col-sm-12 col-md-6">
                                <label htmlFor="email_add">Email Address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email_add" required />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="coun_name" className="d-block">Country <span className="text-danger">*</span></label>
                                <select name="country_id" id="coun_name" className="form-control nice-select" required>
                                  <option value> --- Please Select --- </option>
                                  <option value>Argentina</option>
                                  <option value>Bangladesh</option>
                                  <option value>Belgium</option>
                                  <option value>Brazil</option>
                                  <option value>Germany</option>
                                  <option value>India</option>
                                  <option value>United Kingdom</option>
                                  <option value>United States</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="street_add">Street Address</label>
                                <input type="text" className="form-control" id="street_add" />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="ap_add">Apartment, suite, unit etc. (optional)</label>
                                <input type="text" className="form-control" id="ap_add" />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="cit_name">City <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="cit_name" required />
                              </div>
                            </div>
                            <div className="form-row mb-3">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="prov_name">Province <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="prov_name" required />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-12 col-sm-12 col-md-12">
                                <label htmlFor="zp_code">Zip Code <span className="text-danger">*</span></label>
                                <input type="number" className="form-control" id="zp_code" required />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-12 col-sm-12 col-md-12">
                          <label htmlFor="order_notes">Order Notes</label>
                          <textarea className="form-control" id="order_notes" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                        </div>
                      </div>
                    </form>
                  </div> {/* end of checkout-form */}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                  <div className="order-summary">
                    <div className="section-title left-aligned">
                      <h2>Your Order</h2>
                    </div>
                    <div className="product-container">
                      <div className="product-list">
                        <div className="product-inner media align-items-center">
                          <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
                            <a href="#">
                              <img src="/main/images/products/new/product-1.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h5>Compete Track Tote</h5>
                            <p className="product-quantity">Quantity: 3</p>
                            <p className="product-final-price">$180.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-list">
                        <div className="product-inner media align-items-center">
                          <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
                            <a href="#">
                              <img src="/main/images/products/new/product-3.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h5>Rival Field Messenger 6</h5>
                            <p className="product-quantity">Quantity: 5</p>
                            <p className="product-final-price">$260.00</p>
                          </div>
                        </div>
                      </div>
                    </div> {/* end of product-container */}
                    <div className="order-review">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Subtotal</th>
                              <td className="text-center">$440.00</td>
                            </tr>
                            <tr className="order-total">
                              <th>Total</th>
                              <td className="text-center"><strong><span className="color-primary">$440.00</span></strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="checkout-payment">
                      <form action="#">
                        <div className="form-row">
                          <div className="custom-radio">
                            <input className="form-check-input" type="radio" name="payment" id="check_payment" defaultValue="check" defaultChecked />
                            <span className="checkmark" />
                            <label className="form-check-label" htmlFor="check_payment">Check Payments</label>
                            <div className="payment-info" id="check_pay">
                              <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                          </div>
                          <div className="custom-radio">
                            <input className="form-check-input" type="radio" name="payment" id="cash_delivery_payment" defaultValue="cash" />
                            <span className="checkmark" />
                            <label className="form-check-label" htmlFor="cash_delivery_payment">Cash on Delivery</label>
                            <div className="payment-info" id="cash_pay">
                              <p>Pay with cash upon delivery.</p>
                            </div>
                          </div>
                          <div className="custom-radio">
                            <input className="form-check-input" type="radio" name="payment" id="paypal_payment" defaultValue="paypal" />
                            <span className="checkmark" />
                            <label className="form-check-label" htmlFor="paypal_payment">PayPal Express Checkout</label>
                            <div className="payment-info" id="paypal_pay">
                              <p>Pay via PayPal. You can pay with your credit card if you don’t have a PayPal account.</p>
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-check">
                            <div className="custom-checkbox">
                              <input className="form-check-input" type="checkbox" id="terms_acceptance" required />
                              <span className="checkmark" />
                              <label className="form-check-label" htmlFor="terms_acceptance">I agree to the <a href="#">terms of service</a> and will adhere to them unconditionally.</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-row justify-content-end">
                          <input type="submit" className="btn btn-secondary dark" defaultValue="Continue to Payment" />
                        </div>
                      </form>
                    </div> {/* end of checkout-payment */}
                  </div> {/* end of order-summary */}
                </div>
              </div> {/* end of row */}
            </div> {/* end of checkout-area */}
          </main> {/* end of #primary */}
        </div>
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div>
  {/* End of Checkout Wrapper */}
</div>

    </div>
  )
}

Checkout.propTypes = {

}

export default Checkout

