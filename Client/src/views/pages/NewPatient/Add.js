import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert
} from "@coreui/react";
import $ from 'jquery';

import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("form submitted ✅");
};
const Register = () => {
  const [userData, setUserData] = useState();
  const [userList, setList] = useState();
  const [visible, setVisible] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const user = await res.json();
      console.log(user);
      setUserData(user._id);
      console.log(userData);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');

    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);

  // const [user, setUser] = useState({
  //   listname: "",
  //   emails: "",
  //   userid: ""
  // });

  let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setUser({ ...user, [name]: value, userid: userid.value});
  // };
  let userid;
  const [Data, setData] = useState({
    userid:"",
    name: "",
    age: "",
    email: "",
    phone:"",
    dob:"",
    disease:"",
    doctor:"",
    hospital:"",
    deviceid:"",
    details:""
  });
  const handle = (e) => {

    name = e.target.name;
    value = e.target.value;
    setData({ ...Data, [name]: value, userid: userid.value });
    // console.log(Data);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const userid = Data.userid;
    const name = Data.name;
    const age = Data.age;
    const email = Data.email;
    const phone = Data.phone;
    const dob = Data.dob;
    const disease = Data.disease;
    const doctor = Data.doctor;
    const hospital = Data.hospital;
    const deviceid = Data.deviceid;
    const details = Data.details;

    const res = await fetch("/api/Patient-Data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
    name,
    age,
    email,
    phone,
    dob,
    disease,
    doctor,
    hospital,
    deviceid,
    details
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      setInvalid(true);
    } else {
      setVisible(true);
      setTimeout(() => {
        navigate("/all-patients");
      }, 3000)
    }
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
        <CAlert color="primary" visible={visible}>
            Patient Added Successfully!!
            </CAlert>
            <CAlert color="danger" visible={invalid}>
            Error Please Fill all the fields properly!!
            </CAlert>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Add Patient</h1>
                    <h6>Name</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="name"
                        placeholder="Patient Name"
                        type="text"
                        value={Data.name}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Age</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="age"
                        placeholder="Patient Age"
                        type="text"
                        value={Data.age}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Email</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="email"
                        placeholder="Patient Email"
                        type="text"
                        value={Data.email}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Phone</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="phone"
                        placeholder="Patient Phone Number"
                        type="text"
                        value={Data.phone}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>DOB</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="dob"
                        placeholder="Patient DOB"
                        type="text"
                        value={Data.dob}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Diagnostics</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="disease"
                        placeholder="Patient Diagnostics"
                        type="text"
                        value={Data.disease}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Doctor Assign</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="doctor"
                        placeholder="Assign Doctor"
                        type="text"
                        value={Data.doctor}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Hopital</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="hospital"
                        placeholder="Hospital Name"
                        type="text"
                        value={Data.hospital}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Device ID</h6>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="deviceid"
                        placeholder="Device ID"
                        type="text"
                        value={Data.deviceid}
                        onChange={handle}
                      />
                    </CInputGroup>
                    <h6>Any Other Details For Doctor</h6>
                    <CInputGroup className="mb-3">
                      <CFormTextarea
                        value={Data.details}
                        id="details"
                        onChange={handle}
                        name="details"
                        placeholder="About Patient"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="hidden"
                        value={userData}
                        name="userid"
                        id="userid"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="primary" onClick={PostData}>
                        Add Patient
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </form>
  );
};


export default Register;
