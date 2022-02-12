import DashboardNav from '../components/dahsboard/dashboardNav'
import DashboardMain from '../components/dahsboard/dashboardMain'
import DashboardSide from '../components/dahsboard/dashboardSide'
import { ModalState } from '../states/states'
import Modal from '../components/modals/modal'
import { SubmitStore, ShowUserInfo } from '../states/states'

const Dashboard = () => {
  const { OpenModal, CloseModal, modalState } = ModalState()
  const { auth, profileImage, capsUsername } = ShowUserInfo()
  const { isLoading, error } = SubmitStore()

  return (
    <div className="container-fluid mainDashboardCont">
      <div className="row">
        {!modalState ? (
          <></>
        ) : (
          <Modal
            closeModal={() => CloseModal()}
            ModalAnimation="enterModal"
          />
        )}
        <DashboardNav
          auth={auth}
          profileImage={profileImage}
          capsUsername={capsUsername}
        />
        <DashboardMain openModal={() => OpenModal()} />
        <DashboardSide />
      </div>
    </div>
  )
}

export default Dashboard
