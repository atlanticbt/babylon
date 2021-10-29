import React from "react";
import { useEffect, useState } from "react";
import { getAnarchyActions } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import { ComposableTable } from '@app/components/composableTable';


const AnarchyActions: React.ComponentType<any> = () => {
    const [anarchyActions, setAnarchyActions] = useState({} as any);

    const columns = ["Namespace", "Name", "AnarchyGovernor", "AnarchySubject", "AnarchyRun", "Age"];
    const rows = [];

    async function fetchAnarchyActions() {
        try {
            const resp = await getAnarchyActions();
            console.log(" reasponse : ", resp);
            setAnarchyActions(resp);
            // setAnarchyActions(actions => {
            //     console.log(" reasponse : ", actions);
            // })
            return resp;
        } catch (err) {
            setAnarchyActions({ err: err });
        }
    }


    useEffect(() => {
        fetchAnarchyActions()
    }, []);

    function clickevent() {
        console.log("delte log msg");
    }

    console.log("anarchyActions : ", anarchyActions);

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>AnarchyActions</h1>

            <TableComposable aria-label="Actions table">
                <Thead>
                    <Tr>
                        {columns.map((column, cellIndex) => (
                            <Th>
                                {column}
                            </Th>
                        ))}
                        <Th />
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td> </Td>
                        <Td>
                            <DeleteButton onClick={clickevent} />
                        </Td>
                    </Tr>
                </Tbody>
            </TableComposable>

        </div>
    );
}

export default AnarchyActions;


