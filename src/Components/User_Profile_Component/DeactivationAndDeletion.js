import React from 'react'
import './css/deactndeletion.css'

function DeactivationAndDeletion() {
  return (
    <div className="deactivation_n_deletion_container">
        <h2>Deactivation and Deletion</h2>
        <p>You can delete your account if you want to take a break from VentureLattice. Please let us know if you want to remove your VentureLattice account permanently</p>

        <div className="choice_box">
            <div className="de_activate_container">
            <input type="radio" id="deactivate" name="deactivate" value="deactivate"/>
            <div className="choice_info">
                <h3>Deactivate Account</h3>
                <h5>This can be temporary</h5>
                <p>Your account will be disabled, and most of the stuff you've shared will be erased, including your name, polls, and posts. </p>
            </div>
            </div>

            <div className="delete_container">
            <input type="radio" id="deactivate" name="deactivate" value="deactivate"/>
            <div className="choice_info">
                <h3>Delete Account</h3>
                <h5>This is permanant</h5>
                <p>You will not be able to retrieve any content or information that you have on VentureLattice if you delete your account.Your ChatRoom communications will be removed as well.</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default DeactivationAndDeletion