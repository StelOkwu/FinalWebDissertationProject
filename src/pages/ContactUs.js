import { Button, Badge, Container } from 'react-bootstrap';
import React from 'react';
import '../pages/styles.css';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const {register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Container fluid="md">
            <div className="contactInfo">
            <h2 style={{ textAlign:"center", fontSize:"38px", marginTop:"30px" }}>Contact us and get a Quote</h2>
               <h2 style={{ textAlign:"center" }}> 
                <Badge onClick={""} bg="secondary" style={{ textAlign:"center", height:"60px", fontSize:"36px" }}>
                    Call  40 83 44 55</Badge>
               </h2>
            <p style={{ textAlign:"center", fontSize:"30px"}}>
                Call us and get a non-binding offer. 
                You can also fill out the form and 
                we will contact you to find out more
                 about your wishes.</p>
            </div> 
            <div className="contact-inputinfo">
                <h1 style={{ textAlign:"center", marginTop:"20px" }}>
                    Contact us by sending a Message through our Email</h1>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                 <label style={{ textAlign:"center", fontSize:"20px" }}>Name</label>   
             {/* {errors.user_name && errors.user_name.type === "required" &&
                ( <div role="alert">Name is required</div> )} */}
                <input type="text" name='user_name' placeholder="Name" 
                // maxLength='30' aria-invalid={errors.user_name ? "true" : "false"}
                {...register('name', { required: true })} />  

                <label style={{ textAlign:"center", fontSize:"20px" }}>Email</label>
                 <input type="email" name="user_email" placeholder="Email" {...register('email', { required: true })} />

                 <label style={{ textAlign:"center", fontSize:"20px" }}>Message</label>
                  <textarea type="textarea" name="message" placeholder="Message" 
                  {...register('message', { required: true })} />
              <div className="centerbtn"> 
                <button type="submit" className="contactbtn" style={{ alignContent:"center" }}>Send</button>
                </div> 
             </form>
            </div>
           </Container>
           <Footer />
        </div>
    )}
export default ContactUs;
