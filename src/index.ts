// typ assertion
type KgType = string | number | undefined
function kgToGram(value: KgType): KgType {
    if (typeof value == 'number') {
        return value * 1000
    } else if (typeof value == 'string') {
        return parseFloat(value) * 1000
    }

}
const my = kgToGram(1000) as number
// as number will be sure then you can put



console.log('hi')