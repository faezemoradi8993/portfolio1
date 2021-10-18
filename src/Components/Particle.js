import React from 'react'
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { red } from '@material-ui/core/colors';


const Particle = ({theme}) => {
    return (
        <ParticleStyle>
            <Particles
                params={{
                    "particles": {
                        // "color": {
                        //     "value": theme==='dark'?'white':'black'
                        //   },
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 2,
                            "direction": "center",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
        </ParticleStyle>
    )
}
const ParticleStyle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    #tsparticles{
        height: 100%;
    }
    
`
export default Particle
