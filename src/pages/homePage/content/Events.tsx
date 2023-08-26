import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {eventStore} from "store/eventStore";
import EventItem from "components/content/eventItem";
import ContentPanel from "components/contentPanel";
import ControlContent from "components/controlPanel/controlContent";

const Events = () => {
    const events = eventStore.events

    useEffect(() => {
        eventStore.fetchEvents()
            .finally(/*TODO загрузка*/)
    }, [])

    return (
        <>
            <ControlContent/>
            <ContentPanel>
                {events && events.map(item =>
                    <EventItem key={item.id} item={item} />
                )}
            </ContentPanel>
        </>
    );
};

export default observer(Events);