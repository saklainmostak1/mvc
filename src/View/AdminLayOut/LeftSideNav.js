import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    return (
        <div className=''>
             {/* <div className="drawer-side " >
                <label htmlFor="my-drawer" className=" drawer-overlay "></label>
                <ul className="menu p-4 w-80 lg:mt-[-25px] h-full bg-base-200 text-base-content">
                    <LeftSideNav></LeftSideNav>
                </ul>

            </div> */}
        <ul className="menu h-full p-4 w-80 lg:mt-[-25px]  bg-base-200 text-base-content">
            <li>
                <Link
                    to={`api/all-admin`}>
                    Admin Page List
                </Link>
            </li>
            <li>
                <Link to='/api/all-users'>
                    All Users 
                </Link>
            </li>
            <li>
                <Link to='/api/all-user/user-role'>
                    User Role
                </Link>
            </li>
            <li>
                <Link to='/api/all-user/permission-list'>
                    User Role Permission
                </Link>
            </li>
        </ul>
    </div>
    );
};

export default LeftSideNav;