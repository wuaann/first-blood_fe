import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // Assume you have a list of projects and each page displays 10 projects
    const totalProjects = 100; // Replace with the actual total number of projects
    const totalPages = Math.ceil(totalProjects / 10);

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <hr />
      <div className="project">
        <div>
          <h1>Projects</h1>
        </div>
        <button className="creactproject">Create Project</button>
      </div>

      <div className="name-lead">
        <div className="name-blood">
          <h4>Name</h4>
        </div>
        <div className="name-lead">
          <h4>Lead</h4>
        </div>
        <div className="name-description">
          <h4>Description</h4>
        </div>
        <div></div>
      </div>
      <div className="line2"></div>
      <div className="information-firstblood">
        <div className="nameblood">
          <div className="nameblood-one">
            <h4>First Blood</h4>
          </div>
          <div className="infomation-user">
            <div className="avatars-useone">
              <img
                src="https://afamilycdn.com/150157425591193600/2020/7/22/jo-29-15954061435372014380172.png"
                width="25px"
                height="25px"
                alt=""
              />
            </div>
            <div className="leads">Dang Minh Quan 678990</div>
            <div className="desc">
              <h6>
                djhsdjhfbdjsfbdjvcm vcn jhdfbvhdfvhdvfdhfvsdvcs
              </h6>
            </div>
          </div>
          <div className="infomation-detail-userone">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className="line1"></div>
      </div>

      <div className="pagination">
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevPage} />
        <span className="pagination-number">{currentPage}</span>
        <FontAwesomeIcon icon={faChevronRight} onClick={handleNextPage} />
      </div>
    </>
  );
}

export default Home;
