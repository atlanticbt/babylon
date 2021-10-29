import React from "react";
import { useEffect, useState } from "react";
import { getResourceProviders } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const ResourceProviders: React.ComponentType<any> = () => {
    const [resourceProviders, setResourceProviders] = useState({} as any);

    const columns = ["Namespace", "Name"];
    const rows = [];

    async function fetchResourceProviders() {
        try {
            const resp = await getResourceProviders();
            setResourceProviders(resp);
            setResourceProviders(r => {
                console.log(" reasponse : ", r);
            })
            console.log("resourceProviders : ", resourceProviders);
        } catch (err) {
            setResourceProviders({ err: err });
        }
    }


    useEffect(() => {
        fetchResourceProviders()
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>ResourceProviders</h1>

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

export default ResourceProviders;