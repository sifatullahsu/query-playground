import {
  bookQueryExample,
  categoryQueryExample,
  feedbackQueryExample,
  orderQueryExample,
  tagQueryExample,
  userQueryExample
} from '../data/queryExample'
import { iEndpoint, iExampleQuery } from '../types'

export const getQueryExample = (endpoint: iEndpoint): iExampleQuery => {
  if (endpoint === 'books') return bookQueryExample
  else if (endpoint === 'orders') return orderQueryExample
  else if (endpoint === 'feedbacks') return feedbackQueryExample
  else if (endpoint === 'users') return userQueryExample
  else if (endpoint === 'categories') return categoryQueryExample
  else if (endpoint === 'tags') return tagQueryExample

  return { query: [], pagination: [], select: [], populate: [] }
}
