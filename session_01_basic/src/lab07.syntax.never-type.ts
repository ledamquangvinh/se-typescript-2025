/**
 * * never - is return type of Exception function (return or not return)
 */

const show_error = (message : string) : never => {
    console.log('--- start show error')
    throw new Error(message)
}

const calculate = () => {
    try {
        console.log('---- start calculation')
        show_error('Something is failed')
        console.log('---- end calculation')
    } catch (e) {
        console.log('--- start catch')
        console.error(e)
    }
}

calculate()