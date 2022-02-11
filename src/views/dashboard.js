import DashboardNav from "../components/dahsboard/dashboardNav";
import DashboardMain from "../components/dahsboard/dashboardMain";
import DashboardSide from "../components/dahsboard/dashboardSide";
import { ModalState } from "../states/states";
import Modal from "../components/modals/modal";

const Dashboard = () => {

  const {OpenModal, CloseModal ,modalState} = ModalState();

  return (
      <div className="container-fluid mainDashboardCont">
        <div className="row">
        {!modalState ? <></> : <Modal closeModal={() => CloseModal()} ModalAnimation="enterModal"/>}
        <DashboardNav/>
        <DashboardMain openModal={() => OpenModal()}/>
        <DashboardSide/>
        </div>
      </div>);
};

export default Dashboard;
