import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {consultationStore} from "store/consultationStore";
import ContentPanel from "components/contentPanel";
import ControlContent from "components/controlPanel/controlContent";
import ConsultationItem from "components/content/consultationItem";

const Consultation = () => {
    const consultations = consultationStore.consultations

    useEffect(() => {
        consultationStore.fetchConsultations()
            .finally(/*TODO индикатор загрузки*/)
    }, [])

    return (
        <>
            <ControlContent/>
            <ContentPanel>
                {consultations && consultations.map(item =>
                    <ConsultationItem key={item.id} item={item}/>
                )}
            </ContentPanel>
        </>
    );
};

export default observer(Consultation);