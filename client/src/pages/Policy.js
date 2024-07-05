import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpeg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4 bd-pri">
          <h1 className="h1-pol">Privacy Policy</h1>
          <ul className="ul-pol">
            <li className="li-pol"><strong>Data Collection and Usage:</strong> We collect personal information like name, email, and payment details to process orders and provide services.</li>
            <li className="li-pol"><strong>Cookies:</strong> We use cookies to enhance your experience. You can manage cookie preferences through your browser settings.</li>
            <li className="li-pol"><strong>Data Security:</strong> We use SSL technology and other security measures to protect your information.</li>
            <li className="li-pol"><strong>Third-Party Services:</strong> We may share information with trusted third parties for payment processing and shipping.</li>
            <li className="li-pol"><strong>User Rights:</strong> You can access, update, or delete your personal information and opt-out of marketing communications.</li>
            <li className="li-pol"><strong>Policy Updates:</strong> We may update this policy and will notify you of any changes on this page.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
