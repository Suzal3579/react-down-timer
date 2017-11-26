import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter, BrowserRouter } from "react-router-dom";

import MainComponent from "MainComponent";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");
$(document).foundation();

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={MainComponent} >
        </Route>
    </BrowserRouter>,
    document.getElementById("app")
);