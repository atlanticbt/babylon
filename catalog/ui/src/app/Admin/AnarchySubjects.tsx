import React from "react";
import { useEffect, useState } from "react";
import { getAnarchySubjects } from '@app/api';
import { Link } from 'react-router-dom';
import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const AnarchySubjects: React.ComponentType<any> = () => {
    const [anarchySubjects, setAnarchySubjects] = useState({} as any);

    const columns = ["Namespace", "Name", "Governor", "ResourceHandle", "ResourceClaim", "Current State", "Desired State", "Created", "Deleted"];
    const rows = [];

    async function fetchAnarchySubjects() {
        try {
            const resp = await getAnarchySubjects();
            setAnarchySubjects(resp);
            setAnarchySubjects(subjects => {
                console.log(" reasponse : ", subjects);
            })
            console.log("anarchysubjects : ", anarchySubjects);
        } catch (err) {
            setAnarchySubjects({ err: err });
        }
    }


    useEffect(() => {
        fetchAnarchySubjects()
    }, []);
  
    function clickevent() {
        console.log("delte log msg");

    }

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>AnarchySubjects</h1>

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
                        <Td></Td>
                    </Tr>
                </Tbody>
            </TableComposable>

        </div>
    );
}

export default AnarchySubjects;