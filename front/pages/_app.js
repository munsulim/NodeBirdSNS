import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType
};
export default NodeBird;
