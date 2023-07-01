import React from "react";
const Header = () => {
  return(
    <>
      <div className="MuiPaper-root MuiPaper-elevation">
            <div className="MuiBox-root css-1b98hg2">
              <a className="MuiBox-root css-cz6ae8" href="/">
                <img className="MuiBox-root css-7txj2x" src="http://hinhdep.com.vn/wp-content/uploads/2012/10/T-va-A.jpg" alt="Brand" />
                
              </a>
            </div>
            <div className="MuiList-root MuiList-padding css-n4phvm-MuiList-root">
              <a className="" href="/dashboard">
                <ol className="MuiListItem-root MuiListItem-padding css-1l9osrx-MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">User</span>
                    </div>
                  </div>
                </ol>
              </a>
              <a className="active" href="/tables" aria-current="page">
                <ol className="MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">Project</span>
                    </div>
                  </div>
                </ol>
                <ol className="MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">Chart</span>
                    </div>
                  </div>
                </ol>
                <ol className="MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">Log out</span>
                    </div>
                  </div>
                </ol>
                
              </a>
            </div>
          </div></>
  )
}
export default Header;