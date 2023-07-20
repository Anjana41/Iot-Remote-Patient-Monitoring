import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CSmartTable } from "@coreui/react-pro";
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios";
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
} from "@coreui/react";

const All = () => {
  const [Data, setData] = useState([]);
  const navigate = useNavigate()


  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  const callAboutPage = async () => {
    try {
      const res = await fetch("/api/allusers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log("data:",data);
      setData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  var count = 1;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User List</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            {/* <DocsExample href="components/table#captions"> */}
            <CTable caption="top">
              {/* <CTableCaption>List of users</CTableCaption> */}
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Sr.No.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Role</CTableHeaderCell> */}
                  {/* <CTableHeaderCell scope="col">Last Date of SignIn</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date & Time Admitted</CTableHeaderCell>
                  <CTableHeaderCell scope="col">See Details</CTableHeaderCell> */}

                </CTableRow>
              </CTableHead>
              <CTableBody>
                {Data.map((item, index) => (
                  <CTableRow data-index={index}>
                    <CTableHeaderCell scope="row">{count++}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item._id}</CTableHeaderCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.email}</CTableDataCell>
                    {/* <CTableDataCell>{item.disease}</CTableDataCell> */}
                    {/* <CTableDataCell>{item.date}</CTableDataCell> */}
                      {/* <CTableDataCell>
                      <Link to={`/${item._id}`} activeClassName="active">
                        View Report
                      </Link>
                    </CTableDataCell> */}
                  </CTableRow>
                ))}
                {/* <CPagination aria-label="Page navigation example">
                  <CPaginationItem>Previous</CPaginationItem>
                  <CPaginationItem>1</CPaginationItem>
                  <CPaginationItem>2</CPaginationItem>
                  <CPaginationItem>3</CPaginationItem>
                  <CPaginationItem>Next</CPaginationItem>
                </CPagination> */}
              </CTableBody>
            </CTable>
            {/* </DocsExample> */}
          </CCardBody>
          {/* <div> */}
          <Pagination
            activePage={2}
            itemsCountPerPage={2}
            totalItemsCount={2}
            pageRangeDisplayed={2}
          // onChange={handlePageChange}
          />
          {/* </div> */}
        </CCard>
      </CCol>
    </CRow>

  );
};

export default All;
