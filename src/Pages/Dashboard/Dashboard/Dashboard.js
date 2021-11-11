import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageOrders from '../ManageOrders/ManageOrders';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const style = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div>
            <Header></Header>
            <Container fluid>
                <Row>
                    <Col lg={2} className="sidebar">
                        {/* <h3><i className="fas fa-house-user"></i> Dashboard</h3> */}
                        <Link style={style} to={`${url}`}>
                            Dashboard
                        </Link>
                        <br />
                        <Link style={style} to={`${url}/myOrders`}>
                            My Orders
                        </Link>
                        <br />
                        <Link style={style} to={`${url}/manageOrders`}>
                            Manage Orders
                        </Link>
                    </Col>
                    <Col lg={10}>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;