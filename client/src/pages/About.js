import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 bout">
          Welcome to <strong>DeviceDepot </strong>, your ultimate destination for top-tier electronic essentials and advanced technology solutions. 
          We are passionate about bringing innovation and reliability to your fingertips, catering to both everyday needs and sophisticated tech aspirations.
          At DeviceDepot, we pride ourselves on being a trusted provider of a wide array of electronic products, including cutting-edge components, accessories, and devices. 
          Our extensive inventory encompasses everything from mobile accessories and computer peripherals to advanced smart home gadgets and professional-grade networking equipment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
