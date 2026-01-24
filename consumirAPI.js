const URL = 'https://dummyjson.com/products';

async function chamarAPI()  {
    const apiResponse = await fetch(URL);
    if (apiResponse.status === 200){
        const obj = await apiResponse.json();
        console.log(obj)
        obj.products.sort((a, b) => b.price - a.price)
        console.log("-------------------------ORDENAÇÃO POR PREÇO----------------------------")
        console.log(obj)

        console.log("--------------------------APLICANDO MAP --------------------------------")

       obj.products = obj.products.map(p => ({
            id: p.id,
            title: p.title,
            price: p.price,
            stock: p.stock,
            availabilityStatus: p.availabilityStatus
        }))
        console.log(obj)

        console.log("--------------------------APLICANDO FILTER--------------------------------")
        let result = obj.products = obj.products.filter(p => p.availabilityStatus === 'In Stock')
        console.log(obj)

        console.log("--------------------------APLICANDO REDUCE--------------------------------")

        let somaProd = result.reduce((acumulador, p) => acumulador + p.price * p.stock, 0);
        const converterReal = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        let valorFormatado = converterReal.format(somaProd)
        console.log(valorFormatado)
        
    }
}

chamarAPI();
