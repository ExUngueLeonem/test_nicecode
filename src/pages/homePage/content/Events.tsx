import React, {useEffect} from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import EventItem from "components/content/eventItem";
import {eventStore} from "store/eventStore";
import {observer} from "mobx-react-lite";

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