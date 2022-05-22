export function div(a, b) {
    let numA = parseInt(a);
    let numB = parseInt(b);
    if(Number.isNaN(numA) || Number.isNaN(numB)) throw new Error('Validate your input')
    if(numB === 0) throw new Error('Impossible division by zero')
    return numA / numB
}