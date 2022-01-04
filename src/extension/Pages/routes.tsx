import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Welcome = lazy(() => import('../Pages/Welcome'));
const Setup = lazy(() => import('../Pages/Setup'));
const SignIn = lazy(() => import('../Pages/SignIn'));
const SignUp = lazy(() => import('../Pages/SignUp'));

export enum OptionRoutes {
  HomePath = '/',
  WelcomePath = '/welcome',
  SetupPath = '/setup',
  SignUpPath = '/sign-up',
  SignInPath = '/sign-in',
}

export function Pages() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={OptionRoutes.WelcomePath} element={<Welcome />} />
        <Route path={OptionRoutes.SetupPath} element={<Setup />} />
        <Route path={OptionRoutes.SignInPath} element={<SignIn />} />
        <Route path={OptionRoutes.SignUpPath} element={<SignUp />} />
      </Routes>
    </Suspense>
  );
}
