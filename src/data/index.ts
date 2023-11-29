export const bookConstant = `
  import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
 
  const bookQuery: IQueryMakerFields<IBook, IRole> = {
    all: 'OPEN',
    filter: [
      ['title', ['$regex'], 'OPEN'],
      ['price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin'], 'OPEN'],
      ['stock', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$mod'], 'OPEN'],
      ['author', ['$eq', '$ne'], 'OPEN'],
      ['publisher', ['$eq', '$ne', '$exists', '$type'], 'OPEN'],
      ['category', ['$eq', '$ne'], 'OPEN'],
      ['tags', ['$eq', '$ne', '$all', '$size'], 'OPEN'],
      ['seller', ['$eq', '$ne'], 'OPEN']
    ]
  }
  const bookSelector: IQuerySelectorFields = {
    select: [],
    populate: [
      ['author', []],
      ['publisher', []],
      ['category', []],
      ['tags', []],
      ['seller', ['password']]
    ]
  }
  `

export const orderConstant = `
  import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'

  const specialPermission = [['admin', 'OPEN'],['seller', 'seller'],['buyer', 'buyer']]

  const orderQuery: IQueryMakerFields<IOrder, IRole> = {
    all: ['admin'],
    filter: [
      ['book', ['$eq', '$ne'], specialPermission],
      ['bookInfo.title', ['$regex'], specialPermission],
      ['bookInfo.price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte'], specialPermission],
      ['bookInfo.language', ['$eq', '$ne'], specialPermission],
      ['bookInfo.author', ['$eq', '$ne'], specialPermission],
      ['bookInfo.publisher', ['$eq', '$ne'], specialPermission],
      ['bookInfo.category', ['$eq', '$ne'], specialPermission],
      ['bookInfo.tags', ['$in', '$nin'], specialPermission],
      ['seller', ['$eq', '$ne'], specialPermission],
      ['buyer', ['$eq', '$ne'], specialPermission],
      ['purchasePrice', ['$eq', '$ne'], specialPermission],
      ['transactionId', ['$eq', '$ne'], specialPermission]
    ]
  }

  const orderSelector: IQuerySelectorFields = {
    select: [],
    populate: [
      ['book', []],
      ['book.seller', ['password']],
      ['bookInfo.author', []],
      ['bookInfo.publisher', []],
      ['bookInfo.category', []],
      ['bookInfo.tags', []],
      ['buyer', ['password']],
      ['seller', ['password']]
    ]
  }
`
