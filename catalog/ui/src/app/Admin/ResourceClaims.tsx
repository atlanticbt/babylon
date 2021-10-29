import React from "react";
import { useEffect, useState } from "react";
import { getResourceclaims } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const ResourceClaims: React.ComponentType<any> = () => {
    const [resourceClaims, setResourceClaims] = useState({} as any);

    const columns = ["Namespace", "Name", "ResourceHandles", "AnarchySubject(s)"];
    const rows = [];

    async function fetchResourceClaims() {
        try {
            const resp = await getResourceclaims();
            setResourceClaims(resp);
            setResourceClaims(r => {
                console.log(" reasponse : ", r);
            })
            console.log("resourceClaims : ", resourceClaims);
        } catch (err) {
            setResourceClaims({ err: err });
        }
    }


    useEffect(() => {
        fetchResourceClaims()
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>ResourceClaims</h1>

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

export default ResourceClaims;