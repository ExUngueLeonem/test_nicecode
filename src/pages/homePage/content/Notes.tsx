import React from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import NotePost from "components/content/notePost";

const Notes = () => {
    return (
        <>
            <ControlContent/>
            <ContentPanel>
                <NotePost/>
                <NotePost/>
                <NotePost/>
                <NotePost/>
                <NotePost/>
            </ContentPanel>
        </>
    );
};

export default Notes;