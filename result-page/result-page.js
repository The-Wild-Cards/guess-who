import { loadProfile, getComputerCharacter, findById } from '../common/utils.js';
import { renderTableRow } from './render-table-row.js';

//gets user's name
loadProfile(); 

const computerCharacterImage = document.getElementById('correct-face');
const characterId = getComputerCharacter();
computerCharacterImage.src = ('../assets/faces/' + characterId + '.png');

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));
const addRows = (cart, cars) => {
    cart.forEach(carOrder => {
        addRow(carOrder, cars);
    });
};

const buildTotalCell = (cart, cars) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcCartTotal(javascriptReadableCart, cars);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};
const tableElement = document.querySelector('tbody');

const addRow = (carOrder, cars) => {
    
    const orderCar = findItemById(cars, carOrder.id);
    // const actualOrder = calcLineTotal(carOrder.quantity, orderCar.price);

    const row = renderTableRow(orderCar, carOrder);
    tableElement.appendChild(row);
    

};
const buildTable = (cart, cars) => {
    addRows(cart, cars);
    buildTotalCell(cart, cars);
};
// calcLineTotal(javascriptReadableCart.quantity, javascriptReadableCart.price);
buildTable(javascriptReadableCart, dataCars);

