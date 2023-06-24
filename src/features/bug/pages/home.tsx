import React from 'react';
import './home.css'

export interface HomeProps {
}

function Home(props: HomeProps) {
    return (
        <>
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

            </div>
            <div className="line1"></div>
            <div className="information-firstblood">
                <div className="nameblood">
                    <div className="nameblood-one">
                        <h4>First Blood</h4>
                    </div>
                    <div className="infomation-user">
                        <div className="avatars-useone">
                            <img
                                src="https://afamilycdn.com/150157425591193600/2020/7/22/jo-29-15954061435372014380172.png"
                                width="20px" height="20px" alt=""/>
                        </div>
                        <div className="leads">Dang Minh Quan</div>
                    </div>
                    <div className="infomation-detail-userone"><i className="fa-solid fa-ellipsis"></i></div>
                </div>
                <div className="line1"></div>
                <div className="nameblood">
                    <div className="nameblood-one">
                        <h4>First Blood</h4>
                    </div>
                    <div className="infomation-user">
                        <div className="avatars-usetow">
                            <img
                                src="https://afamilycdn.com/150157425591193600/2020/7/22/jo-29-15954061435372014380172.png"
                                width="20px" height="20px" alt=""/>
                        </div>
                        <div className="leads">Nguyen Van Bien</div>
                    </div>
                    <div className="infomation-detail-usertow"><i className="fa-solid fa-ellipsis"></i></div>
                </div>
                <div className="line1"></div>


            </div>

            <div className="pagination"></div>
        </>
    );
}

export default Home;