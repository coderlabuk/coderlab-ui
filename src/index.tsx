import * as React from "react";
import * as ReactDOM from "react-dom";

const App = (
    <h1>hello world</h1>
)

const MOUNT_NODE = document.getElementById('app'); 

ReactDOM.render(
    App,
    MOUNT_NODE,
);