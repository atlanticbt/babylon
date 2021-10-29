import React from "react";
import { useEffect, useState } from "react";
import { getAnarchyRuns } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const AnarchyRuns: React.ComponentType<any> = () => {
    const [anarchyRuns, setAnarchyRuns] = useState({} as any);

    const columns = ["Namespace", "Name", "Runner", "AnarchyGovernor", "AnarchySubject", "AnarchyAction", "Age"];
    const rows = [];

    async function fetchAnarchyRuns() {
        try {
            const resp = await getAnarchyRuns();
            setAnarchyRuns(resp);
            setAnarchyRuns(r => {
                console.log(" reasponse : ", r);
            })
            console.log("anarchyRunss : ", anarchyRuns);
        } catch (err) {
            setAnarchyRuns({ err: err });

        }
    }


    useEffect(() => {
        fetchAnarchyRuns()
    }, []);
    function clickevent() {
        console.log("delte log msg");

    }

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>AnarchyRuns</h1>

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
                        <Td>
                            <DeleteButton onClick={clickevent} />
                        </Td>
                    </Tr>
                </Tbody>
            </TableComposable>

        </div>
    );
}

export default AnarchyRuns;