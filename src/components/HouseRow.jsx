import currenyFormatter from "../helpers/currenyFormatter";

const HouseRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
                {currenyFormatter.format(house.price)}
            </td>
        </tr>
    );
}

export default HouseRow;
