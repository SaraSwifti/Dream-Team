import React, { useContext } from 'react';
import "./SynthPage.css";
import Keyboard from '../../components/Keyboard/Keyboard';
import Presets from '../../components/Presets/Presets';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';
import LogInContext from "../../utils/LogInContext";
import { Redirect } from 'react-router-dom';

const SynthPage = () => {
    const { isLoggedIn } = useContext(LogInContext);
    // here is where we will check out isLoggedIn state to see if the user is allowed to be here or 
    // needs to be redirected to login if the state is false.

     if (!isLoggedIn){
        return <Redirect to="/login"/>
    }
    
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <SliderContainer />
                </Row>

                <Row>
                    <Presets />
                </Row>

                <Row>
                    <Keyboard />
                </Row>
            </Container>
        </>
    );
}

export default SynthPage;