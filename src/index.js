import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './components/layouts/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Alerts from './pages/alerts/alerts'
import Dashboard from './pages/dashboard/dashboard'
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
   "fontFamily": `Source Sans Pro`,
   "Color": '#5F6368'
  },
  divider: {
    "border-color": '#5F6368',
    "Color": '#5F6368'
  },
  palette: {
    primary: {
      main: "#5F6368",
    },
    background: {
      default: "#394764"
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={THEME}>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="alerts" element={<Alerts />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);