import React from "react";
import { connect } from "react-redux";
import ServiceListItem from "./ServicesListItem";
import { startSetServices } from "../actions/services";
import { setModalState } from "../actions/modalState";

class ServiceList extends React.Component {
  componentDidMount() {
    this.props.dispatch(startSetServices()).catch(err => {
      console.log(err.response);
      this.props.dispatch(
        setModalState({
          isOpen: true,
          message: err.response && err.response.data.error.description,
          title: "Error!"
        })
      );
    });
  }

  render() {
    return (
      <div className="container container--fluid container--bordered container--no-margin">
        <ul className="services">
          {this.props.services.map((item, index) => (
            <ServiceListItem {...item} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ services, modalState }) => ({
  services,
  modalState
});

export default connect(mapStateToProps)(ServiceList);
