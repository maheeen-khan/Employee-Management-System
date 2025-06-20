import React from 'react'
import {Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import SignInSide from '../pages/SignInSide'
import SignUp from '../pages/SignUp'
import DashboardLayoutBasic from '../pages/Dashboard'
import Home from '../pages/Home'
import OrdersPage from '../pages/OrdersPage'
import SalesReportPage from '../pages/SalesReportPage'
import TrafficReportPage from '../pages/TrafficReportPage'
import IntegrationsPage from '../pages/IntegrationsPage'
const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashboardLayoutBasic/>}/>
         <Route path="orders" element={<DashboardLayoutBasic><OrdersPage /></DashboardLayoutBasic>} />
          <Route path="reports/sales" element={<DashboardLayoutBasic><SalesReportPage /></DashboardLayoutBasic>} />
          <Route path="reports/traffic" element={<DashboardLayoutBasic><TrafficReportPage /></DashboardLayoutBasic>} />
          <Route path="integrations" element={<DashboardLayoutBasic><IntegrationsPage /></DashboardLayoutBasic>} />
          {/* <Route index element={<DashboardLayoutBasic />} /> */}
    </Routes>
  )
}

export default AppRoute