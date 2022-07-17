import React from 'react'
const emailState = {
    email: '',
    error: ''
}
class IsValidEmail extends React.Component {  
    
    constructor(){
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            email : e.target.value
        });
    }
    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    onSubmit(){
        if(this.emailValidation()){
            console.log(this.state);
            this.setState(emailState);
        }
    }
}  
   
export default IsValidEmail;