import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'
import Message from '../components/Message'

import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const handleSubmit = function(event) {
        event.preventDefault()
        dispatch(login(email, password))
    }

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect])

    return (
        <FormContainer>
            <h1>Sign In</h1>
            { error && <Message variant='danger'>{error}</Message> }
            { loading && <Loader /> }
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='your.email@example.com'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New User?
                    <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}
                    >
                    Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
