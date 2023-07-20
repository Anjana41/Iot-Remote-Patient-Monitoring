const point = [
    { x: 2, y: 81 },
    { x: 3, y: 83 },
    { x: 4, y: 88 },
    { x: 5, y: 98 },
    { x: 6, y: 92 },
    { x: 7, y: 85 },
    { x: 8, y: 73 },
    { x: 9, y: 71 },
    { x: 10, y: 70 },
    { x: 11, y: 83 },
    { x: 12, y: 73 },
    { x: 13, y: 79 },
    { x: 14, y: 84 },
    { x: 15, y: 78 },
    { x: 16, y: 67 },
    { x: 17, y: 71 },
    { x: 18, y: 76 },
    { x: 19, y: 77 },
    { x: 20, y: 64 },
    { x: 21, y: 53 },
    { x: 22, y: 0 },
    { x: 23, y: 41 },
    { x: 24, y: 51 },
    { x: 25, y: 3 },
    { x: 26, y: 31 },
    { x: 27, y: 37 },
    { x: 28, y: 35 },
    { x: 29, y: 48 },
    { x: 30, y: 40 },
    { x: 31, y: 42 },
    { x: 32, y: 42 },
    { x: 33, y: 32 },
    { x: 34, y: 21 },
    { x: 35, y: 41 },
    { x: 36, y: 48 },
    { x: 37, y: 47 },
    { x: 38, y: 45 },
    { x: 39, y: 42 },
    { x: 40, y: 28 },
    { x: 41, y: 15 },
    { x: 42, y: 1 },
    { x: 43, y: -12 },
    { x: 44, y: -4 },
    { x: 45, y: 15 },
    { x: 46, y: 23 },
    { x: 47, y: 22 },
    { x: 48, y: 40 },
    { x: 49, y: 46 },
    { x: 50, y: 49 },
    { x: 51, y: 48 },
    { x: 52, y: 43 },
    { x: 53, y: 52 },
    { x: 54, y: 49 },
    { x: 55, y: 44 },
    { x: 56, y: 41 },
    { x: 57, y: 41 },
    { x: 58, y: 45 },
    { x: 59, y: 57 },
    { x: 60, y: 67 },
    { x: 61, y: 65 },
    { x: 62, y: 58 },
    { x: 63, y: 47 },
    { x: 64, y: 34 },
    { x: 65, y: 35 },
    { x: 66, y: 23 },
    { x: 67, y: 11 },
    { x: 68, y: 7 },
    { x: 69, y: 14 },
    { x: 70, y: 23 },
    { x: 71, y: 18 },
    { x: 72, y: 31 },
    { x: 73, y: 35 },
    { x: 74, y: 44 },
    { x: 75, y: 49 },
    { x: 76, y: 34 },
    { x: 77, y: 7 },
    { x: 78, y: -3 },
    { x: 79, y: -8 },
    { x: 80, y: -11 },
    { x: 81, y: -20 },
    { x: 82, y: -28 },
    { x: 83, y: -4 },
    { x: 84, y: 15 },
    { x: 85, y: 20 },
    { x: 86, y: 26 },
    { x: 87, y: 26 },
    { x: 88, y: 24 },
    { x: 89, y: 34 },
    { x: 90, y: 35 },
    { x: 91, y: 30 },
    { x: 92, y: 22 },
    { x: 93, y: 12 },
    { x: 94, y: 15 },
    { x: 95, y: 18 },
    { x: 96, y: 24 },
    { x: 97, y: 18 },
    { x: 98, y: 26 },
    { x: 99, y: 25 },
    { x: 100, y: 13 },
    { x: 101, y: 2 },
    { x: 102, y: 1 },
    { x: 103, y: -10 },
    { x: 104, y: -10 },
    { x: 105, y: -4 },
    { x: 106, y: 8 },
    { x: 107, y: 15 },
    { x: 108, y: 15 },
    { x: 109, y: 15 },
    { x: 110, y: 15 },
    { x: 111, y: 18 },
    { x: 112, y: 19 },
    { x: 113, y: 3 },
    { x: 114, y: -12 },
    { x: 115, y: -14 },
    { x: 116, y: -10 },
    { x: 117, y: -22 },
    { x: 118, y: -24 },
    { x: 119, y: -29 },
    { x: 120, y: -21 },
    { x: 121, y: -19 },
    { x: 122, y: -26 },
    { x: 123, y: -9 },
    { x: 124, y: -10 },
    { x: 125, y: -6 },
    { x: 126, y: -8 },
    { x: 127, y: -31 },
    { x: 128, y: -52 },
    { x: 129, y: -57 },
    { x: 130, y: -40 },
    { x: 131, y: -20 },
    { x: 132, y: 7 },
    { x: 133, y: 14 },
    { x: 134, y: 10 },
    { x: 135, y: 6 },
    { x: 136, y: 12 },
    { x: 137, y: -5 },
    { x: 138, y: -2 },
    { x: 139, y: 9 },
    { x: 140, y: 23 },
    { x: 141, y: 36 },
    { x: 142, y: 52 },
    { x: 143, y: 61 },
    { x: 144, y: 56 },
    { x: 145, y: 48 },
    { x: 146, y: 48 },
    { x: 147, y: 38 },
    { x: 148, y: 29 },
    { x: 149, y: 33 },
    { x: 150, y: 20 },
    { x: 151, y: 1 },
    { x: 152, y: -7 },
    { x: 153, y: -9 },
    { x: 154, y: -4 },
    { x: 155, y: -12 },
    { x: 156, y: -3 },
    { x: 157, y: 5 },
    { x: 158, y: -3 },
    { x: 159, y: 12 },
    { x: 160, y: 6 },
    { x: 161, y: -10 },
    { x: 162, y: -2 },
    { x: 163, y: 15 },
    { x: 164, y: 17 },
    { x: 165, y: 21 },
    { x: 166, y: 22 },
    { x: 167, y: 15 },
    { x: 168, y: 16 },
    { x: 169, y: 1 },
    { x: 170, y: -2 },
    { x: 171, y: -9 },
    { x: 172, y: -16 },
    { x: 173, y: -18 },
    { x: 174, y: -15 },
    { x: 175, y: -4 },
    { x: 176, y: 0 },
    { x: 177, y: -1 },
    { x: 178, y: -1 },
    { x: 179, y: -3 },
    { x: 180, y: -12 },
    { x: 181, y: -15 },
    { x: 182, y: -13 },
    { x: 183, y: -16 },
    { x: 184, y: -29 },
    { x: 185, y: -34 },
    { x: 186, y: -28 },
    { x: 187, y: -29 },
    { x: 188, y: -27 },
    { x: 189, y: -25 },
    { x: 190, y: -25 },
    { x: 191, y: -33 },
    { x: 192, y: -38 },
    { x: 193, y: -36 },
    { x: 194, y: -12 },
    { x: 195, y: -7 },
    { x: 196, y: -20 },
    { x: 197, y: -21 },
    { x: 198, y: -14 },
    { x: 199, y: -7 }]




    import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useParams } from "react-router-dom";
