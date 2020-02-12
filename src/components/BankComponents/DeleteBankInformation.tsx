import React from 'react';
import { BankTabsComponent } from '../TabsComponents/BankTabsComponent';
import Axios from 'axios';

export class DeleteBankInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            bankid: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            bankid: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted bank with id of ${this.state.bankid}`);
        const url = `http://localhost:8080/app/banks/bank/${this.state.bankid}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-car-information-background">
                        <h1>Bank Information: Delete Bank Information</h1>
                        <hr></hr>
                        <BankTabsComponent />
                        <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" value={this.state.bankid} onChange={(event:any) => this.handleChange(event)}/>
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event:any) => this.handleSubmit(event)}>Delete Bank Information</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}