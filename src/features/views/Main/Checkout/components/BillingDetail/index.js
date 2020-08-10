import React,{useState} from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function BillingDetail({onHandleSubmit}) {
  const { register, handleSubmit, errors } = useForm();
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (data) => {
    // setIsSubmitting(true);
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };
  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section-title left-aligned">
          <h2>Billing Details</h2>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="first_name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your first and last name ..."
              ref={register({ required: true})}
            />
            {errors.name && errors.name.type === "required" && (
                <p className="text-danger">
                  Name is required
                </p>
              )}
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="email_address">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter your Email Address ..."
              ref={register({ required: true})}
            />
            {errors.email && errors.email.type === "required" && (
                <p className="text-danger">
                  Email is required
                </p>
              )}
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="p_address">
              Address <span className="text-danger">*</span>
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              placeholder="Enter your Address ..."
              ref={register({ required: true})}
            />
            {errors.address && errors.address.type === "required" && (
                <p className="text-danger">
                  Address is required
                </p>
              )}
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="p_address">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              name="phone"
              type="text"
              className="form-control"
              placeholder="Enter your Phone ..."
              ref={register({ required: true})}
            />
            {errors.phone && errors.phone.type === "required" && (
                <p className="text-danger">
                  Phone is required
                </p>
              )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 col-sm-12 col-md-12">
            <label htmlFor="order_notes">Order Notes</label>
            <textarea
              name="note"
              className="form-control"
              placeholder="Notes about your order, e.g. special notes for delivery."
              ref={register}
            />
          </div>
        </div>
        <div className="form-row justify-content-center">
          <button
            type="submit"
            className="btn btn-secondary dark"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

BillingDetail.propTypes = {
  onHandleSubmit: PropTypes.func,
};

BillingDetail.defaultProps = {
  onHandleSubmit: null,
};

export default BillingDetail;
