/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import LayoutMain from "./features/layouts/LayoutMain";
import LayoutAdmin from "./features/layouts/LayoutAdmin";
import NotFound from "./components/Admin/NotFound/index";
import NotFoundMain from "./components/Main/NotFoundMain/index";

// Admin
const Dashboard = React.lazy(() => import("./features/views/Admin/Dashboard"));
const Product = React.lazy(() => import("./features/views/Admin/Product"));
const Category = React.lazy(() => import("./features/views/Admin/Category"));
const Transaction = React.lazy(() => import("./features/views/Admin/Transaction"));
const BlogAdmin = React.lazy(() => import("./features/views/Admin/Blog"));

// Main
const Home = React.lazy(() => import("./features/views/Main/Home"));
const Shop = React.lazy(() => import("./features/views/Main/Shop"));
const Cart = React.lazy(() => import("./features/views/Main/Cart"));
const Blog = React.lazy(() => import("./features/views/Main/Blog"));
const BlogDetail = React.lazy(() => import("./features/views/Main/BlogDetail"));
const About = React.lazy(() => import("./features/views/Main/About"));
const Contact = React.lazy(() => import("./features/views/Main/Contact"));
const Register = React.lazy(() => import("./features/views/Main/Register"));
const Login = React.lazy(() => import("./features/views/Main/Login"));
const Checkout = React.lazy(() => import("./features/views/Main/Checkout"));
const SingleProduct = React.lazy(() => import("./features/views/Main/SingleProduct"));
const Thankyou = React.lazy(() => import("./features/views/Main/Thankyou"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="text-center ">
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              />
              Loading...
            </button>
          </div>
        }
      >
        <Router>
          <Switch>
            <Route path="/thanh-you" component={Thankyou} />
            <Route path="/admin/:path?">
              <LayoutAdmin>
                <Switch>
                  <Redirect exact from="/admin/" to="/admin/dashboard" />

                  <Route path="/admin/dashboard" component={Dashboard} />
                  <Route path="/admin/products" component={Product} />
                  <Route path="/admin/categories" component={Category} />
                  <Route path="/admin/transactions" component={Transaction} />
                  <Route path="/admin/blogs" component={BlogAdmin} />
                  <Route component={NotFound} />
                </Switch>
              </LayoutAdmin>
            </Route>
            <Route>
              <LayoutMain>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/shops" component={Shop} />
                  <Route path="/shop/:id" exact component={Shop} />
                  <Route path="/shop/:idCate/single-product/:idPro" component={SingleProduct} />
                  <Route path="/carts" component={Cart} />
                  <Route path="/blogs" component={Blog} />
                  <Route path="/blog/:id" component={BlogDetail} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/checkout" component={Checkout} />
                  <Route component={NotFoundMain} />
                </Switch>
              </LayoutMain>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
