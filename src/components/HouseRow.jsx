import React from "react";
import currenyFormatter from "../helpers/currenyFormatter";

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currenyFormatter.format(house.price)}</td>
        </tr>
    );
}

const HouseRowMem = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMem };