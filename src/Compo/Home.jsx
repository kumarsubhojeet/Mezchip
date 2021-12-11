import React from "react";
import "../CSS/Home.css";
import bed1 from "../img/bed1.jpg";
import bed2 from "../img/bed2.jpg";
import giftbox from "../img/giftbox.png"

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="home_main">
          <div className="home_header">
            <div className="home_header_wrapper">
              <h5>CART</h5>
              <span className="tags">------</span>
              <h5>DELIVERY</h5>
              <span className="tags">------</span>
              <h5>PAYMENT</h5>
            </div>
          </div>

          <div className="home_body">
            <div className="body_items">
              <div className="b_item1">
                <div className="imgg">
                  <img className="item_img" src={bed1} alt="Error" />
                </div>

                <div className="item_name">
                  <p>Royal Doule Bed</p>
                  <p style={{ color: "#adadad" }}>
                    <span>$</span>46.00
                  </p>
                  <div className="add_btn">
                  <i class="fas fa-minus add"></i>
                  {1}
                    <i class="fas fa-plus add"></i>
                  </div>
                </div>

                <div className="tenure">
                  <p style={{ color: "#adadad" }}>Tenure</p>
                  <p>12 Months</p>
                </div>

                <div className="deposite">
                  <p style={{ color: "#adadad" }}>Deposite</p>
                  <p>Rs. 799</p>
                  <span style={{ color: " #58d68d " }}>Fully refundable</span>
                </div>

                <div className="total">
                  <p style={{ color: "#adadad" }}>Total</p>
                  <p>Rs. 1499</p>
                </div>
              </div>

              <div className="b_item1">
                <div className="imgg">
                  <img className="item_img" src={bed2} alt="Error" />
                </div>

                <div className="item_name">
                  <p>Royal Doule Bed</p>
                  <p style={{ color: "#adadad" }}>
                    <span>$</span>46.00
                  </p>
                  <div className="add_btn">
                  <i class="fas fa-minus add"></i>
                  {1}
                    <i class="fas fa-plus add"></i>
                  </div>
                </div>

                <div className="tenure">
                  <p style={{ color: "#adadad" }}>Tenure</p>
                  <p>12 Months</p>
                </div>

                <div className="deposite">
                  <p style={{ color: "#adadad" }}>Deposite</p>
                  <p>Rs. 799</p>
                  <span style={{ color: " #58d68d " }}>Fully refundable</span>
                </div>

                <div className="total">
                  <p style={{ color: "#adadad" }}>Total</p>
                  <p>Rs. 1499</p>
                </div>
              </div>

              <div className="ContinueShoping">
                  <p>Continue Shoping</p>

                  <h6>Need Help ?</h6>
              </div>


            </div>

            <div className="space">

            </div>

            <div className="pricing">
                <div className="pricing_wrapper">
                    <div className="promo_code">
                        <img src={giftbox} className="giftbox" alt="Error" />
                        <span style={{ color:' #f5b041 '}}>Have a Promo Code</span>
                    </div>

                    <div className="pricing_details">
                        <div className="dt">
                            <p>Monthly Rent</p>
                            <span>Rs 3050</span>
                        </div>

                        <div className="dt">
                            <p>Security Deposit</p>
                            <span>Rs 6799</span>
                        </div>

                        <div className="dt">
                            <p>GST</p>
                            <span>Rs 300</span>
                        </div>

                        <div className="dt">
                            <p>Coupon Discount</p>
                            <span style={{color:'red'}}>- Rs 2,789</span>
                        </div>

                        <div className="dt">
                            <p>Delivery</p>
                            <span style={{color:'#3dbdb6'}}>FREE</span>
                        </div>
                        <hr />

                        <div className="dt">
                            <p style={{fontWeight:'bold'}}>Total Payable</p>
                            <span>Rs 30,000</span>
                        </div>
                        <hr />

                        <div className="order_btn">
                            <p>PLACE ORDER</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
