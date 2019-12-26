import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {register} from '../../actions/auth'
import {createMessage} from '../../actions/messages'

export class Register extends Component {

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    onSubmit = e => {
        e.preventDefault();
        const {username, email,password,password2}= this.state;
        if(password != password2){
            this.props.createMessage({passwordNotMatch:'Passwords do not match'})
        }else 
        {
            const newUser={
                
                username,
                password,
                email,
            }
            this.props.register(newUser);
            this.props.createMessage({registerSuccess:'Registro exitoso!'})

            
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, email, password, password2 } = this.state;
        return (
            <div className="col-md-6 m-auto">

                <div className="card card-body mt-5">
                    <h2 className="text-center">Registro</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />

                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                            />

                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />

                        </div>

                        <div className="form-group">
                            <label>Confirma la contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />

                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Registrar
                            </button>

                        </div>
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to="/login">Conéctate!</Link>
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{register,createMessage})(Register)
