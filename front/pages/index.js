import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "./components/AppLayout";

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css"/>
            </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;