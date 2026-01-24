const produtos = [
    { "NomeProd": "Geladeira", "preco": 3669.00, "emEstoque": true },
    { "NomeProd": "AirFryer", "preco": 600.00, "emEstoque": false },
    { "NomeProd": "Liquidificador", "preco": 190.00, "emEstoque": true },
    { "NomeProd": "Leiteira", "preco": 60.00, "emEstoque": true },
    { "NomeProd": "Jarra", "preco": 48.00, "emEstoque": false },
    { "NomeProd": "Televisão", "preco": 2989.00, "emEstoque": true },
    { "NomeProd": "Micro-ondas", "preco": 850.00, "emEstoque": false },
    { "NomeProd": "Cafeteira", "preco": 250.00, "emEstoque": true }
  ]

  console.log(produtos)

  
  const prodCaro = prod => prod.preco >= 790.00
 const prodEstoque = prod => prod.emEstoque

  console.log(produtos.filter(prodCaro).filter(prodEstoque))
