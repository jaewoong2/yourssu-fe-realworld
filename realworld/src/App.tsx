import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './layouts/Footer';
import SigninForm from './features/auth/components/SigninForm';
import SignupForm from './features/auth/components/SignupForm';
import Header from './layouts/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
