import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import Addreview from '../AddReview/Addreview';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';

const Dashboard = () => {

    const { logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const style = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div>
            <Link style={style} to={`${url}`}>
                <h2 className="dashboard-header py-2">Dashboard</h2>
            </Link>
            <Container fluid>
                <Row>
                    <Col lg={2} className="sidebar">

                        <Link style={style} to="/home">
                            <h3><i className="fas fa-house-user"></i> Home</h3>
                        </Link>
                        {!admin &&
                            <ul>
                                <Link style={style} to={`${url}/myOrders`}>
                                    <li>My Orders</li>
                                </Link>
                                <Link style={style} to={`${url}/addReview`}>
                                    <li>Add Review</li>
                                </Link>
                                <Link style={style} to={`${url}/pay`}>
                                    <li>Pay</li>
                                </Link>
                            </ul>
                        }
                        {admin &&
                            <ul>
                                <Link style={style} to={`${url}/manageOrders`}>
                                    <li>Manage Orders</li>
                                </Link>

                                <Link style={style} to={`${url}/makeAdmin`}>
                                    <li>Make Admin</li>
                                </Link>

                                <Link style={style} to={`${url}/manageProducts`}>
                                    <li>Manage Products</li>
                                </Link>
                                <Link style={style} to={`${url}/addProduct`}>
                                    <li>Add Product</li>
                                </Link>
                            </ul>
                        }
                        <ul className="text-start">
                            <li style={{ marginTop: '30px' }} onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i> Logout</li>
                        </ul>
                    </Col>
                    <Col lg={10}>

                        <Switch>
                            <Route exact path={`${path}`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/addReview`}>
                                <Addreview></Addreview>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;