import React, { useContext, useState } from 'react';
import "./SynthPage.css";
import Keyboard from '../../components/Keyboard/Keyboard';
// import ButtonLogOut from '../../components/ButtonLogOut/ButtonLogOut';
import Presets from '../../components/Presets/Presets';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
import {Grid, Container } from '@material-ui/core';
import LogInContext from "../../utils/LogInContext";
import { Redirect } from 'react-router-dom';
import SynthContext from "../../utils/SynthContext";



const SynthPage = () => {
    const { isLoggedIn } = useContext(LogInContext);
    // here is where we will check out isLoggedIn state to see if the user is allowed to be here or 
    // needs to be redirected to login if the state is false.

    //STATES FOR SYNTH PARAMTERS
    const [attack, setAttack] = useState(0.1);
    const [decay, setDecay] = useState(1);
    const [filter, setFilter] = useState(500);
    const [volume, setVolume] = useState(0.9);


    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }

    return (
        <SynthContext.Provider value={{ attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume }}>

            <Container>

            <Grid >
            <Header className="header" />
            </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={4}>

                         <Presets className="presetBtn"/>

                    </Grid>
                    
                    <Grid item xs={8}>
                        <SliderContainer />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Keyboard className="kb" />
                </Grid>
            </Container>
        </SynthContext.Provider>
    );
}

export default SynthPage;
