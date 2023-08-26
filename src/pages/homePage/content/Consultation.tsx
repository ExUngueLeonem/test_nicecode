import React from 'react';
import ControlContent from "components/controlPanel/controlContent";
import ContentPanel from "components/contentPanel";
import ConsultationItem from "components/content/consultationItem";

const Consultation = () => {
    return (
        <>
            <ControlContent/>
            <ContentPanel>
                <ConsultationItem/>
                <ConsultationItem/>
                <ConsultationItem/>
            </ContentPanel>
        </>
    );
};

export default Consultation;