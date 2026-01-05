import { useState } from "react";
import { Image, Button, Layout, Menu, Drawer, Input, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Container from "../../../components/UI/Container";
import { logo, iconSearch } from "../../../assets/images";
import styles from "./Header.module.css";

const { Header } = Layout;

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NavItems = [
    { id: "1", title: "Find Jobs", route: "/" },
    { id: "2", title: "Top Companies", route: "/companies" },
    { id: "3", title: "Job Tracker", route: "/tracker" },
    { id: "4", title: "My Calendar", route: "/calendar" },
    { id: "5", title: "Documents", route: "/documents" },
    { id: "6", title: "Messages", route: "/messages" },
    { id: "7", title: "Notifications", route: "/notifications" },
  ];

  return (
    <Header className={styles.header}>
      <Container fullWidth className="px-30">
        <div className={styles.inner}>

          <div className={styles.logo}>
            <Image src={logo} preview={false} />
          </div>

          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className={styles.menu}
          >
            {NavItems.map(item => (
              <Menu.Item key={item.route}>
                <Link to={item.route}>{item.title}</Link>
              </Menu.Item>
            ))}
          </Menu>

          <div className={styles.right}>            
            <Input
              placeholder="Search"
              prefix={<Image src={iconSearch} />}
              className={styles.search}
            />

            <Button type="primary" className={styles.cta}>
              Resume Builder
            </Button>

            <Avatar
              size={36}
              src="https://i.pravatar.cc/100"
              className={styles.avatar}
            />

            <Button
              className={styles.mobileBtn}
              type="text"
              onClick={() => setOpen(true)}
            >
              <MenuOutlined />
            </Button>
          </div>

        </div>
      </Container>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Menu mode="vertical" onClick={() => setOpen(false)}>
          {NavItems.map(item => (
            <Menu.Item key={item.id}>
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Header>
  );
};

export default SiteHeader;
