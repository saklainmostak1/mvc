import React from 'react';
import Header from './AdminLayOut/Header';
import Footer from './AdminLayOut/Footer';
import AdminPageList from '../Controller/Admin/AdminPageList';
import { Outlet } from 'react-router-dom';


const AdminTemplate = () => {
    return (
        <div>
            <Header></Header>
            
            <AdminPageList></AdminPageList>
            <Footer></Footer>

        </div>
    );
};

export default AdminTemplate;