import React from "react";
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

import * as constanst from '../../constants/productConst'
import ProductModal from "../productModal";
import addImg from '../../images/add.png'
import './style.css';

class ProductListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            selectProduct: null,
            isShowModal: false
        };
        this.closeModal = this.closeModal.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    componentDidMount() {
        this.setState({ productList: constanst.MOCK_PRODUCT_LIST });
    }

    closeModal() {
        this.setState({ isShowModal: false });
        this.setState({ selectProduct: null });
    }

    updateProduct(product) {
        let index = this.state.productList.findIndex((p) => p.id === product.id)
        if (index > 0) {
            let newProductList = this.state.productList;
            newProductList[index] = product
            this.setState({ productList: newProductList })
        } else {
            let newProductList = this.state.productList;
            newProductList.push(product)
            this.setState({ productList: newProductList })
        }
        this.closeModal();
    }

    addProduct() {
        this.setState({ isShowModal: true });
    }

    editProduct(id) {
        let index = this.state.productList.findIndex((p) => p.id === id)
        this.setState({ selectProduct: this.state.productList[index] })
        this.setState({ isShowModal: true });
    }

    removeProduct(id) {
        let index = this.state.productList.findIndex((p) => p.id === id)
        let newProductList = this.state.productList;
        newProductList.splice(index, 1)

        this.setState({ productList: newProductList })
        alert(`item deleted`)
    }

    headerContent() {
        return (
            <Col>
                <div className="bannerCard">
                    <div className="content">
                        <p>This is the sample shopping web size can support for responsive UI size sm, md, lg. also container feature add, edit and delete item by click on item card</p>
                    </div>
                </div>
            </Col>

        );
    }

    productCard(item) {
        return (
            <Col sm={12} md={6}>
                <div className="card">
                    <Row>
                        <Col>
                            <div className="image">
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    src={item.img}
                                />
                            </div>
                        </Col>
                        <Col>
                            <p className="pname">Name: {item.name}</p>
                            <p>Price: {item.price}฿</p>
                            <p className="pdesc">Description: {item.description}</p>
                            <div className="footer">
                                <Button variant="primary" onClick={() => this.editProduct(item.id)} >edit</Button>
                                <Button style={{ marginLeft: '5px' }} variant="secondary" onClick={() => this.removeProduct(item.id)} >delete</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        );
    }

    addProductCard() {
        return (
            <Col sm={12} md={6}>
                <div className="card" onClick={() => this.addProduct()}>
                    <Row>
                        <Col>
                            <div className="image">
                                <Image
                                    style={{ width: "200x", height: "200px" }}
                                    src={addImg}
                                />
                            </div>
                        </Col>
                        <Col>
                            <p className="pname">Add New Product</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        );

    }

    render = () => (
        <div className="frame">
            <ProductModal show={this.state.isShowModal} onClose={this.closeModal} onConfirm={(p) => this.updateProduct(p)} product={this.state.selectProduct} />

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
                            <div className="title">
                                <label>PRODUCTS</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.productList.map((item, i) => {
                            return this.productCard(item)
                        })}
                        {this.addProductCard()}
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default ProductListComponent;

