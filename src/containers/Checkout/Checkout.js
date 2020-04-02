import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends React.Component {
  OnCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  OnCheckoutContinuedhandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          OnCheckoutContinued={this.OnCheckoutContinuedhandler}
          OnCheckoutCancelled={this.OnCheckoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
