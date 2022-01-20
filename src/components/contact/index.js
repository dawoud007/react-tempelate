import React from 'react'
import {Drop,DropTitle,Span,Form,Input,FormInput,InputText,InputEmail,Sub,TextArea,InputSubmit} from './style.js'
const Contact =(props)=>
{

  return (
    <Drop>
                <div class="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <Form>
                        <FormInput>
                            <InputText type="text" placeholder="Your Name"/>
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <Sub type="text" placeholder="Your Subject"/>
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </Drop>
);

}
export default Contact;
