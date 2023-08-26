import React from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import VideoItem from "components/content/videoItem";

const Video = () => {
    return (
        <>
            <ControlContent/>
            <ContentPanel>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </ContentPanel>
        </>
    );
};

export default Video;