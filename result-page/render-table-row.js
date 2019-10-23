const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};



export const renderTableRow = (car, cart) => {
    
    const tableRow = document.createElement('tr');
    const columnOne = makeTd(car.name);
    const columnTwo = makeTd(cart.quantity);
    const columnThree = makeTd(prettyPrice);
    

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    return tableRow;

};