import React from 'react';
import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx"

const CabinTableOperations = () => {
    return (
        <TableOperations>
            <Filter filterField='discount' options={[
                {value: 'all', label: 'All'},
                {value: 'no-discount', label: 'No Discount'},
                {value: 'with-discount', label: 'With Discount'}
                ]}/>
        </TableOperations>
    );
};

export default CabinTableOperations;