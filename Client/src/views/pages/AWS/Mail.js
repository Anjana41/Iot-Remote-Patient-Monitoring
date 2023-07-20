import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CAlert

} from '@coreui/react';


const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted ✅");
};
const FormControl = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const [Email, setEmail] = useState({
        email: "",
        subject:"",
        message: " ",
        file: " ",
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setEmail({ ...Email, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { email, subject, message, file } = Email;
        const res = await fetch("/SmtpEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,subject, message, file
            }),
        });
        setMsg(res.message)
        const data = await res.json();
        if (res.status === 422 || !data) {
            setInvalid(true);
        } else {
            setVisible(true);
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)
        }
    };
    return (
        <form onSubmit={handleSubmit} method="POST">
             <CAlert color="primary" visible={visible}>
            Mail Sended Successfull!!
            </CAlert>
            <CAlert color="danger" visible={invalid}>
            Error in Sending Mail!!
            </CAlert>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Send Patient Report</strong>
                        </CCardHeader>
                        <CCardBody>

                            <CForm>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                                    <CFormInput
                                        type="email"
                                        name="email"
                                        placeholder="receiver@example.com"
                                        value={Email.email}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">Subject</CFormLabel>
                                    <CFormInput
                                        type="subject"
                                        name="subject"
                                        placeholder=""
                                        value={Email.subject}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="mb-3">
                                    <CFormLabel>Message</CFormLabel>
                                    <CFormTextarea
                                        name="message"
                                        rows="3"
                                        value={Email.message}
                                        placeholder="Add Your Message Here!!!"
                                        onChange={handleInputs}>
                                    </CFormTextarea>
                                </div>
                                <div className="mb-3">
                                    {/* <CFormLabel htmlFor="formFileSm"></CFormLabel> */}
                                    <CFormInput onChange={(e) => setEmail({
                                        ...Email, file: e.target.files[0].name
                                    })}  type="file" name="file" id="file" />
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>
            <CButton color="primary" onClick={PostData}>
                Send Mail
            </CButton>
        </form>

    )
}
export default FormControl
