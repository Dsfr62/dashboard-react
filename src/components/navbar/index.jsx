import React, { Fragment } from "react";

export const Navbar = () => {
    return (
        <Fragment>
            <a href="/">Logo</a>
            <ul>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </Fragment>
    );
};