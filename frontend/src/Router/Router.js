// RouterList.js
import React from 'react';
import { Routes, Route, HashRouter as Router, Navigate } from 'react-router-dom';
import List from './index';
import PrivateRoute from './PrivateRouter';

// Recursive function to build routes
function renderRoutes(routes) {
  return routes.map((route, index) => {
    const { path, children, auth, element, ...rest } = route;
    // Check if there is a default child route
    const defaultChild = children && children.find(child => child.index);
    console.log(children);
    // If there are child routes, recursively call the renderRoutes function
    if (children && children.length > 0) {
      return (
        <Route key={path + '-' + index} path={path} element={<PrivateRoute component={element} {...rest} />}>
          {/* If there is a default child route, render it as a child route of the parent route */}
          {defaultChild && <Route index element={<PrivateRoute component={defaultChild.element} {...rest} />} />}
          {/* Recursively render other child routes */}
          {renderRoutes(children)}
        </Route>
      );
    }

    // If there are no child routes, render the route component directly
    return (
      <Route key={path + '-' + index} path={path} element={<PrivateRoute component={element} {...rest} />} />
    );
  });
}

function RouterList() {
  return (
    <Routes>
    {renderRoutes(List)}
    <Route path="*" element={<Navigate to={"/"} />} />
  </Routes>
  );
}

export default RouterList;
