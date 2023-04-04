import React from "react";
import App from "../../Layouts/App";

export default function Index({invoices, resxml}) {
    console.log(resxml);
    function exportInvoices(e) {
        e.preventDefault()
    }

    return (
        <App>
            <div className="row">
                <div className="col-12">
                    <div className="row my-3">
                        <div className="col">
                            {/* <button onClick={route('invoice.export')} type="button" class="btn btn-primary">Pobierz CSV</button> */}
                            <a className="btn btn-warning float-end" href={ route('invoice.export') }>Export</a>
                        </div>
                    </div>
                    <div className="ibox ">
                        <div className="ibox-title">
                            <h5>Faktury</h5>
                        </div>
                        <div className="ibox-content">
                            <table className="table">
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
                                    { invoices.map((invoice) => {
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
