import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import myVideo from './moonbucks_map.mp4';
import './Map.css';


class MapVidio extends Component {
    render() {
        return (
        <div className='vidio'>
            <div className='text'>배포환경(Heroku)에서 kako Map마커에 인식오류가 있어 잠시 영상으로 대체합니다.</div>
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