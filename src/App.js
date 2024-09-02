import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Content from "./components/content";
import Modal from "./components/modal";

function App() {

    return (
        <div>
            <Header />
            <div style={{display : 'flex'}}>
                <Nav />
                <Content />
            </div>

            <Modal></Modal>
        </div>
    );
}

export default App;
