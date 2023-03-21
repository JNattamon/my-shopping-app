import React from "react";
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as constanst from '../../constants/productConst'
import './style.css';

class ProductListComponent extends React.Component {

    handleOnClick() {
        alert("click")
    }

    headerContent() {
        return (
            <Col>
                <div className="card">
                    <div className="container content">
                        <p>This is the sample shopping web size can support for responsive UI size sm, md, lg. also container feature add, edit and delete item by click on item card</p>
                    </div>
                </div>
            </Col>

        );
    }

    productCard(item) {
        return (
            <Col sm={12} md={6} xl={3}>
                <div className="card">
                    <div className="container">
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                        <div className="footer">
                            <Button variant="danger" onClick={() => this.handleOnClick()} >delete</Button>
                            <Button variant="primary" onClick={() => this.handleOnClick()} >edit</Button>
                        </div>
                    </div>
                </div>
            </Col>

        );
    }

    render = () => (
        <div className="frame">
            <div className="header">
                <Container>
                    <Row>
                        {this.headerContent()}
                    </Row>
                </Container>
            </div>
            <div className="body">
                <Container>
                    <Row>
                        <Col>
                            <div className="container title">
                                <h1>Products</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {constanst.MOCK_PRODUCT_LIST.map((item, i) => {
                            return this.productCard(item)
                        })}
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default ProductListComponent;

