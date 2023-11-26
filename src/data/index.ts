export const bookConstant = `
  import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
 
  const bookQuery: IQueryMakerFields<IBook, IRole> = {
    all: 'OPEN',
    filter: [
      ['title', ['$regex'], 'OPEN'],
      ['slug', ['$eq', '$ne'], 'OPEN'],
      ['image', ['$eq', '$ne'], 'OPEN'],
      ['price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin'], 'OPEN'],
      ['stock', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$mod'], 'OPEN'],
      ['language', ['$eq', '$ne'], 'OPEN'],
      ['author', ['$eq', '$ne', '$exists', '$type'], 'OPEN'],
      ['publisher', ['$eq', '$ne', '$exists', '$type'], 'OPEN'],
      ['category', ['$eq', '$ne', '$exists', '$type'], 'OPEN'],
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
