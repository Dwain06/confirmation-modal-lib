# Confirmation-Modal-Lib

Confirmation-Modal-Lib is a simple React component that allows you to add a customizable modal window to your React application. This component is :

- Fully responsive
- Light and simple
- Customizable : add your own text and color

## View demo

[Application HRnet](https://dwain06.github.io/P14-appli-hrnet/)

## How to install

```
npm install confirmation-modal-lib
```

## How to use

- Import by adding `import { ConfirmationModal } from "confirmation-modal-lib"`.
- Use by adding `<ConfirmationModal />`.
- Display the modal on changing useState to true `const [showModal, setShowModal] = useState(false)`.

### Usage

Here's an example of basic usage:

```js
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
```

### Custom styling

These class selectors allow you to change the appearance :
- `confirmation-modal` : contains background
- `confirmation-modal__msg` : for message container
- `confirmation-modal__msg--close` : to design close button

## Props

| Props name      | Description                                        | Default value                                   | Example value        |
|-----------------|----------------------------------------------------|-------------------------------------------------|----------------------|
| showModal       | Allows you to display the modal                    | false                                           | true                 |
| setShowModal    | Set show modal to true when you want to display it | --                                              | setShowModal(true)   |
| btnContent      | Text inside close button                           | "Close"                                         | "OK"                 |
| textContent     | Text display by the modal                          | "Insert your text here with 'textContent' prop" | "Successfully send!" |
| fadeinDuration  | Fade in at opening in ms                           | 200                                             | 1000                 |
| fadeinDelay     | Delay for the modal appear                         | 0                                               | 200                  |
| fadeoutDuration | Fade out at closing in ms                          | 200                                             | 1000                 |
| fadeoutDelay    | Delay for the modal close                          | 0                                               | 200                  |
| escapeClose     | Allow you to close the modal on press ESC key      | false                                           | true                 |
| clickClose      | Allow you to close the modal by click outside it   | false                                           | true                 |
| colorModal      | Color of the modal                                 | "grey"                                          | "green"              |
| colorTxtModal   | Text color of the modal                            | --                                              | "white"              |
