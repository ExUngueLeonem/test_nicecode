import React from 'react';
import {observer} from "mobx-react-lite";
import {clientStore} from "store/clientStore";
import ClientItem from "../clientItem";

const ClientList = () => {
    const filteredClients = clientStore.filteredClients
    return (
        <>
            {filteredClients && filteredClients.map(item => <ClientItem key={item.id} item={item}/>)}
        </>
    );
};

export default observer(ClientList);