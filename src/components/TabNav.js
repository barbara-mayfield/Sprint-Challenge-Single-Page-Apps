import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return (
    <Menu>
        <Menu.Item>
            <NavLink to={`/character`} activeClassName="active">
                Characters
            </NavLink>
        </Menu.Item>
        
        <Menu.Item>
            <NavLink to={`/location`} activeClassName="active">
                Locations
            </NavLink>
        </Menu.Item>

        <Menu.Item>
            <NavLink to={`/episode`} activeClassName="active">
                Episodes
            </NavLink>
        </Menu.Item>

      </Menu>
    )
};
