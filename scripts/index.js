import { burgerMenuLogic } from "./burger.js"
import { priceRatesLogic } from "./price-rates.js"
import { serviceFilterLogic } from "./service-filters.js"
import { chooseOfficeLogic } from "./contacts-accordeon.js"

burgerMenuLogic();
serviceFilterLogic();
priceRatesLogic();
chooseOfficeLogic();

console.log('Итого: 125/100.\n1) При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2) Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3) В разделе contacts реализован select с выбором городов +25');