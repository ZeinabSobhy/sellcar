import React, { useEffect, useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import VideoPlayer from "react-simple-video-player";
import { postCarRequest } from "../../Api/Details";
import "../Form/style.scss";
import VIDEO from "../../assets/vido/Emirates Auction.mp4";
import poster from "../../assets/images/poster.jpg";
import { DataContext } from "../../context/dataContext";
import { useMediaQuery } from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";
import { LocalizationContext } from "../../context/LocalizationContext";
import DONE_ICON from "../../assets/icons/done.png";
import {Data} from "../../context/Data";
export default function Form() {
  const [MakeModels, SetMakeModels] = useContext(DataContext);
  const [Models, setModels] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [model, setModel] = useState([]);
  
  // const [sent , handleSent] = useContext(data);
  const [sent, handleSent] = useContext(Data);
  const [makes, setMakes] = useState([]);
  const [selectedMakeModels, setSelectedMakeModels] = useState();
  const [error, setError] = useState(false);
  // const [errors, setErrors] = useState(false);
  const [locale, setLocale] = useContext(LocalizationContext);
  const [form, setForm] = useState(false);
  const [formIsValid, setFormIsValid] = useState(null); //ze
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [makers, setMakers] = useState([]);
  const [maker, setMaker] = useState("Please Select A Maker");
  const [item, setItem] = useState("Please Select A Modal");
  // const [formIsValid , setFormIsValid] = useState(false);
  // const [error , setError] = useState({maker:null , model:null , fullName:null , phone:null})
  console.log(MakeModels);
  let history = useHistory();

  function handleClick() {
    history.push("/Form");
  }

  const errorMessage = (msg) => {
    return (
      <div className="error_div">
        <p>{msg}</p>
      </div>
    );
  };
  //ze
  useEffect(() => {
    if (item && phone && name) {
      setFormIsValid(true);
    } else {
      setFormIsValid(null);
    }
  }, [maker, item, phone, name]);
  const handleChangeFullName = (event) => {
    const fullName = event.target.value;
    fullName === "" || fullName === null || /^\d+$/.test(fullName)
      ? setError({ ...error, fullName: true })
      : setError({ ...error, fullName: false });
    setName(fullName);
  };
  const handleChangePhone = (event) => {
    const num = event.target.value;

    num === "" || num === null
      ? setError({ ...error, phone: true })
      : setError({ ...error, phone: false });
    setPhone(num);
  };

  useEffect(() => {
    const edit_data = [];
    MakeModels?.map((d) => {
      edit_data.push(d?.Make);
    });
    setMakes(edit_data);
  }, [MakeModels]);
  //   const handleSubmit = (event) =>  {
  //     event.preventDefault();
  //     if(formIsValid && !error.fullName && !error.phone) {
  //         handlePostRequest({Make:maker , Model:item , PhoneNumber:phone, FullName:name})
  //     }else {
  //         setFormIsValid(false);
  //     }
  // };
  const sendRequest = (value) => handleSent(value);
  const handlePostRequest = (body) => {
    sendRequest(true);
    postCarRequest(body).then(
      (res) => {
        sendRequest(true);
      },
      (error) => {
        sendRequest(null);
      }
    );
  };

  const handleMenuItemClick = (event) => {
    //error

    setSelectedMakeModels(event.target.value);
    let filter = MakeModels.find((d) => d.Make === event.target.value);

    setFiltered(filter.Models);
  };

  const handleSelectedMakeModels = (event) => {
    console.log(event.target.value);
    setModels(event.target.value);
  };
  const handleChangeNumber = (event) => {
    // const regExp = /[a-zA-Z]/g;
    // regExp.test(event.target.value) ? setError(true) : setError(false);
    const num = event.target.value;
    if (num === "" || num === null) {
      setError({ ...error, phone: true });
      setFormIsValid(false);
    } else {
      setError({ ...error, phone: false });
    }
    setPhone(num);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid && !error.fullName && !error.phone) {
      setFormIsValid(true);
      handlePostRequest({
        Make: maker,
        Model: item,
        PhoneNumber: phone,
        FullName: name,
      });
    } else {
      setFormIsValid(false);
    }
  };
  const handleChangeName = (event) => {
    // const regex = /^\d/;
    // regex.test(event.target.value) ? setErrors(true) : setErrors(false);
    const fullName = event.target.value;

    if (fullName === "" || fullName === null || /^\d+$/.test(fullName)) {
      setError({ ...error, fullName: true });
      setFormIsValid(false);
    } else {
      setError({ ...error, fullName: false });
    }
    setName(fullName);
  };

  return (
    <div className="wrapp">
      <div className={locale == "en" ? "title_start" : "title_start_AR"}>
        <span className="startToday_title">
          {" "}
          <FormattedMessage id="startToday.title" />
        </span>
        <span className="startToday_subtitle">
          {" "}
          <FormattedMessage id="startToday.subtitle" />
        </span>
      </div>

      <div
        className={
          locale == "en" ? "continer_form_video" : "continer_form_video_AR"
        }
      >
        <div
          className={locale == "en" ? "continer_video" : "continer_video_AR"}
        >
          <VideoPlayer
            url={VIDEO}
            poster={poster}
            width={560}
            height={314}
            borderRadius={15}
          />
          <div className="text_section">
            <span className="first">
              <FormattedMessage id="startToday.videoSection.first" />
            </span>
            <br />
            <span className="second">
              <FormattedMessage id="startToday.videoSection.second" />
            </span>
            <span className="third">
              {" "}
              <FormattedMessage id="startToday.videoSection.third" />
            </span>
            <br />
            <span className="fourth">
              {" "}
              <FormattedMessage id="startToday.videoSection.fourth" />
            </span>
          </div>
        </div>

        <div className={locale == "en" ? "continer_form" : "continer_form_AR"}>
          {form ? (
            <div className="model">
              <img src={DONE_ICON} />
              <div>
                <span className="title_model">
                  {" "}
                  <FormattedMessage id="startToday.successSection.headline" />
                </span>
                <span className="title_section">
                  {" "}
                  <FormattedMessage id="startToday.successSection.message" />
                </span>
              </div>

              <Button
                className="send_btn"
                onClick={handleClick}
                style={{ backgroundColor: "#ec1c24" }}
                endIcon={<ArrowForwardIosIcon style={{ color: "#ffffff" }} />}
              >
                <span style={{ color: "#ffffff" }}>
                  <FormattedMessage id="startToday.successSection.successBtn" />
                </span>
              </Button>
            </div>
          ) : (
            <div className="zeinab">
              <form
                autoComplete={false}
                onSubmit={(event) => {
                  handleSubmit(event);
                }}
              >
                {formIsValid == null || formIsValid == true ? null : (
                  <div
                    className="error_div"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <p
                      className="error_div_msg"
                      style={{ marginInline: "1rem" }}
                    >
                     <span className="validation_name"> <FormattedMessage id="validation.allFields" /></span>
                    </p>
                  </div>
                )}
                <span className="headline">
                  <FormattedMessage id="startToday.formSection.headline" />
                </span>
                <div className="from">
                  <FormControl>
                    <InputLabel>
                      <span
                        className={
                          locale == "en"
                            ? "label_car_make"
                            : "label_car_make_AR"
                        }
                      >
                        <FormattedMessage id="startToday.formSection.firstLabel" />
                      </span>
                    </InputLabel>
                    <select
                      style={
                        error.maker || formIsValid == false
                          ? {
                              border: "solid 1px #ec1c24",
                              backgroundColor: "rgba(236, 28, 36, 0.04)",
                            }
                          : null
                      }
                      className="select_Car_make"
                      value={selectedMakeModels}
                      onChange={handleMenuItemClick}
                      placeholder={
                        <FormattedMessage id="startToday.formSection.SelectBrand" />
                      }
                    >
                      {makes.map((MakeModels) => (
                        <option value={MakeModels}>{MakeModels}</option>
                      ))}
                    </select>
                  </FormControl>

                  <FormControl>
                    <InputLabel>
                      <span
                        className={
                          locale == "en"
                            ? "label_car_make"
                            : "label_car_make_AR"
                        }
                      >
                        <FormattedMessage id="startToday.formSection.secondLabel" />
                      </span>
                    </InputLabel>

                    <select
                      style={
                        error.model || formIsValid == false
                          ? {
                              border: "solid 1px #ec1c24",
                              backgroundColor: "rgba(236, 28, 36, 0.04)",
                            }
                          : null
                      }
                      className={
                        locale == "en"
                          ? "select_Car_make"
                          : "select_Car_make_AR"
                      }
                      value={selectedMakeModels}
                      onChange={handleSelectedMakeModels}
                    >
                      {filtered.map((Models) => (
                        <option value={Models}>{Models}</option>
                      ))}
                    </select>
                  </FormControl>

                  {error.model
                    ? errorMessage(
                      <span><FormattedMessage id="validation.modelValidation" /></span>  
                      )
                    : null}

                  <span
                    className={locale == "en" ? "headline2" : "headline2_AR"}
                  >
                    <FormattedMessage id="startToday.formSection.headline2" />
                  </span>

                  <div className="name">
                    <FormControl>
                      <label className="label_name" htmlFor={"car_model"}>
                        <FormattedMessage id="startToday.formSection.thirdLabel" />
                      </label>

                      <input
                        value={name}
                        style={
                          error.fullName || formIsValid == false
                            ? {
                                border: "solid 1px #ec1c24",
                                backgroundColor: "rgba(236, 28, 36, 0.04)",
                              }
                            : null
                        }
                        type="text"
                        name="full_name"
                        placeholder={
                          locale == "en"
                            ? "Enter Your  Full Name"
                            : "من فضلك إدخل اسمك"
                        }
                        style={
                          error.fullName
                            ? {
                                border: "solid 1px #ec1c24",
                                backgroundColor: "rgba(236, 28, 36, 0.04)",
                              }
                            : null
                        }
                        className="input_name"
                        id="full_name"
                        onChange={(e) => {
                          handleChangeName(e);
                        }}
                        onBlur={(e) => {
                          handleChangeFullName(e);
                        }}
                      />
                      {error.fullName
                        ? errorMessage(
                            <span className="validation_name">
                              {<FormattedMessage id="validation.name" />}
                            </span>
                          )
                        : null}
                    </FormControl>
                  </div>
                  <FormControl>
                    <label className="label_name" htmlFor={"phone"}>
                      <FormattedMessage id="startToday.formSection.fourthLabel" />
                    </label>

                    <input
                      value={phone}
                      style={
                        error.phone || formIsValid == false
                          ? {
                              border: "solid 1px #ec1c24",
                              backgroundColor: "rgba(236, 28, 36, 0.04)",
                            }
                          : null
                      }
                      type="number"
                      name="phone"
                      placeholder="EX: +972 897 564 34"
                      style={
                        error.phone
                          ? {
                              border: "solid 1px #ec1c24",
                              backgroundColor: "rgba(236, 28, 36, 0.04)",
                            }
                          : null
                      }
                      className="input_name"
                      id="phone"
                      onChange={(e) => {
                        handleChangePhone(e);
                      }}
                      onBlur={(e) => {
                        handleChangeNumber(e);
                      }}
                    />
                    {error.phone
                      ? errorMessage(
                          <span className="validation_phone">
                            <FormattedMessage id="validation.phone" />
                          </span>
                        )
                      : null}
                  </FormControl>

                  <button
                    type="submit"
                    variant="contained"
                    onClick={ handleSubmit}

                    className={locale == "en" ? "btn_submit" : "btn_submit_AR"}
                  >
                    <span className="text_btn">
                      <FormattedMessage id="startToday.formSection.sendBtn" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
