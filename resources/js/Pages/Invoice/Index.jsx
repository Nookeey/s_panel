import React from "react";
import App from "../../Layouts/App";

export default function Index(props) {
    return (
        <App>
            <div className="row">
                <div class="col-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Faktury</h5>
                        </div>
                        <div class="ibox-content">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Nr.</th>
                                        <th>Order ID</th>
                                        <th>Email</th>
                                        <th>Bill Company</th>
                                        <th>Price</th>
                                        <th>Price Netto</th>
                                        <th>Tax</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { props.invoices.map((invoice) => {
                                        return (
                                            <tr key={invoice.inv_id}>
                                                <td>{invoice.inv_number}</td>
                                                <td>{invoice.inv_order_id}</td>
                                                <td>{invoice.inv_email}</td>
                                                <td>{invoice.inv_bill_company}</td>
                                                <td>{invoice.inv_price}</td>
                                                <td>{invoice.inv_price_net}</td>
                                                <td>{invoice.inv_tax}</td>
                                            </tr>
                                        )
                                    }) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
