import { ShowUserInfo, AddActiveClass, UseLogout } from "../../states/states"

const DashboardNav = () => {

    const {auth, profileImage, capsUsername} = ShowUserInfo();
    const {active, SetActiveClass, activeId} = AddActiveClass();

    const {Logout} = UseLogout();

  return (
    <div className="col-2 dashboard-nav shadow-lg">
        <div className="grid-container h-100">
            <div className="profile-info-cont grid-sub-cont">
                <div className="img-cont shadow-lg info-sub-cont">
                {profileImage === capsUsername|| profileImage === '' ? <div>{capsUsername}</div> : <img src={profileImage} alt="img"></img> }
                </div>
                <div className="profile-details info-sub-cont">
                <p className="username profile-details-sub">
                        {capsUsername}
                    </p>
                    <p className="usertype profile-details-sub">
                        {auth.user.usertype}
                    </p>
                </div>
            </div>
            <div className="menu-items-cont grid-sub-cont">
                <a className="menu-heading cont-items">Menu</a>
                {active.map((a) => (
                    <a key={a.id} onClick={() => SetActiveClass(a.id)} className={`menu-item cont-items ${a.id == activeId ? 'active' : ''}`}>{a.text}</a>
                ))}
            </div>
            <div className="logout-cont grid-sub-cont">
                <div className="logout">
                    <a className="logout-btn" onClick={Logout}>Logout</a>
                </div>
            </div>
        </div>
        {/* <div className="userInfo">
            <div className="profile-cont container-fluid d-flex justify-content-between align-items-center">
                <div className="profile-img shadow-lg">
                    {profileImage === username || profileImage === '' ? <div>{username}</div> : <img src={profileImage} alt="img"></img> }  
                </div>
                <div className="profile-info">
                    <h5 className="username">
                        {username}
                    </h5>
                    <h6 className="usertype">
                        {auth.user.usertype}
                    </h6>
                </div>
            </div>
        </div>
        <div className="menu-Items">
            <h2 className="nav-items-heading">
                Menu
            </h2>
        </div>
        <div className="logout-btn"></div> */}
    </div>
  )
}

export default DashboardNav