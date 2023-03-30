import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/components/AppHeader.scss";
import { Menu, Drawer, Button, Affix } from "antd";
import {
  MenuOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { navLinks } from "../constants/AppHeaderData";


const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const navigateToPath = (path) => {
    navigate(path);
    setVisible(false);
  };
  return (
    <>
      <div className="main_nav"></div>
      <Affix offsetTop={0}>
        <nav>
          <label className="brand">
            <b>
              <h1>Cmart</h1>
            </b>
          </label>
          <ul className="nav">
            {navLinks.map((item) => (
              <li
                key={item.key}
                className={`nav_items ${
                  location?.pathname === item.path ? "nav-active" : ""
                }`}
              >
                <Link className="links" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <span className="material-symbols-outlined icons nav_items">
                logout
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined icons nav_items">
                search
              </span>
            </li>
            <div className="call_us">
              <div className="callus_icon">
                <span className="material-symbols-outlined call_icon">call</span>
              </div>
              <div className="call_details">
                <p>CALL FREE</p>
                <p>+01-325-2184</p>
              </div>
            </div>
          </ul>
          <Button className="menu_trigger" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </nav>
        <Drawer
          className="menu_option"
          title="CMART"
          placement="left"
          closable={true}
          width={"75%"}
          onClose={onClose}
          open={visible}
        >
          <Menu mode="inline">
            <div className="menu_outline">
              {navLinks.map((item) => (
                <Menu.Item key={item.key} className="nav_items">
                  {/* //use any other tags instead of LInk */}
                  <p
                    style={{ color: "#161616" }}
                    className="links"
                    // to={item.path}
                    onClick={() => navigateToPath(item.path)}
                  >
                    {item.label}
                  </p>
                </Menu.Item>
              ))}
              <Menu.Item className="nav_items">
                <li>
                  <span
                    style={{ padding: "0 16 0 24" }}
                    className="material-symbols-outlined"
                  >
                    logout
                  </span>
                </li>
              </Menu.Item>
              <Menu.Item className="nav_items">
                <li>
                  <span className="material-symbols-outlined">search</span>
                </li>
              </Menu.Item>
            </div>
            <div className="additional_details">
              <span className="menu_details">GET IN TOUCH</span>
              <div className="callus_outer">
                <div className="callus_menu_icon">
                  <span className="material-symbols-outlined call_menu_icon">
                    call
                  </span>
                  <span>09848239238</span>
                </div>
                <div className="callus_menu_icon">
                  <span className="material-symbols-outlined call_menu_icon">
                    mail
                  </span>
                  <span>info.123@gmail.com</span>
                </div>
                <div className="callus_menu_icon">
                  <span className="material-symbols-outlined call_menu_icon">
                    language
                  </span>
                  <span>infotech.com</span>
                </div>
                <div className="icon_details">
                  <div className="icon_menu">
                    <span className="menu_icon_details">GET SOCIAL</span>
                    <div className="icons">
                      <FacebookOutlined
                        className="link_icon"
                        style={{ fontSize: "30px", padding: "5px" }}
                      />
                      <TwitterOutlined
                        className="link_icon"
                        style={{ fontSize: "30px", padding: "5px" }}
                      />
                      <GooglePlusOutlined
                        className="link_icon"
                        style={{ fontSize: "30px", padding: "5px" }}
                      />
                      <LinkedinOutlined
                        className="link_icon"
                        style={{ fontSize: "30px", padding: "5px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Menu>
        </Drawer>
      </Affix>
    </>
  );
};

export default AppHeader;
