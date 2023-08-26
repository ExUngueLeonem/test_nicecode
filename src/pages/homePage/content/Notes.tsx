import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {noteStore} from "store/noteStore";
import NotePost from "components/content/notePost";
import ContentPanel from "components/contentPanel";
import ControlContent from "components/controlPanel/controlContent";

const Notes = () => {
    const notes = noteStore.notes

    useEffect(() => {
        noteStore.fetchNotes()
            .finally(/*TODO загрузка*/)
    }, [])

    return (
        <>
            <ControlContent/>
            <ContentPanel>
                {notes && notes.map(item =>
                    <NotePost key={item.id} item={item}/>
                )}
            </ContentPanel>
        </>
    );
};

export default observer(Notes);