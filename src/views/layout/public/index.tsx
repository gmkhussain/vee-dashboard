import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";

const { Content } = Layout;

const PublicLayout: React.FC = () => {
  return (
    <Layout>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>)
}

export default PublicLayout