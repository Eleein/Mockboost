// export function lessThanTen (numbers){
//     return numbers.reduce ((smallNumbers, number) => {
//         number > 10
//     }, [])
//     return smallNumbers;
//
// })
// }
//

export function lessThanTen (numbers) {

    return numbers.reduce((smallNumbers, number) => {
        if (number < 10){
            smallNumbers.push(number)
        }
        return smallNumbers;
    }, [])
}