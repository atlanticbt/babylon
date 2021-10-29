import React from "react";
import { useEffect, useState } from "react";
import { getResourceHandles } from '@app/api';
import { Link } from 'react-router-dom';

import { DeleteButton } from '@app/Services/DeleteButton';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


const ResourceHandles: React.ComponentType<any> = () => {
    const [resourceHandles, setResourceHandles] = useState({} as any);

    const columns = ["Namespace", "Name", "ResourcePool", "ResourceClaim"];
    const rows = [];

    async function fetchResourceHandles() {
        try {
            const resp = await getResourceHandles();
            setResourceHandles(resp);
            setResourceHandles(r => {
                console.log(" reasponse : ", r);
            })
            console.log("resourceHandles : ", resourceHandles);
        } catch (err) {
            resourceHandles({ err: err });
        }
    }


    useEffect(() => {
        fetchResourceHandles()
    }, []);
    function clickevent() {
        console.log("delte log msg");

    }

    return (
        <div>
            <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "10px" }}>ResourceHandles</h1>

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

export default ResourceHandles;