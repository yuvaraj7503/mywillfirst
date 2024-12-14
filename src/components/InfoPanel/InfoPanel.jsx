import React from 'react'

import { Container, Row, Col, Image } from "react-bootstrap";
import businessman from "../../assets/businessman.jpg";
import "./InfoPanel.css";

import assts from "../../assets/assts.jpeg";
import liab from "../../assets/liab.jpeg";
import bene from "../../assets/bene.jpeg";
import siga from "../../assets/siga.jpeg";
import will from "../../assets/will.jpeg";

const InfoPanel = () => {
  

  return (
    <>
      <Container className="p-3">
        <Row>
          
          <Col md={6} className="d-flex align-items-center">
            <Image
              src={businessman}
              alt="Profile"
              style={{ marginRight: "20px", maxWidth: "40%" }}
            />
            <div>
              <h4 className="py-1">
                <b>Information</b>
              </h4>
              <p>
                <b>D.O.C:</b> 04/12/1988
              </p>
              <p>
                <b>Status</b> Complete
              </p>
            </div>
          </Col>

          
          <Col
            md={3}
            className="d-flex justify-content-center align-items-center border-end"
            style={{ borderRight: "2px solid #ddd" }} 
          >
            <div className="text-center">
              <h4>₹ 2.5 Lakhs</h4>
              <p className="worth-txt">Worth assets today</p>
            </div>
          </Col>

          
          <Col md={3} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h4>₹ 2.5 Lakhs</h4>
              <p className="worth-txt2">Worth liabilities today</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className='asst'>
              <img src={assts} alt=''></img>

              <p> 6 Active Assets <br></br> 4 Inactive Assets</p>
            </div>
          </Col>
          <Col>
          <div className='liab'>
            <img src={liab} alt=''></img>
            <p> 2 Active Liabilites <br></br> 1 Inactive Liabilites</p>

          </div>
          </Col>
          <Col>
          <div className='bene'>
            <img src={bene} alt=''></img>
            <p> 15 Active Benficiaries</p>

          </div>
          </Col>
          <Col>
          <div className='siga'>
            <img src={siga} alt=''></img>
            <p> 2 Active Signatories<br></br>1 Inactive Signatory</p>
          </div>
          </Col>
          <Col>
          <div className='will'>
            <img src={will} alt=''></img>
               <p> Active </p>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InfoPanel







