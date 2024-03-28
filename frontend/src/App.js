import './App.css';
import React, { Suspense } from "react";
import { ImmobilizationFooter, ImmobilizationHeader } from './components/Immobilization';
import WrappedComponents from './components/Immobilization';
import RouterList from './Router/Router';
import { DProvider, useLanguage } from "./context/context";
import { Breadcrumb } from "antd";
import  { useLocation, Link } from 'react-router-dom';


function App() {
  const location = useLocation();

  const generateBreadcrumb = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = pathnames.map((_, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        title: <Link to={url}>{_}</Link>,
      };
    });
    return [
      {
        title: <Link to="/">Home</Link>,
      },
      ...breadcrumbItems,
    ];
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <DProvider>
        <ImmobilizationHeader />
        <div className="container mt-4">
          <Breadcrumb items={generateBreadcrumb()} />
        </div>
        <RouterList />
        <ImmobilizationFooter />
      </DProvider>
    </Suspense>
  );
}
export default App;
