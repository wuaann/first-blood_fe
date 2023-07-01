import React, { useState, useEffect } from 'react';
import './project.css';
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

export default Admin;
