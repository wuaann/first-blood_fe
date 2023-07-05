import React, { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userApi from 'api/userApi';
import { CreateUser } from 'models';
import { useNavigate } from 'react-router-dom';

interface CreateUserProps {}

const CreateUserComponent: React.FC<CreateUserProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<number>(1);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển hướng trang

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create a user object with the form values
      const newUser: CreateUser = {
        email,
        password,
        role,
      };
      console.log('New User:', newUser);

      // Call the createUser API
      const response = await userApi.createUser(newUser);
      console.log('API Response:', response);


    } catch (error) {
      // Handle error if the createUser API request fails
      console.log('Failed to create user:', error);
      window.location.href='http://127.0.0.1:3000/useradmin'

    }
  };

  return (
    <>
      <nav>
        <div className="logo-name">
          <div className="logo-image"></div>
          <span className="logo_name">FIB</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="http://127.0.0.1:3000/admin">
                <i className="uil uil-estate"></i>
                <span className="link-name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="http://127.0.0.1:3000/useradmin">
                <i className="uil uil-user"></i>
                <span className="link-name">Users</span>
              </a>
            </li>
            <li>
              <a href="http://127.0.0.1:3000/projectadmin">
                <i className="uil uil-clipboard-notes"></i>
                <span className="link-name">Projects</span>
              </a>
            </li>
            <li>
              <a href="http://127.0.0.1:3000/bugadmin">
                <i className="uil uil-bug"></i>
                <span className="link-name">Bugs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-setting"></i>
                <span className="link-name">Setting</span>
              </a>
            </li>
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
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(Number(e.target.value))}
                required
              >
                <option value={1}>Dev</option>
                <option value={2}>Admin</option>
                <option value={3}>Tester</option>
              </select>
            </div>

            <button type="submit">Create User</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateUserComponent;
