import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "./../../../../components/Admin/NotFound";
import AddEdit from "./pages/AddEdit";
import Main from "./pages/Main";

function Blog() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:blogId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
}

Blog.propTypes = {

}

export default Blog

