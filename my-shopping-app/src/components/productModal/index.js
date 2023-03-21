import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';

/**
 * props
 * show
 * product
 * onConfirm
 * onClose
 */

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let resultProduct = {
            id: e.target[0].value,
            name: e.target[1].value,
            price: e.target[2].value,
            description: e.target[3].value,
            img: e.target[4].value
        };
        console.log("resultProduct", resultProduct)
        this.props.onConfirm(resultProduct)
    }

    render = () => (
        <Modal show={this.props.show} onHide={this.props.onClose}>
            <Modal.Header closeButton>
                {
                    this.props.product ? <Modal.Title>Edit Product</Modal.Title> : <Modal.Title>Add Product</Modal.Title>
                }
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="productInput">
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control
                            required type="input"
                            placeholder="name"
                            disabled={this.props.product}
                            defaultValue={this.props.product ? this.props.product.id : ""}
                            rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productInput">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            required type="input"
                            placeholder="name"
                            defaultValue={this.props.product ? this.props.product.name : ""}
                            rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productInput">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            required as="input"
                            placeholder="0"
                            defaultValue={this.props.product ? this.props.product.price : ""}
                            rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productInput">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            defaultValue={this.props.product ? this.props.product.description : ""}
                            rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="productInput">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control
                            as="input"
                            placeholder="Image URL"
                            defaultValue={this.props.product ? this.props.product.img : ""}
                            rows={3} />
                    </Form.Group>
                    <Button type="submit" variant="primary">submit item</Button>
                    <Button style={{ marginLeft: "5px" }} variant="secondary" onClick={this.props.onClose}>
                        close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ProductModal;