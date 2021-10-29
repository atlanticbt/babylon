import React from "react";
import { useEffect, useState } from "react";
import { getResourcepools } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const ResourcePools: React.ComponentType<any> = () => {
    const [resourcePools, setResourcePools] = useState({} as any);

    const columns = ["Namespace", "Name", "Min", "Available"];
    const rows = [];

    async function fetchResourcePools() {
        try {
            const resp = await getResourcepools();
            setResourcePools(resp);
            setResourcePools(r => {
                console.log(" reasponse : ", r);
            })
            console.log("ResourcePools : ", resourcePools);
        } catch (err) {
            setResourcePools({ err: err });

        }
    }


    useEffect(() => {
        fetchResourcePools()
    }, []);
    
    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>ResourcePools</h1>

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

export default ResourcePools;
