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
