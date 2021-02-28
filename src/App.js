import React from 'react'
import { Layout, Card } from "antd"
import './App.less';
import AppHeader from './layout/AppHeader';

const App = () => {
  return (
    <Layout>
      <AppHeader />
      <Layout style={{ height: '100vh' }}>
        <Layout.Header style={{ backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1) " }}>Header</Layout.Header>
        <Layout.Content style={{ padding: '1rem' }}>
          <Card style={{ height: '100%', boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1) " }}>
            Content

          </Card>
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1) " }}>Footer</Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default App
