export const categoryAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const categoryAuthRules: AuthRules<ICategory, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']]
  ],
  select: [],
  populate: []
}
`

export const tagAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const tagAuthRules: AuthRules<ITag, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']]
  ],
  select: [],
  populate: []
}
`

export const userAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const userAuthRules: AuthRules<IUser, IRole> = {
  authentication: [
    [['admin'], 'OPEN']
  ],
  query: [
    ['name', ['$regex']],
    ['email', ['$eq', '$ne']],
    ['role', ['$eq', '$ne']]
  ],
  select: ['password'],
  populate: []
}
`

export const bookAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const bookAuthRules: AuthRules<IBook, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']],
    ['price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$mod']],
    ['language', ['$eq', '$ne']],
    ['category_id', ['$eq', '$ne', '$exists', '$type']],
    ['tag_ids', ['$in', '$nin', '$all', '$size']],
    ['seller_id', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['category_id', []],
    ['tag_ids', []],
    ['seller_id', ['password']]
  ]
}
`

export const orderAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const orderAuthRules: AuthRules<IOrder, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [['seller', 'buyer'], ['seller_id', 'buyer_id']]
  ],
  query: [
    ['book_id', ['$eq', '$ne']],
    ['book_details.price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte']],
    ['book_details.language', ['$eq', '$ne']],
    ['book_details.category_id', ['$eq', '$ne']],
    ['book_details.tag_ids', ['$in', '$nin']],
    ['seller_id', ['$eq', '$ne']],
    ['buyer_id', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['book_id', []],
    ['book_id.seller_id', ['password']],
    ['book_details.category_id', []],
    ['book_details.tag_ids', []],
    ['seller_id', ['password']],
    ['buyer_id', ['password']]
  ]
}
`

export const feedbackAuthRules = `import { AuthRules } from 'mongoose-query-maker'

export const feedbackAuthRules: AuthRules<IFeedback, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [['buyer', 'seller'], ['user_id']]
  ],
  query: [
    ['user_id', ['$eq']]
  ],
  select: [],
  populate: [
    ['user_id', ['password']]
  ]
}
`
