import React from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import EventItem from "components/content/eventItem";

const Events = () => {
    return (
        <>
            <ControlContent/>
            <ContentPanel>
                <EventItem/>
                <EventItem/>
                <EventItem/>
            </ContentPanel>
        </>
    );
};

export default Events;