export const getFormattedPrice = (price: number) => {
    const symbols = String(price)
    const formattedPrice: any = []

    for (let i = 1; i <= symbols.length; i++) {
        formattedPrice.unshift(symbols.at(-i))

        if (i % 3 === 0) {
            formattedPrice.unshift(' ')
        }
    }
    return formattedPrice.join('')
}