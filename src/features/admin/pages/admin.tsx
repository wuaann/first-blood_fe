import React, { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userApi from 'api/userApi';
import bugApi from 'api/bugApi';
import projectApi from 'api/projectApi';

export interface HomeProps {}

function Admin(props: HomeProps) {
  const [userCount, setUserCount] = useState(0);
  const [bugCount, setBugCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const users = await userApi.getAllUser();
        setUserCount(users.length);

        const bugs = await bugApi.getAllBug();
        setBugCount(bugs.length);

        const projects = await projectApi.getAllProjects();
        setProjectCount(projects.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCounts();
  }, []);
    return (
        <>
             <nav>
        <div className="logo-name">
            <div className="logo-image">               
            </div>
            <span className="logo_name">FIB</span>
        </div>

        <div className="menu-items">
            <ul className="nav-links">
                <li><a href="http://127.0.0.1:3000/admin">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Dashboard</span>
                </a></li>
                <li><a href="http://127.0.0.1:3000/useradmin">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Users</span>
                    
                </a></li>
                <li><a href="http://127.0.0.1:3000/projectadmin">
                <i className="uil uil-clipboard-notes"></i>
                    <span className="link-name">Projects</span>
                </a></li>
                <li><a href="http://127.0.0.1:3000/bugadmin">
                    <i className="uil uil-bug"></i>
                    <span className="link-name">Bugs</span>                 
                </a></li>
                <li><a href="#">
                    <i className="uil uil-setting"></i>
                    <span className="link-name">Setting</span>
                </a></li>
             </ul> 
                      
        </div>
    </nav>

    <section className="dashboard">
        <div className="top">
            <i className="uil uil-bars sidebar-toggle"></i>

            <div className="search-box">
                <i className="uil uil-search"></i>
                <input type="text" placeholder="Search here..." />
            </div>
            
        </div>

        <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <i className="uil uil-tachometer-fast-alt"></i>
                    <span className="text">Dashboard</span>
                </div>

                <div className="boxes">
                    <div className="box box1">
                        <i className="uil uil-user"></i>
                        <span className="text">Users</span>
                        <span></span>
                        <span id="users">{userCount}</span>
                    </div>
                    <div className="box box2">
                        <i className="uil uil-clipboard-notes"></i>
                        <span className="text">Projects</span>
                        <span></span>
                        <span id="projects">{projectCount}</span>
                    </div>
                    <div className="box box3">
                        <i className="uil uil-bug"></i>
                        <span className="text">Bugs</span>
                        <span></span>
                        <span id="bugs">{bugCount}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Admin;