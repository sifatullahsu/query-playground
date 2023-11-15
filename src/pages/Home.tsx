import Playground from '../components/Playground'

const Home = () => {
  return (
    <div>
      <div className="container px-5 py-8">
        <Playground />
      </div>
    </div>
  )
}

export default Home

/* 
users - books - authors - publishers - categories - tags - orders
==========================================================================

users: name, email, password, role(admin, seller, buyer)
books: title, slug, image, price, stock, language, author, publisher, category, tags[], seller
authors: name, slug, image, about
publishers: title, slug, image
categories: title, slug, image
tags: title, slug
orders: book, bookInfo(title, price, language, author, publisher, category, tags), seller, buyer, purchasePrice, transactionId
*/
