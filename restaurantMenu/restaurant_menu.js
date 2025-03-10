const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const dessertMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index +1} : ${item}</p>`).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

const mainCourseMenuItemsHTML = mainCourseMenu.map((item, index) =>`<p>Item ${index +1}: ${item}</p>`).join('');
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;