import React, { Component } from 'react';
import readingService from '../../utils/readingService';
import userService from '../../utils/userService';

export default class ReflectionForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: userService.getUser(),
            reading: this.props.readingId,
            reflection: ''
        }
    }
        
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const updatedReading = await readingService.addReflection(this.state);
        this.props.handleUpdateReading(updatedReading)
    }

    render(){
        return(
            <div className='Reflections-leaveOne'>
                <form className='Reflection-form' onSubmit={this.handleSubmit}>
                    <textarea name="reflection" className='reflection-textbox' placeholder='Leave your Reflections here.' value={this.state.reflection} onChange={this.handleChange}></textarea>
                    <br/>
                    <button className='reflection-submitBtn'>Submit Reflection</button>
                </form>
            </div>
        )
    }
}
