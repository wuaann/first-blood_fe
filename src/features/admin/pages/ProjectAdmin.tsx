import React, { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectApi from 'api/projectApi';
import {Project, ProjectAdmin} from 'models';

export interface HomeProps {}

function ProjectAd(props: HomeProps) {
  const [projects, setProjects] = useState<ProjectAdmin[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectApi.getAllProjects();
        setProjects(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
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
                <th>Description</th>
                <th>Created By</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.project_name}</td>
                  <td>{project.description}</td>
                  <td>{project.create_by}</td>
                  <td>{project.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </section>
        </>
    );
}

export default ProjectAd;