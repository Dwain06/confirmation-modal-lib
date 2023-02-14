import React, { useState } from "react";
import { ConfirmationModal } from "../lib";

const App = () => {

    const [showModal, setShowModal] = useState(false);

    return (
    <div style={{ width: 640, margin: "15px auto", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>Testing confirmation modal library</h1>
        <button onClick={() => setShowModal(true)}>Show modal</button>
        <ConfirmationModal
            showModal={showModal}
            setShowModal={setShowModal}
            textContent="This is your confirmation!"
            btnContent="Ok!"
            clickClose={true}
            escapeClose={true}
            colorModal="grey"
        />
    </div>
)};

export default App;