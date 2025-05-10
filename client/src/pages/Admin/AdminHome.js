import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success" style={{ fontStyle: 'italic' }}>{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>As an admin, you have complete control over the blood bank management system. Use this dashboard to:</p>
          <ul>
            <li><b>Manage Donor Records</b> – Keep track of blood donors, their availability, and donation history.</li>
            <li><b>Monitor Hospital Requests</b> – Approve and manage blood requests from hospitals in real time.</li>
            <li><b>Oversee Organizations</b> – Manage and collaborate with organizations involved in blood donation drives.</li>
          </ul>
          <p>Your role ensures that life-saving blood reaches those in need promptly. Use the menu on the left to navigate and manage the system efficiently.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
