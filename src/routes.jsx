import React from "react";
import { Route, Routes } from 'react-router-dom';

import DashboardScreen from "./screens/dashboardScreen";
import AddProjectScreen from "./screens/addProjectScreen";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={ <DashboardScreen /> }/>
            <Route element={ <DashboardScreen /> } path="dashboard"/>
            <Route element={ <AddProjectScreen /> } path="new"/>    
            <Route path="*" element={<p>There's nothing here!</p>}/>            
        </Routes>
    );
};

export default Rotas;