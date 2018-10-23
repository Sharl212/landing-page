import React from "react";

class PricingTable extends React.Component {
    render() {
        return (
            <div id="pricing" className="section md-padding">
                <div className="container">

                    <div className="row">

                        <div className="section-header text-center">
                            <h2 className="title">Pricing Table</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="pricing">
                                <div className="price-head">
                                    <span className="price-title">Basic plan</span>
                                    <div className="price">
                                        <h3>$9<span className="duration">/ month</span></h3>
                                    </div>
                                </div>
                                <ul className="price-content">
                                    <li>
                                        <p>1GB Disk Space</p>
                                    </li>
                                    <li>
                                        <p>100 Email Account</p>
                                    </li>
                                    <li>
                                        <p>24/24 Support</p>
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <button className="outline-btn">Purchase now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="pricing">
                                <div className="price-head">
                                    <span className="price-title">Silver plan</span>
                                    <div className="price">
                                        <h3>$19<span className="duration">/ month</span></h3>
                                    </div>
                                </div>
                                <ul className="price-content">
                                    <li>
                                        <p>1GB Disk Space</p>
                                    </li>
                                    <li>
                                        <p>100 Email Account</p>
                                    </li>
                                    <li>
                                        <p>24/24 Support</p>
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <button className="outline-btn">Purchase now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="pricing">
                                <div className="price-head">
                                    <span className="price-title">Gold plan</span>
                                    <div className="price">
                                        <h3>$39<span className="duration">/ month</span></h3>
                                    </div>
                                </div>
                                <ul className="price-content">
                                    <li>
                                        <p>1GB Disk Space</p>
                                    </li>
                                    <li>
                                        <p>100 Email Account</p>
                                    </li>
                                    <li>
                                        <p>24/24 Support</p>
                                    </li>
                                </ul>
                                <div className="price-btn">
                                    <button className="outline-btn">Purchase now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PricingTable