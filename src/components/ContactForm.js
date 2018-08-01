import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { startSetEnquiryTypeList } from "../actions/enquiryTypeList";
import { setModalState } from "../actions/modalState";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiryType: { name: "Other", label: "Other" }
    };
  }

  componentDidMount() {
    this.props.dispatch(startSetEnquiryTypeList()).catch(err => {
      console.log(err);
      this.props.dispatch(
        setModalState({ isOpen: true, errMessage: err.toString() })
      );
    });
  }

  handleChangeEnquiryType = selectedOption => {
    this.setState(() => ({ enquiryType: selectedOption }));
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    return (
      <form className="form">
        <div className="form__input-group">
          <label>Enquiry Type *</label>
          <Select
            value={this.state.enquiryType}
            onChange={this.handleChangeEnquiryType}
            isSearchable={false}
            options={[this.state.enquiryType, ...this.props.enquiryTypeList]}
          />
        </div>
        {this.state.enquiryType.name === "Other" && (
          <div className="form__input-group">
            <input type="text" className="form__input" name="enquiryType" />
          </div>
        )}
        <div className="form__row">
          <div className="form__input-group">
            <label>Name *</label>
            <input
              type="text"
              className="form__input"
              name="name"
              placeholder="Dentist"
            />
          </div>
          <div className="form__input-group">
            <label>Email *</label>
            <input
              type="email"
              className="form__input"
              name="email"
              placeholder="rachelm@gmail.com"
            />
          </div>
        </div>
        <div className="form__input-group">
          <label>Subject *</label>
          <input type="email" className="form__input" name="subject" />
        </div>
        <div className="form__input-group">
          <div className="form__row">
            <label>Subject *</label>
            <span>(0/1000)</span>
          </div>
          <textarea name="description" cols="30" rows="10" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ enquiryTypeList, modalState }) => ({
  enquiryTypeList: enquiryTypeList.map(({ name }) => ({ name, label: name })),
  modalState
});

export default connect(mapStateToProps)(ContactForm);
