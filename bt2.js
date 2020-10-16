let str = '91246145';
function convertNumber() {
    let numbers = str.split('');

    for (let x = 1; x < str.length; x++) {
        if ((numbers[x-1] % 2 === 0) && (numbers[x] % 2 === 0)) {
            numbers.splice(x, 0, '-');
        }
    } let result = numbers.join('');
    console.log(result);
}
convertNumber();