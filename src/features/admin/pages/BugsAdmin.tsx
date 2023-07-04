import React, { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bugApi from 'api/bugApi';
import { Bug } from 'models/bugs';

export interface HomeProps {}

function BugAd(props: HomeProps) {
  const [bugs, setBugs] = useState<Bug[]>([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await bugApi.getAllBug();
        setBugs(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBugs();
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
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Category Name</th>
                <th>Status Name</th>
                <th>Priority Name</th>
                <th>Title </th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Reporter By</th>
              </tr>
            </thead>
            <tbody>
              {bugs.map((bug) => (
                <tr key={bug.id}>
                  <td>{bug.project_name}</td>
                  <td>{bug.category_name}</td>
                  <td>{bug.status_name}</td>
                  <td>{bug.priority_name}</td>
                  <td>{bug.title}</td>
                  <td>{bug.description}</td>
                  <td>{bug.assignee_name}</td>
                  <td>{bug.reporter_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </section>
        </>
    );
}

export default BugAd;