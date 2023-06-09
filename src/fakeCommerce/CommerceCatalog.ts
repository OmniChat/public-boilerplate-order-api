class CommerceCatalog {
  getProducts: any = (name: string) => {
    // sugestão: usar um elastic search para uma melhor experiência na pesquisa
    // e com base no retorno converter para o formato esperado pela OmniChat
    return this.omniFormatProductList.filter((product) =>
      product.variants.some((variant) =>
        variant.name.toLowerCase().includes(name.toLocaleLowerCase())
      )
    );
  };

  omniFormatProductList = [
    {
      blocked: false,
      externalProduct: true,
      objectId: "12345", //<id-do-produto-na-origem>
      externalId: "12345", //<id-do-produto-na-origem>
      name: "iPhone 14 Pro", //<nome-do-produto>
      productDescription: "Produto de teste", //<descrição-do-produto>
      externalUrl: "https://www.apple.com/br/iphone-14-pro/", //<url-do-produto-no-ecommerce>
      mainVariant: {
        objectId: "12345-1",
        externalId: "12345-1", //<id-do-variant-na-origem>
        externalImageURL:
          "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg", //<url-da-imagem-da-variante>
        erpId: "12345-2", //<id-do-produto-no-erp>
        name: "iPhone 14 Pro 128gb Purple", //<nome-da-variante>
        visible: true,
        price: 9499.99,
        salePrice: 9400,
        quantity: 30, //quantidade em estoque
        sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
        sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
        variations: [
          {
            key: "Cor",
            value: "Purple",
          },
          {
            key: "Memória",
            value: "128gb",
          },
        ],
      },
      variants: [
        {
          objectId: "12345-1",
          externalImageURL:
            "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg", //<url-da-imagem-da-variante>
          erpId: "54321-1", //<id-do-produto-no-erp>
          externalId: "12345-1", //<id-do-variant-na-origem>
          name: "iPhone 14 Pro 128gb Purple", //<nome-da-variante>
          visible: true,
          price: 9499.99,
          salePrice: 9400,
          quantity: 30, //quantidade em estoque
          sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
          sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
          variations: [
            {
              key: "Cor",
              value: "Purple",
            },
            {
              key: "Memória",
              value: "128gb",
            },
          ],
        },
        {
          objectId: "12345-2",
          externalId: "12345-2", //<id-do-variant-na-origem>
          externalImageURL:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-gold-witb-202209_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1660789320262", //<url-da-imagem-da-variante>
          erpId: "54321-2", //<id-do-produto-no-erp>
          name: "iPhone 14 Pro 128gb Gold", //<nome-da-variante>
          visible: true,
          price: 9399.99,
          salePrice: 9200,
          quantity: 28, //quantidade em estoque
          sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
          sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
          variations: [
            {
              key: "Cor",
              value: "Gold",
            },
            {
              key: "Memória",
              value: "128gb",
            },
          ],
        },
        {
          id: "12345-3",
          externalImageURL:
            "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver-220907-geo_inline.jpg.large.jpg", //<url-da-imagem-da-variante>
          erpId: "54321-2", //<id-do-produto-no-erp>
          externalId: "54321-2", //<id-do-variant-na-origem>
          name: "iPhone 14 Pro 128gb Silver", //<nome-da-variante>
          visible: true,
          price: 9499.99,
          salePrice: 9499.99,
          quantity: 0, //quantidade em estoque
          sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
          sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
          variations: [
            {
              key: "Cor",
              value: "Gold",
            },
            {
              key: "Memória",
              value: "128gb",
            },
          ],
        },
      ],
      sellOutOfStock: false, //se deseja permitir a venda do produto mesmo quando não houver estoque
    },
    {
      blocked: false,
      externalProduct: true,
      objectId: "123456", //<id-do-produto-da-origem>
      externalId: "123456", //<id-do-produto-da-origem>
      name: "iPhone 13", //<nome-do-produto>
      productDescription: "Produto de teste", //<descrição-do-produto>
      externalUrl: "https://www.apple.com/br/shop/buy-iphone/iphone-13", //<url-do-produto-no-ecommerce>
      mainVariant: {
        objectId: "123456-1",
        externalId: "123456-2", //<id-do-variant-na-origem>
        externalImageURL:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-witb-2021_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1638579080000", //<url-da-imagem-da-variante>
        erpId: "123456-2", //<id-do-produto-no-erp>
        name: "iPhone 13 128gb blue", //<nome-da-variante>
        visible: true,
        price: 6499.99,
        salePrice: 6400.5,
        quantity: 30, //quantidade em estoque
        sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
        sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
        variations: [
          {
            key: "Cor",
            value: "Purple",
          },
          {
            key: "Memória",
            value: "128gb",
          },
        ],
      },
      variants: [
        {
          objectId: "123456-1",
          externalId: "123456-1", //<id-do-variant-na-origem>
          externalImageURL:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-witb-2021_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1638579080000", //<url-da-imagem-da-variante>
          erpId: "123456-2", //<id-do-produto-no-erp>
          name: "iPhone 13 128gb blue", //<nome-da-variante>
          visible: true,
          price: 6499.99,
          salePrice: 6400.5,
          quantity: 30, //quantidade em estoque
          sellerId: "1", //<identificador-do-parceiro-marketplace> 3p
          sellerName: "Apple", //<nome-do-parceiro-marketplace> 3p
          variations: [
            {
              key: "Cor",
              value: "Blue",
            },
            {
              key: "Memória",
              value: "128gb",
            },
          ],
        },
      ],
      sellOutOfStock: false, //se deseja permitir a venda do produto mesmo quando não houver estoque
    },
  ];
}

export const catalogCommerce = new CommerceCatalog();
