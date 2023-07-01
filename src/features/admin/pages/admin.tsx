import React, { useState, useEffect } from 'react';
import './project.css';
import React, { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Header from 'features/bug/pages/components/header';

interface Project {
  id: number;
  Projectname: string;
  email: string;
  project: string;
  username: string;
}
import userApi from 'api/userApi';
import bugApi from 'api/bugApi';
import projectApi from 'api/projectApi';

export interface HomeProps {}

const Admin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://your-laravel-api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleDeleteProject = async (id: number) => {
    try {
      await fetch(`https://your-laravel-api/projects/${id}`, {
        method: 'DELETE',
      });
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1">
          <Header />
        </div>
        <div className="col-sm-11">
          <table className="table">
          <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <th scope="row">{project.id}</th>
                  <td>{project.username}</td>
                  <td>{project.email}</td>
                  <td>{project.project}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="btn btn-primary btn-sm" title="Add">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className="btn btn-danger btn-sm" title="Delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
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