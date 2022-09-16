import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './views/homepage/home'
import { store } from './app/store'
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoworkerList from './views/coworkerList/coworkerList'
import AddUserForm from './views/addUserForm/addUserForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<App />} />
          <Route path="/collaborateurs" element={<CoworkerList />} />
          <Route path="/add-user" element={<AddUserForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
