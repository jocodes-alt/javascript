let length;
let width;
function calculateArea() {
    length = parseFloat(document.get
('length').value)
    width = parseFloat(document.getElementById('width').value)
    let area = length * width
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}