import React from "react";
import { Link } from "react-router-dom";

const InvoiceMembership = () => (
  <>
    {/* Header */}
    <header className="invoice_header clearfix">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="invoice_header_main">
              <div className="invoice_header_item">
                <div className="invoice_logo">
                  <Link to="/"><img src="/images/ct_logo.svg" alt="Cursus Logo" /></Link>
                </div>
                <p>Invoice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Invoice Body */}
    <div className="wrapper _bg4586 _new89 p-0">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="invoice_body">
              <div className="invoice_date_info">
                <ul>
                  <li>
                    <div className="vdt-list"><span>Date :</span>10 April 2020</div>
                  </li>
                  <li>
                    <div className="vdt-list"><span>Invoice No :</span>IVIP12023598</div>
                  </li>
                  <li>
                    <div className="vdt-list"><span>Order ID :</span>1258963487</div>
                  </li>
                </ul>
              </div>
              <div className="invoice_dts">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="invoice_title">Invoice</h2>
                  </div>
                  <div className="col-md-6">
                    <div className="vhls140">
                      <h4>To</h4>
                      <ul>
                        <li><div className="vdt-list">Rock William</div></li>
                        <li><div className="vdt-list">133, Dracut</div></li>
                        <li><div className="vdt-list">Massachusetts</div></li>
                        <li><div className="vdt-list">01826</div></li>
                        <li><div className="vdt-list">United States</div></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="vhls140">
                      <h4>Cursus</h4>
                      <ul>
                        <li><div className="vdt-list">Cursus LTD</div></li>
                        <li><div className="vdt-list">#1234, Shahid karnail Singh Nagar,</div></li>
                        <li><div className="vdt-list">Near MBD Mall,</div></li>
                        <li><div className="vdt-list">141001</div></li>
                        <li><div className="vdt-list">Ludhiana </div></li>
                        <li><div className="vdt-list">Punjab </div></li>
                        <li><div className="vdt-list">India </div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice_table">
                <div className="table-responsive-md">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Vat(20%)</th>
                        <th scope="col">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="user_dt_trans">
                            <p>Item Title</p>
                          </div>
                        </th>
                        <td>
                          <div className="user_dt_trans">
                            <p>$79.00</p>
                          </div>
                        </td>
                        <td>
                          <div className="user_dt_trans">
                            <p>$10.00</p>
                          </div>
                        </td>
                        <td>
                          <div className="user_dt_trans">
                            <p>$89.00</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1"></td>
                        <td colSpan="3">
                          <div className="user_dt_trans jsk1145">
                            <div className="totalinv2">Invoice Total : USD $220.00</div>
                            <p>Paid via Paypal</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice_footer">
                <div className="leftfooter">
                  <p>Thanks for buying.</p>
                </div>
                <div className="righttfooter">
                  <button className="print_btn" onClick={() => window.print()}>Print</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default InvoiceMembership;

