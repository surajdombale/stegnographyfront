import React from 'react'
import "./Help.css"
const Help = () => {
    const handleSubmit=()=>{
window.alert("feedback sent")
    }
  return (
    <div className="container contact-form">
    <div className="contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
    </div>
    <form onSubmit={handleSubmit} >
        <h3>Drop Us a Message</h3>
       <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" required/>
                </div>
                <div className="form-group">
                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" required/>
                </div>
                <div className="form-group">
                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" required/>
                </div>
                <div className="form-group">
                    <input type="submit" name="btnSubmit" className="btnContact"  value="Send" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *" ></textarea>
                </div>
            </div>
        </div>
    </form>
</div>

  )
}

export default Help
