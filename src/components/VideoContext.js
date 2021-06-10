import React, {useState, createContext} from 'react';

export const VideoContext = createContext();

export const VideoProvider = props => {
    const [video, setVideo] = useState([]);
    return (
        <VideoContext.Provider value = {[video, setVideo]}>
            {props.children}
        </VideoContext.Provider>
    )
}