import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import Container4 from './Container4';

export const routes: Route[] = [
    {
        path: "logo",
        element: <Header />
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "c2",
        element: <Container2 />
    },
    // {
    //     path: "todo",
    //     element:<Todos />
    {
        path: "footer",
        element:<Footer />
            
    },
    {
        path: "cont4",
        element:<Container4 />
    },
];

export const location = new ReactLocation();