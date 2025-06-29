import currenyFormatter from "../helpers/currenyFormatter";

const HouseRow = ({house}) => {
    let priceTd;
    if(house.price < 500000)
        priceTd = <td>{currenyFormatter.format(house.price)}</td>;
    else
        priceTd = (
            <td className="text-primary">{currenyFormatter.format(house.price)}</td>
        );
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {priceTd}
        </tr>
    );
}

export default HouseRow;
