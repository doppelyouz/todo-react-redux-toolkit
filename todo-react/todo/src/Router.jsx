import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

import {TodosPage, BasketPage} from './pages'

const Router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Layout />}>
                  <Route index element={<TodosPage />} />
                  <Route path="basket" element={<BasketPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default Router