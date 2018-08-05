import React from "react";
import { connect } from "react-redux";
import Validator from "validator";
import Select from "react-select";
import {
  startSetEnquiryTypeList,
  startSendContactFormData
} from "../actions/contactForm";
import { setModalState } from "../actions/modalState";
import debounce from "lodash/debounce";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiryType: { name: "Other", label: "Other" },
      enquiryTypeOther: "",
      email: "",
      name: "",
      subject: "",
      description: "",
      file: "",
      imgPrewPath: "",
      errors: {}
    };

    const input = {
      padding: "16px"
    };

    this.colourStyles = {
      control: (styles, state) => ({
        ...styles,
        backgroundColor: "white",
        borderColor: state.isFocused ? "#7c8695" : "#c8cdd5",
        "&:hover": {
          borderColor: "#c8cdd5"
        },
        boxShadow: state.isFocused ? "0 0 20px #e0e2e6" : "none"
      }),
      option: (styles, state) => {
        return {
          ...styles,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "#f4f7fb"
          },
          color: "#010101",
          cursor: "pointer"
        };
      },
      input: styles => ({ ...styles, ...input }),
      dropdownIndicator: styles => ({
        ...styles,
        color: "#bcbec2",
        padding: "15px",
        svg: {
          width: "14px"
        }
      }),
      indicatorSeparator: () => ({ backgroundColor: "none" }),
      valueContainer: styles => ({ ...styles, ...input })
    };
  }

  componentDidMount() {
    this.props.dispatch(startSetEnquiryTypeList()).catch(err => {
      this.props.dispatch(
        setModalState({
          isOpen: true,
          message: err.response && err.response.data.error.description
        })
      );
    });
  }

  enquiryTypeOtherValidate = (enquiryType, enquiryTypeOther) => {
    return new Promise((resolve, reject) => {
      if (enquiryType.name === "Other" && Validator.isEmpty(enquiryTypeOther)) {
        this.setState(
          prevState => ({
            errors: {
              ...prevState.errors,
              enquiryType: "EnquiryType field is required"
            }
          }),
          () => resolve(false)
        );
      } else {
        this.setState(
          prevState => ({
            errors: { ...prevState.errors, enquiryType: undefined }
          }),
          () => resolve(true)
        );
      }
    });
  };

  nameValidate = name => {
    return new Promise((resolve, reject) => {
      if (Validator.isEmpty(name)) {
        this.setState(
          prevState => ({
            errors: {
              ...prevState.errors,
              name: "Name field is required"
            }
          }),
          () => resolve(false)
        );
      } else {
        this.setState(
          prevState => ({
            errors: { ...prevState.errors, name: undefined }
          }),
          () => resolve(true)
        );
      }
    });
  };

  emailValidate = email => {
    return new Promise((resolve, reject) => {
      if (!Validator.isEmail(email)) {
        this.setState(
          prevState => {
            const errMessage = Validator.isEmpty(email)
              ? "Email field is required"
              : "Please enter a valid email address!";
            return {
              errors: {
                ...prevState.errors,
                ...{ email: errMessage }
              }
            };
          },
          () => resolve(false)
        );
      } else {
        this.setState(
          prevState => ({
            errors: { ...prevState.errors, email: undefined }
          }),
          () => resolve(true)
        );
      }
    });
  };

  subjectValidate = subject => {
    return new Promise((resolve, reject) => {
      if (Validator.isEmpty(subject)) {
        this.setState(
          prevState => ({
            errors: {
              ...prevState.errors,
              subject: "Subject field is required"
            }
          }),
          () => resolve(false)
        );
      } else {
        this.setState(
          prevState => ({
            errors: { ...prevState.errors, subject: undefined }
          }),
          () => resolve(true)
        );
      }
    });
  };

  descriptionValidate = desc => {
    return new Promise((resolve, reject) => {
      if (!Validator.isLength(desc, { min: 1, max: 1000 })) {
        const [errMessage, isEmpty] = desc.length
          ? ["Description field should not exceed 1000 characters", false]
          : ["Description field is required", true];
        this.setState(
          prevState => ({
            errors: {
              ...prevState.errors,
              description: errMessage
            }
          }),
          () => resolve({ errMessage, isEmpty })
        );
      } else {
        this.setState(
          prevState => ({
            errors: {
              ...prevState.errors,
              description: undefined
            }
          }),
          () => resolve(true)
        );
      }
    });
  };

  imageFileValidate = (file, filepath) => {
    return new Promise((resolve, reject) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxWidth = 300;
      const maxHeight = 300;
      const maxSize = 5; //MB
      const errMessage = "The photo does not meet the requirements";

      if (!allowedTypes.includes(file.type)) {
        resolve({
          isValid: false,
          errMessage
        });
      } else if (file.size > maxSize * 1024 * 1024) {
        resolve({
          isValid: false,
          errMessage
        });
      } else {
        var img = new Image();
        img.src = filepath;
        img.onload = () => {
          if (img.width > maxWidth || img.height > maxHeight) {
            resolve({
              isValid: false,
              errMessage
            });
          } else {
            resolve({ isValid: true });
          }
        };
      }
    });
  };

  onChangeEnquiryType = selectedOption => {
    this.setState(() => ({ enquiryType: selectedOption }));
    if (selectedOption !== "Other" && this.state.errors.enquiryType) {
      this.enquiryTypeOtherValidate(
        selectedOption,
        this.state.enquiryTypeOther
      );
    }
  };

  onChangeEnquiryTypeOther = e => {
    const enquiryTypeOther = e.target.value;
    this.setState(() => ({ enquiryTypeOther }));
    debounce((enquiryType, enquiryTypeOther) => {
      this.enquiryTypeOtherValidate(enquiryType, enquiryTypeOther);
    }, 250)(this.state.enquiryType, enquiryTypeOther);
  };

  onUploadPhoto = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = e => {
        const pathImg = e.target.result;
        this.imageFileValidate(file, pathImg).then(
          ({ isValid, errMessage }) => {
            if (isValid) {
              this.setState(prevState => {
                if (prevState.file !== file) {
                  return { file, imgPrewPath: pathImg };
                }
              });
            }
            this.setState(prevState => ({
              errors: {
                ...prevState.errors,
                image: isValid ? undefined : errMessage
              }
            }));
          }
        );
      };

      reader.readAsDataURL(file);
    }
  };

  onChangeNameInput = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
    debounce(name => {
      this.nameValidate(name);
    }, 250)(name);
  };

  onChangeEmailInput = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
    debounce(email => {
      this.emailValidate(email);
    }, 1000)(email);
  };

  onChangeSubjectInput = e => {
    const subject = e.target.value;
    this.setState(() => ({ subject }));
    debounce(subject => {
      this.subjectValidate(subject);
    }, 250)(subject);
  };

  onChangeDescription = e => {
    const description = e.target.value;
    this.descriptionValidate(description).then(valid => {
      if (valid || !this.state.description) {
        this.setState(() => ({ description }));
      }
    });
  };

  validateAll = () => {
    const {
      enquiryType,
      enquiryTypeOther,
      name,
      email,
      subject,
      description
    } = this.state;

    return Promise.all([
      this.enquiryTypeOtherValidate(enquiryType, enquiryTypeOther),
      this.nameValidate(name),
      this.emailValidate(email),
      this.subjectValidate(subject),
      this.descriptionValidate(description)
    ]).then(() => {
      if (Object.values(this.state.errors).filter(el => !!el).length === 0) {
        return true;
      } else {
        return false;
      }
    });
  };

  onRemoveImage = () => {
    this.setState(() => ({ imgPrewPath: "", file: null }));
  };

  onSubmit = e => {
    e.preventDefault();
    //Check valid
    this.validateAll().then(success => {
      if (success) {
        let formData = new FormData();
        if (this.state.file) {
          formData.append("file", this.state.file, this.state.file.name);
        }
        formData.append("department", 1);
        formData.append("description", this.state.name);
        formData.append("email", this.state.email);
        formData.append(
          "enquiry_type",
          this.state.enquiryType.name === "Other"
            ? this.state.enquiryTypeOther
            : this.state.enquiryType.name
        );
        formData.append("subject", this.state.subject);
        formData.append("user_name", this.state.name);
        startSendContactFormData(formData)
          .then(res => {
            console.log(res);
            this.props.dispatch(
              setModalState({
                isOpen: true,
                message: res.data.data.message,
                title: "Success"
              })
            );
          })
          .catch(err => {
            this.props.dispatch(
              setModalState({
                isOpen: true,
                message: err.response && err.response.data.error.description,
                title: "Error!"
              })
            );
          });
      }
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form__content">
          <div className="form__message">Fields marked “*” are required</div>
          <div className="form__input-group">
            <label className="form__label">Enquiry Type *</label>
            <Select
              className="form__select"
              value={this.state.enquiryType}
              onChange={this.onChangeEnquiryType}
              isSearchable={false}
              options={this.props.enquiryTypeList}
              styles={this.colourStyles}
            />
          </div>
          {this.state.enquiryType.name === "Other" && (
            <div className="form__input-group">
              <input
                type="text"
                className={
                  "form__input" +
                  (this.state.errors.enquiryType ? " error-input" : "")
                }
                name="enquiryType"
                value={this.state.enquiryTypeOther}
                onChange={this.onChangeEnquiryTypeOther}
              />
              <div className="error-message">
                {this.state.errors.enquiryType}
              </div>
            </div>
          )}
          <div className="form__row">
            <div className="form__input-group form__input-group--r-margin">
              <label className="form__label">Name *</label>
              <input
                type="text"
                className={
                  "form__input" + (this.state.errors.name ? " error-input" : "")
                }
                name="name"
                value={this.state.name}
                onChange={this.onChangeNameInput}
                placeholder="Dentist"
              />
              <div className="error-message">{this.state.errors.name}</div>
            </div>
            <div className="form__input-group">
              <label className="form__label">Email *</label>
              <input
                type="email"
                className={
                  "form__input" +
                  (this.state.errors.email ? " error-input" : "")
                }
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmailInput}
                placeholder="rachelm@gmail.com"
              />
              <div className="error-message">{this.state.errors.email}</div>
            </div>
          </div>
          <div className="form__input-group">
            <label className="form__label">Subject *</label>
            <input
              type="text"
              className={
                "form__input" +
                (this.state.errors.subject ? " error-input" : "")
              }
              name="subject"
              value={this.state.subject}
              onChange={this.onChangeSubjectInput}
            />
            <div className="error-message">{this.state.errors.subject}</div>
          </div>
          <div className="form__input-group">
            <div className="form__row form__row--space-between">
              <label className="form__label">Description *</label>
              <span className="form__label">(0/1000)</span>
            </div>
            <textarea
              className={
                "form__textarea" +
                (this.state.errors.description ? " error-input" : "")
              }
              name="description"
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
            <div className="error-message">{this.state.errors.description}</div>
          </div>
          {!this.state.imgPrewPath && (
            <label htmlFor="addPhoto" className="form__photo">
              <input
                id="addPhoto"
                type="file"
                name="photo"
                onChange={this.onUploadPhoto}
              />
              <div className="form__photo-label">Add photo</div>
              <div className="form__photo-info">
                Minimum size of 300x300 jpeg ipg png 5 MB
              </div>
              <div className="form__photo-info error-message">
                {this.state.errors.image}
              </div>
            </label>
          )}
          {this.state.imgPrewPath && (
            <div className="preview-photo">
              <img src={this.state.imgPrewPath} alt="" />
              <div
                className="close-button preview-photo__close"
                onClick={this.onRemoveImage}
              />
            </div>
          )}
        </div>
        <button className="button button--big">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ enquiryTypeList, modalState }) => ({
  enquiryTypeList: enquiryTypeList.map(({ name }) => ({ name, label: name })),
  modalState
});

export default connect(mapStateToProps)(ContactForm);
