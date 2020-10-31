import React from "react";
import '../App.css';
import '../styles/CheckOut.css';

class InfoForm extends React.Component {

    render() {
        let {values, onInfoChange, formValidate} = this.props
        const {name, phone, mail} = formValidate
        return (
            <>
                <div>
                    <label>Name</label>
                    <input value={values.name} onChange={(e) => onInfoChange(e)} name="name" placeholder="Enter your name" type="text" formNoValidate/>
                    {name.length !== 0 && 
                    (<p className="error">{name}</p>)}
                </div>
                
                <div>
                    <label>Phone</label>
                    <input value={values.phone} onChange={(e) => onInfoChange(e)} name="phone" placeholder="Enter your phone number" type="text" formNoValidate/>
                    {phone.length !== 0 && 
                    (<p className="error">{phone}</p>)}
                </div>
                
                <div>
                    <label>Mail</label>
                    <input value={values.mail} onChange={(e) => onInfoChange(e)} name="mail" placeholder="Enter your mail" type="email" formNoValidate/>
                    {mail.length !== 0 && (<p className="error">{mail}</p>)}
                </div>
            </>
           
        )
    }
};

export default InfoForm;