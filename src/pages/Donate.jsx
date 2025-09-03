import { useState } from "react";
import { Link } from "react-router-dom";

function Donate() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="body container">
     
      <div className="nate">
        <Link to="/">HOME</Link> <span> &gt; DONATE</span>
        <h2>Donate</h2>
      </div>

      <div className="d-flex d-donate p-donate">
        {/* LEFT SIDE */}
        <div className="left-d">
          <p>
            Your donation today can help make difference in an inspiring
            entrepreneur's life. We count on donations from people just like you
            to help us continue to keep our prices so low. We are dedicated to
            helping small business owners everywhere.
          </p>
        </div>

        {/* RIGHT SIDE - SLIDER */}
        <div className="right-d">
          <div className="donate-slider">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="donate-box active-step">
                <h2>Donate & Support Our Cause</h2>
                <p className="line"></p>
                <p>
                  Help our organization by donating today! All donations go
                  directly to making a difference for our cause.
                </p>
                <img src="/image/hand.jpg" alt="donate" />
                <button className="butt" onClick={nextStep}>
                  Continue <i className="bi bi-arrow-right-short"></i>
                </button>
                <a className="secure">
                  <i className="bi bi-lock-fill"></i> Secure Donation
                </a>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="donation-box active-step">
                <h2>Choose Amount</h2>
                <p>
                  How much would you like to donate? We make sure your donation
                  goes directly to supporting our cause.
                </p>
                <div className="input-amount">
                  <span>$</span>
                  <input
                    type="number"
                    className="amount-input"
                    defaultValue={100}
                  />
                </div>
                <div className="amount-options">
                  <button>$10</button>
                  <button>$25</button>
                  <button>$50</button>
                  <button className="active">$100</button>
                  <button>$250</button>
                  <button>
                    Custom <br /> Amount
                  </button>
                </div>
                <div className="step-buttons">
                  <button onClick={prevStep} className="back-btn">
                    ← Back
                  </button>
                  <button onClick={nextStep} className="continue-btn">
                    Continue ➜
                  </button>
                </div>
                <a className="secure">
                  <i className="bi bi-lock-fill"></i> Secure Donation
                </a>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="donation-container active-step">
                <h2>Add Your Information</h2>
                <p>
                  Who's giving today? We'll never share this information with
                  anyone.
                </p>
                <div className="form-group">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{ width: "100%", marginBottom: "15px" }}
                />
                <label className="payment-option">
                  <input type="radio" name="payment" />{" "}
                  <span className="paypal">Donate with PayPal</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />{" "}
                  <span className="stripe">
                    Donate with Stripe - Credit Card
                  </span>
                </label>
                <div className="summary">
                  <p>
                    <span>Donation Amount</span> <span>$100</span>
                  </p>
                  <p>
                    <span>Giving Frequency</span> <span>One time</span>
                  </p>
                  <p>
                    <strong>Donation Total</strong> <strong>$100</strong>
                  </p>
                </div>
                <div className="step-buttons">
                  <button onClick={prevStep} className="back-btn">
                    ← Back
                  </button>
                  <button className="donate-btn">Donate Now</button>
                </div>
                <a className="secure donated">
                  <i className="bi bi-lock-fill"></i> Secure Donation
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    
        </div>
      
  );
}

export default Donate;
