import { iUserTypes } from '../types'

export const getToken = (user: iUserTypes): string => {
  if (user === 'admin') return import.meta.env.VITE_ADMIN_TOKEN
  else if (user === 'seller_01') return import.meta.env.VITE_SELLER_01_TOKEN
  else if (user === 'seller_02') return import.meta.env.VITE_SELLER_02_TOKEN
  else if (user === 'buyer_01') return import.meta.env.VITE_BUYER_01_TOKEN
  else if (user === 'buyer_02') return import.meta.env.VITE_BUYER_02_TOKEN
  else if (user === 'buyer_03') return import.meta.env.VITE_BUYER_03_TOKEN
  else if (user === 'buyer_04') return import.meta.env.VITE_BUYER_04_TOKEN

  return ''
}
