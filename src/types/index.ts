export type iEndpoint = 'books' | 'orders' | 'feedbacks' | 'users' | 'categories' | 'tags'

export type iUserTypes =
  | 'admin'
  | 'seller_01'
  | 'seller_02'
  | 'buyer_01'
  | 'buyer_02'
  | 'buyer_03'
  | 'buyer_04'
  | 'without_token'

export type iResult = Record<string, unknown> | null

export type iQueryResult = Record<string, unknown> | null

export type iField = {
  text: string
  isError?: boolean
}

export type iExampleQuery = {
  query: iField[]
  pagination: iField[]
  select: iField[]
  populate: iField[]
}
