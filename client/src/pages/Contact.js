import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          For any queries or information about our products, feel free to reach out to us. 
          We are available 24/7 to assist you.
          </p>
          <p className="mt-3">
            <BiMailSend /> : help@devicedepot.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-345-6789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
          <p className="text-justify mt-2">
          We look forward to helping you with any questions or concerns you may have.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
