import React, { Component } from 'react';
import './SignUp.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required!')
})

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <Formik
         initialValues = {{ name: '',password: '', age: '', gender:''}}
         validationSchema={validationSchema} 
         onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
         render={({errors, isSubmitting, handleChange,handleSubmit}) =>(
           <form className="form">
              <div className="container">
                <h1>Sign Up</h1>
                <hr/>
                <label for="email"><b>E-mail:</b></label>
                <input type="text" onChange = {handleChange} name="email"/>
                <div className="form-field-error">{errors.email}</div>

                <label for="psw"><b>Password:</b></label>
                <input type="password" onChange={handleChange} name="psw"/>
                <div className="form-field-error">{errors.password}</div>

                <button type="submit" class="signupbtn" onClick={handleSubmit}>Sign Up</button>
              </div>                 
           </form>
         )}>
        </Formik>
      </div>
    );
  }
}

export default SignUp;
