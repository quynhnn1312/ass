/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "./../../../../components/Admin/NotFound";
import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";

function Product(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:productId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
}

Product.propTypes = {};

export default Product;
