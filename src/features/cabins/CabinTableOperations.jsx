import React from 'react';
import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx"
import SortBy from "../../ui/SortBy.jsx";

const CabinTableOperations = () => {
    return (
        <TableOperations>
            <Filter filterField='discount' options={[
                {value: 'all', label: 'All'},
                {value: 'no-discount', label: 'No Discount'},
                {value: 'with-discount', label: 'With Discount'}
                ]}/>

            <SortBy options={[
                {value:'name-asc',label:'Sort by name (A-Z)'},
                {value:'name-desc',label:'Sort by name (Z-A)'},
                {value:'regularPrice-asc',label:'Sort by Price (low to high)'},
                {value:'regularPrice-desc',label:'Sort by Price (high to low)'},
                {value:'maxCapacity-asc',label:'Sort by capacity (low to high)'},
                {value:'maxCapacity-desc',label:'Sort by capacity (high to low)'},
            ]}/>
        </TableOperations>
    );
};

export default CabinTableOperations;