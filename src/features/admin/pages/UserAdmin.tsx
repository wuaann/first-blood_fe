import React, { useState, useEffect } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userApi from 'api/userApi';
import { User } from 'models';

export interface HomeProps {}

function UserAdmin(props: HomeProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.getAllUser();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [isDeleting]);

  const handleDeleteUser = async (userId: number) => {
    try {
      setIsDeleting(true); // Bắt đầu xóa

      // Gọi API xóa người dùng với userId
      await userApi.deleteUser(userId);

      // Sau khi xóa thành công, cập nhật danh sách người dùng bằng cách loại bỏ người dùng đã bị xóa khỏi mảng users.
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      setIsDeleting(false); // Kết thúc xóa
    } catch (error) {
      console.log(error);
    }
  };

  const getUserRole = (role: number) => {
    if (role === 1) {
      return 'dev';
    } else if (role === 3) {
      return 'tester';
    } else if (role === 2) {
      return 'admin';
    }
    return '';
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
          <button className="btn btn-success">
            <a href="http://127.0.0.1:3000/createuser">Create User</a>
          </button>
          {users.length === 0 && !isDeleting && <div>No users found.</div>}
          {users.length > 0 && (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{getUserRole(parseInt(user.role))}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>

                    <td style={{ display: 'flex' }}>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
}

export default UserAdmin;
