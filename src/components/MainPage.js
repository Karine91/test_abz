import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Advertisement from "./Advertisement";
import InfoBlock from "./InfoBlock";
import Footer from "./Footer";
import ServicesList from "./ServicesList";
import ErrorModal from "./ErrorModal";
import { setModalState } from "../actions/modalState";

const MainPage = props => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="row__col row__col--3 row__col--column row__col--width-fixed">
          <Sidebar />
          <div className="info-wrapper">
            <Advertisement image="/images/advertisement.jpg" />
            <InfoBlock
              title="Featured Companies"
              type="companies"
              contentData={props.companies}
            />
            <Footer />
          </div>
        </div>
        <div className="row__col row__col--6 row__col--column row__col--no-padding row__col--width-fluid">
          <div className="section-header">
            <h1 className="section-header__title">Service Directory</h1>
            <button className="button">Add New Service</button>
          </div>
          <ServicesList />
        </div>
        <div className="row__col row__col--3 row__col--column row__col--width-fixed">
          <div className="info-wrapper">
            <InfoBlock
              title="People you may know"
              type="friends"
              contentData={props.friends}
            />
            <InfoBlock
              title="Featured Products"
              type="products"
              contentData={props.products}
            />
            <Advertisement image="/images/advertisement2.jpg" />
          </div>
        </div>
      </div>
    </div>
    <ErrorModal
      modalIsOpen={props.modalState.isOpen}
      handleCloseModal={() => {
        props.dispatch(setModalState({ isOpen: false }));
      }}
      errorMessage={props.modalState.errMessage}
    />
  </div>
);

const mapStateToProps = ({ companies, friends, products, modalState }) => ({
  companies,
  friends,
  products,
  modalState
});

export default connect(mapStateToProps)(MainPage);
