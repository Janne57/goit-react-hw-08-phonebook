import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Contacts from './/Contacts/Contacts.js';
// import ContactForm from './ContactForm/ContactForm.js';
// import Filter from './Filter/Filter.js';
// import css from './/App.module.css';
import Layout from './Layout/Layout.js';
import { useDispatch } from 'react-redux';
// import { useLayoutEffect } from 'react';
import { refreshUser } from '../redux/auth/auth-operations.js';
import { RestrictedRoute } from './RestrictedRoute.js';
import { PrivateRoute } from './PrivateRoute.js';

const HomePage = lazy(() => import('..//pages/Home'));
const RegisterPage = lazy(() => import('..//pages/Register'));
const LoginPage = lazy(() => import('..//pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
        <RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />
        } />

        <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} /> } 
        />

        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} /> } 
        />
      </Route>
    </Routes>
  );
};

export default App;

