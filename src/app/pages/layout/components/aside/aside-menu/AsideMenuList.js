/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../../_metronic/_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Modules</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/workflow">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">Work Flow</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">eCommerce</span>
                </span>
              </li>
              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/workflow/dashBoardworkFlow"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/workflow/dashBoardworkFlow">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Dashboard</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/workflow/create"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/workflow/create">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Create</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
        <li className="menu-section ">
          <h4 className="menu-text">Manage</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">Role Management</span>
          </NavLink>
        </li>

        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">User Management</span>
          </NavLink>
        </li>   
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
