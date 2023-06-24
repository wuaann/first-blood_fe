
import './header.css'
export function Header() {
    return (
        <>
            <div className="header">
                <div className="nameproject">FIB</div>
                <div className="titleproject">Project
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="titleprojects">Project
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <button className="creact">Creact</button>
                <div className="function">
                    <div className="iconsitting"><i className="fa fa-gear" ></i></div>
                    <div className="iconavatar"><i className="fa-solid fa-circle-user"></i></div>
                </div>
            </div>
        </>
    )
}