import axios from "axios";
// import styles from "./Details.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();


import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CPaginationItem,
  CPagination,
  CCardImage,
  CCardTitle,
  CCardText

} from "@coreui/react";

const Details = () => {
  const [ecg, setECG] = useState([]);
  const [timestamp, setTime] = useState([]);
  let { patientid } = useParams();
  const [Data, setData] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch("/patient/details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patientid,
          }),
        });
        const data = await res.json();
        console.log(data);
        setData(data);
      };
      const getData = async () => {
        const url = 'http://localhost:5000/awsdata';
        try {
          const response = await fetch(url);
          const data = await response.json();
          setECG(data?.map((item) => item.data.M.ECG_Reading.N));
          setTime(data?.map((item) => item.data.M.time.N));
        } catch (error) {
          console.log(error);
        }
      };

      fetchData(); getData();

    },

    []
  );

  var count = 1;
  const series = [ //data on the y-axis
    {
      name: "ECG Reading",
      data: ecg
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'realtime' },
    xaxis: {
      categories: timestamp
    },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
  }
  return (
    <>
      <div className="Post" ref={ref}>
        <CCard>
          {/* <CCol md={4}> */}
          {/* <CCardImage src="/images/react400.jpg" /> */}
          {/* </CCol> */}
          <CCardHeader component="h5">Patient Details</CCardHeader>
          <CCardBody>
            {Data.map((item, index) => (
              <CCardText data-index={index}>
                <CCardText>Name: {item.name}</CCardText>
                <CCardText>Age: {item.age}</CCardText>
                <CCardText>Phone Number: {item.phone}</CCardText>
                <CCardText>Date of Birth: {item.dob}</CCardText>
                <CCardText>Diagnostics: {item.disease}</CCardText>
                <CCardText>Doctor Assigned: {item.doctor}</CCardText>
                <CCardText>Hopital Name: {item.hospital}</CCardText>
                <CCardText>Device ID: {item.deviceid}</CCardText>
                <CCardText>Other Details: {item.details}</CCardText>
                <h4>ECG Graph for Patient: {item.name}</h4>

              </CCardText>
            ))}

          </CCardBody>
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="450"
            height="300"
            position='center'
          />
        </CCard>
      </div>
      <Pdf targetRef={ref} filename="Report.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download Report</button>}
      </Pdf>


    </>

  );

};

export default Details;
