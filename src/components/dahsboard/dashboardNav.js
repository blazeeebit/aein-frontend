import { AddActiveClass, UseLogout } from "../../states/states"

const DashboardNav = (props) => {

    const {active, SetActiveClass, activeId, setActiveId} = AddActiveClass();

    const auth = props.auth;
    const profileImage = props.profileImage;
    const capsUsername = props.capsUsername;

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
                <p className="menu-heading cont-items">Menu</p>
                {active.map((a) => (
                    <a key={a.id} onClick={() => SetActiveClass(a.id,setActiveId)} className={`menu-item cont-items ${a.id == activeId ? 'active' : ''}`}>{a.text}</a>
                ))}
            </div>
            <div className="logout-cont grid-sub-cont">
                <div className="logout">
                    <a className="logout-btn" onClick={Logout}>Logout</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav