import React from 'react'
import './css/services.css'
import edit from './images/edit.svg'

function Services() {

    let service_providing = "UX/UI Designing";
    let service_rquirement = "Looking for a Developer";
  return (
    <div className="services_component">
        <div className="service_container">
            <div>
            <p className="service_title">Service Providing</p>
            <p className="service_name">{service_providing}</p>
            </div>
            <img className="edit_service" src={edit}/>
        </div>

        <div className="service_container">
            <div>
            <p className="service_title">Service Requirement</p>
            <p className="service_name">{service_rquirement}</p>
            </div>
            <img className="edit_service" src={edit}/>
        </div>
    </div>
  )
}

export default Services