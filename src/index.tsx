import * as React from "react";
import * as ReactDOM from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

import { Routes } from './components';


// require('./styles/main.scss')
require("slick-carousel/slick/slick.scss")
require("slick-carousel/slick/slick-theme.scss")

const Application = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
)

const MOUNT_NODE = document.getElementById('app'); 

ReactDOM.render(Application, MOUNT_NODE)

