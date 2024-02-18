import { iExampleQuery } from '../types'

export const bookQueryExample: iExampleQuery = {
  query: [
    { text: 'price=$eq:22.99' },
    { text: 'price=$ne:22.99' },
    { text: 'price=$gt:22.99' },
    { text: 'price=$gte:22.99' },
    { text: 'price=$lt:22.99' },
    { text: 'price=$lte:22.99' },
    { text: 'price=$in:100,120,125', isError: true },
    { text: 'price=$nin:100,120,125', isError: true },
    { text: 'title=$regex:/^the/i' },
    { text: 'title=$regex:/the/' },
    { text: 'category_id=$eq:65c8cf7dd8161df8f149c632' },
    { text: 'tag_ids=$in:65c8d0ccd8161df8f149c662' },
    { text: 'tag_ids=$nin:65c8d0ccd8161df8f149c662' },
    { text: 'seller_id=$eq:655afdacb41d4662fb3e617b' },
    { text: 'seller_id=$ne:655afdacb41d4662fb3e617b' },
    { text: 'language=$eq:Bengali' },
    { text: 'language=$ne:Bengali' }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=price' },
    { text: 'sort=price,createdAt' },
    { text: 'sort=-price,createdAt' }
  ],
  select: [
    { text: 'select=title' },
    { text: 'select=title,price,seller_id' },
    { text: 'select=-_id,title,price' },
    { text: 'select=-seller_id' },
    { text: 'select=-category_id,-tag_ids' },
    { text: 'select=category_id,-tag_ids', isError: true }
  ],
  populate: [
    { text: 'populate=category_id' },
    { text: 'populate=tag_ids' },
    { text: 'populate=seller_id' },
    { text: 'populate=category_id:title' },
    { text: 'populate=category_id:-_id' },
    { text: 'populate=tag_ids:title,-_id' },
    { text: 'populate=author:name,image,-_id' },
    { text: 'populate=seller_id:name,email' },
    { text: 'populate=seller_id:password', isError: true },
    { text: 'populate=seller_id:+password', isError: true }
  ]
}

export const orderQueryExample: iExampleQuery = {
  query: [
    { text: 'book_id=$eq:65c8d99bd269a9825edd5a9d' },
    { text: 'book_details.price=$eq:189.99' },
    { text: 'book_details.price=$nq:189.99' },
    { text: 'book_details.price=$gt:125' },
    { text: 'book_details.price=$gte:125' },
    { text: 'book_details.price=$lt:125' },
    { text: 'book_details.price=$lte:125' },
    { text: 'book_details.price=$in:100,120,125', isError: true },
    { text: 'book_details.price=$nin:100,120,125', isError: true },
    { text: 'book_details.title=$regex:/^the/i' },
    { text: 'book_details.title=$regex:/the/' },
    { text: 'book_details.category_id=$eq:65c8cf7dd8161df8f149c641' },
    { text: 'book_details.tag_ids=$in:65c8d0ccd8161df8f149c66a' },
    { text: 'book_details.tag_ids=$nin:65c8d0ccd8161df8f149c66a' },
    { text: 'seller_id=$eq:65c8de6e9aeca514466f8afa' },
    { text: 'buyer_id=$eq:655afebab41d4662fb3e6181' }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=book_details.price' },
    { text: 'sort=book_details.price,createdAt' },
    { text: 'sort=-book_details.price,createdAt' }
  ],
  select: [
    { text: 'select=title' },
    { text: 'select=title,book_details' },
    { text: 'select=title,book_details.price' },
    { text: 'select=-_id,title,seller_id' },
    { text: 'select=-seller_id' },
    { text: 'select=-category_id,-tag_ids' }
  ],
  populate: [
    { text: 'populate=book_id' },
    { text: 'populate=book_id:title' },
    { text: 'populate=book_id:title,price' },
    { text: 'populate=book_id:title,price,-_id' },
    { text: 'populate=seller_id' },
    { text: 'populate=seller_id:name,email' },
    { text: 'populate=seller_id:email,password', isError: true },
    { text: 'populate=buyer_id' },
    { text: 'populate=buyer_id:name,email' },
    { text: 'populate=buyer_id:email,password', isError: true },
    { text: 'populate=book_details.category_id' },
    { text: 'populate=book_details.tag_ids' },
    { text: 'populate=book_details.tag_ids:title' }
  ]
}

export const feedbackQueryExample: iExampleQuery = {
  query: [
    { text: 'user_id=$eq:655afebab41d4662fb3e6181' },
    { text: 'user_id=$eq:65c8de6e9aeca514466f8afa' },
    { text: 'title=$regex:/^the/i', isError: true },
    { text: 'title=$regex:/the/', isError: true },
    { text: 'description=$regex:/the/', isError: true }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=user_id' },
    { text: 'sort=user_id,createdAt' },
    { text: 'sort=-user_id,createdAt' }
  ],
  select: [
    { text: 'select=title' },
    { text: 'select=title,description' },
    { text: 'select=title,description,-_id' },
    { text: 'select=-_id,title,user_id' },
    { text: 'select=-user_id' }
  ],
  populate: [
    { text: 'populate=user_id' },
    { text: 'populate=user_id:name,email' },
    { text: 'populate=user_id:email,password', isError: true }
  ]
}

export const userQueryExample: iExampleQuery = {
  query: [
    { text: 'email=$eq:655afebab41d4662fb3e6181' },
    { text: 'email=$ne:655afebab41d4662fb3e6181' },
    { text: 'role=$eq:admin' },
    { text: 'role=$ne:seller' },
    { text: 'name=$regex:/^the/i' },
    { text: 'name=$regex:/the/' }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=email' },
    { text: 'sort=email,createdAt' },
    { text: 'sort=-email,createdAt' }
  ],
  select: [
    { text: 'select=name' },
    { text: 'select=name,email' },
    { text: 'select=name,email,-_id' },
    { text: 'select=-email' },
    { text: 'select=password', isError: true },
    { text: 'select=+password', isError: true }
  ],
  populate: []
}

export const categoryQueryExample: iExampleQuery = {
  query: [
    { text: 'title=$regex:/^science/i' },
    { text: 'title=$regex:/science/' },
    { text: 'title=$eq:Thriller', isError: true },
    { text: 'title=$ne:Thriller', isError: true }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=title' },
    { text: 'sort=title,createdAt' },
    { text: 'sort=-title,createdAt' }
  ],
  select: [
    { text: 'select=title' },
    { text: 'select=_id' },
    { text: 'select=title,-_id' },
    { text: 'select=-title' }
  ],
  populate: []
}

export const tagQueryExample: iExampleQuery = {
  query: [
    { text: 'title=$regex:/^family/i' },
    { text: 'title=$regex:/family/' },
    { text: 'title=$eq:Adventure', isError: true },
    { text: 'title=$ne:Adventure', isError: true }
  ],
  pagination: [
    { text: 'page=5' },
    { text: 'limit=20' },
    { text: 'sort=title' },
    { text: 'sort=title,createdAt' },
    { text: 'sort=-title,createdAt' }
  ],
  select: [
    { text: 'select=title' },
    { text: 'select=_id' },
    { text: 'select=title,-_id' },
    { text: 'select=-title' }
  ],
  populate: []
}
