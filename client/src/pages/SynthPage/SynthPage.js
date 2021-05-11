import React, { useContext, useState } from 'react';
import "./SynthPage.css";
import Keyboard from '../../components/Keyboard/Keyboard';
import Button from '../../components/Button/Button';
import Presets from '../../components/Presets/Presets';
import SavePreset from '../../components/Presets/SavePreset';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
import {Box, Container} from '@material-ui/core';
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


    if (!isLoggedIn){
        return <Redirect to="/login"/>
    }
    
    return (
        <SynthContext.Provider value={{attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume}}>
            <Header />
            <Container>
                <Box>
                    <SliderContainer />
                </Box>

                <Box>
                    <SavePreset className="presetBtn" />
                </Box>

                <Box>
                    <Presets className="presetBtn" />
                </Box>

                <Box>
                    <Keyboard />
                </Box>
            </Container>
        </SynthContext.Provider>
    );
}

export default SynthPage;