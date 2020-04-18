import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class CreateRepairShopComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            repairShopId: 0,
            shopName: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        };
    }

    handleShopNameChange(event: any) {
        this.setState({
            shopName: event.target.value
        });
    }

    handleAddressChange(event: any) {
        this.setState({
            address: event.target.value
        });
    }

    handleCityChange(event: any) {
        this.setState({
            city: event.target.value
        });
    }

    handleStateChange(event: any) {
        this.setState({
            state: event.target.value
        });
    }

    handleZipChange(event: any) {
        this.setState({
            zip: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const repairShop = {
            shopName: this.state.shopName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };

        const url = "http://localhost:8080/app/repair-shops/add-a-repair-shop";
        Axios.post(url, repairShop);
        alert(`Created Repair Shop: ${this.state.shopName}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-repair-shop-information-background">
                    <h1>Repair Shop Information: Add a Repair Shop</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                    <br></br>
                    <Container className="add-repair-shop-container">
                        <Form>
                            <label>
                                Shop Name:
                            </label>
                            <br></br>
                            <input type="text" className="add-repair-shop-input" value={this.state.shopName} onChange={(event: any) => this.handleShopNameChange(event)} />
                            <br></br>
                            <label>
                                Address:
                            </label>
                            <br></br>
                            <input type="text" className="add-repair-shop-input" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} /><br></br>
                            <label>
                                City:
                            </label>
                            <br></br>
                            <input type="text" className="add-repair-shop-input" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                            <br></br>
                            <label>
                                State
                            </label>
                            <br></br>
                            <input type="text" className="add-repair-shop-input" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                            <br></br>
                            <label>
                                Zip Code:
                            </label>
                            <br></br>
                            <input type="text" className="add-repair-shop-input" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}