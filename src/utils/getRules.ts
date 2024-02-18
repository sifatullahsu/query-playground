import {
  bookAuthRules,
  categoryAuthRules,
  feedbackAuthRules,
  orderAuthRules,
  tagAuthRules,
  userAuthRules
} from '../data/authRules'
import { iEndpoint } from '../types'

export const getRules = (endpoint: iEndpoint): string => {
  if (endpoint === 'books') return bookAuthRules
  if (endpoint === 'orders') return orderAuthRules
  if (endpoint === 'feedbacks') return feedbackAuthRules
  if (endpoint === 'users') return userAuthRules
  if (endpoint === 'categories') return categoryAuthRules
  if (endpoint === 'tags') return tagAuthRules

  return ''
}
