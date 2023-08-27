import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {videoStore} from "store/videoStore";
import VideoItem from "components/content/videoItem";
import ContentPanel from "components/contentPanel";
import ControlContent from "components/controlPanel/controlContent";

const button = {
    text: "Рекомендовать",
    onClick: () => console.log("Рекомендовать"),
}
const Video = () => {
    const videos = videoStore.videos

    useEffect(() => {
        videoStore.fetchVideos()
            .finally(/*TODO загрузка*/)
    }, [])

    return (
        <>
            <ControlContent button={button}/>
            <ContentPanel>
                {videos && videos.map(item =>
                    <VideoItem key={item.id} item={item}/>
                )}
            </ContentPanel>
        </>
    );
};

export default observer(Video);