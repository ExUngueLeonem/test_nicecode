import React, {useEffect} from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import NotePost from "components/content/notePost";
import {noteStore} from "../../../store/noteStore";

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

export default Notes;