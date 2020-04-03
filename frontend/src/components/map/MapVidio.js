import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import myVideo from './moonbucks_map.mp4';


class MapVidio extends Component {
    render() {
        return (
        <div className='map_wrap vidio'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= {myVideo}
                width='90%'
                height='90%'
                controls = {true}
                playing
            />
        </div>
        );
    }
}

export default MapVidio;