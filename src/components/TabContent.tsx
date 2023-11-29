import { iEndpoint } from '../types'
import Item from './Item'

const TabContent = ({ tab, endpoint }: { tab: number; endpoint: iEndpoint }) => {
  if (tab === 1) {
    if (endpoint === 'books') {
      return (
        <div className="tab-content">
          <div>
            <Item>price=$eq:120</Item>
            <Item>price=$nq:110</Item>
            <Item>price=$gt:125</Item>
            <Item>price=$gte:125</Item>
            <Item>price=$lt:125</Item>
            <Item>price=$lte:125</Item>
            <Item>price=$in:100,120,125</Item>
            <Item>price=$nin:100,120,125</Item>
            <Item>title=$regex:/book/i</Item>
            <Item>title=$regex:/book/</Item>
            <Item>title=$regex:/^book/i</Item>
            <Item>title=$regex:/^book/</Item>
            <Item>author=$eq:655a0432d91014ceecdf4a2c</Item>
            <Item>publisher=$eq:655afb13b41d4662fb3e615d</Item>
            <Item>category=$eq:655afb73b41d4662fb3e6167</Item>
            <Item>tags=$eq:655afb50b41d4662fb3e6161</Item>
            <Item>seller=$eq:655afdacb41d4662fb3e617b</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>[field_name]=[$operation_type]:[execution_value]</div>
            <div>
              Note: You can do multiple operations on the same field or multiple fields by using the "&"
              interceptor. For filter operations $in, $nin, $all, and $mod, you can pass multiple
              execution_value separated by commas.
            </div>
          </div>
        </div>
      )
    }

    if (endpoint === 'orders') {
      return (
        <div className="tab-content">
          <div>
            <Item>book=$eq:655afe2cb41d4662fb3e617d</Item>
            <Item>bookInfo.price=$eq:110</Item>
            <Item>bookInfo.price=$nq:110</Item>
            <Item>bookInfo.price=$gt:125</Item>
            <Item>bookInfo.price=$gte:125</Item>
            <Item>bookInfo.price=$lt:125</Item>
            <Item>bookInfo.price=$lte:125</Item>
            <Item error={true}>bookInfo.price=$in:100,120,125</Item>
            <Item error={true}>bookInfo.price=$nin:100,120,125</Item>
            <Item>bookInfo.title=$regex:/book/i</Item>
            <Item>bookInfo.title=$regex:/book/</Item>
            <Item>bookInfo.title=$regex:/^book/i</Item>
            <Item>bookInfo.title=$regex:/^book/</Item>
            <Item>bookInfo.author=$eq:655a0432d91014ceecdf4a2c</Item>
            <Item>bookInfo.publisher=$eq:655afb13b41d4662fb3e615d</Item>
            <Item>bookInfo.category=$eq:655afb73b41d4662fb3e6167</Item>
            <Item>bookInfo.tags=$in:655afb50b41d4662fb3e6161</Item>
            <Item>seller=$eq:655afdacb41d4662fb3e617b</Item>
            <Item>buyer=$eq:655afebab41d4662fb3e6181</Item>
            <Item>purchasePrice=$eq:120</Item>
            <Item error={true}>purchasePrice=$gte:120</Item>
            <Item error={true}>purchasePrice=$lte:120</Item>
            <Item>transactionId=$eq:....</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>[field_name]=[$operation_type]:[execution_value]</div>
            <div>
              Note: You can do multiple operations on the same field or multiple fields by using the "&"
              interceptor. For filter operations $in, $nin, $all, and $mod, you can pass multiple
              execution_value separated by commas.
            </div>
          </div>
        </div>
      )
    }
  }

  if (tab === 2) {
    if (endpoint === 'books') {
      return (
        <div className="tab-content">
          <div>
            <Item>page=5</Item>
            <Item>limit=20</Item>
            <Item>sort=price</Item>
            <Item>sort=price,createdAt</Item>
            <Item>sort=-price,createdAt</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">Default Values:</div>
          <div>
            <Item>page=1</Item>
            <Item>limit=10</Item>
            <Item>sort=createdAt</Item>
          </div>
        </div>
      )
    }

    if (endpoint === 'orders') {
      return (
        <div className="tab-content">
          <div>
            <Item>page=5</Item>
            <Item>limit=20</Item>
            <Item>sort=purchasePrice</Item>
            <Item>sort=purchasePrice,createdAt</Item>
            <Item>sort=-purchasePrice,createdAt</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">Default Values:</div>
          <div>
            <Item>page=1</Item>
            <Item>limit=10</Item>
            <Item>sort=createdAt</Item>
          </div>
        </div>
      )
    }
  }

  if (tab === 3) {
    if (endpoint === 'books') {
      return (
        <div className="tab-content">
          <div>
            <Item>select=title</Item>
            <Item>select=title,slug,price,author</Item>
            <Item>select=-_id,title,price</Item>
            <Item>select=-seller</Item>
            <Item>select=-category,-tags</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>select=[selected_fields]</div>
            Note: This functionality is similar to Mongoose's select feature. By default, the API will return
            the full document when the "select" parameter is not passed. Fields to include are separated by
            commas, and fields to exclude are prefixed with a hyphen (-). Specify the fields you need to
            tailor your API response to your exact requirements.
          </div>
        </div>
      )
    }

    if (endpoint === 'orders') {
      return (
        <div className="tab-content">
          <div>
            <Item>select=book</Item>
            <Item>select=book,bookInfo</Item>
            <Item>select=book,bookInfo.title</Item>
            <Item>select=-_id,book</Item>
            <Item>select=-book</Item>
            <Item>select=-seller,-buyer</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>select=[selected_fields]</div>
            Note: This functionality is similar to Mongoose's select feature. By default, the API will return
            the full document when the "select" parameter is not passed. Fields to include are separated by
            commas, and fields to exclude are prefixed with a hyphen (-). Specify the fields you need to
            tailor your API response to your exact requirements.
          </div>
        </div>
      )
    }
  }

  if (tab === 4) {
    if (endpoint === 'books') {
      return (
        <div className="tab-content">
          <div>
            <Item>populate=author</Item>
            <Item>populate=publisher</Item>
            <Item>populate=category</Item>
            <Item>populate=tags</Item>
            <Item>populate=seller</Item>
            <Item>populate=author:name</Item>
            <Item>populate=author:-_id</Item>
            <Item>populate=author:name,image</Item>
            <Item>populate=author:name,image,-_id</Item>
            <Item error={true}>populate=seller:password</Item>
            <Item error={true}>populate=seller:+password</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>populate=[populate_field_name]</div>
            <div>populate=[populate_field_name]:[selected_fields]</div>
            <div>Note: Here you can pass multiple populate as a query parameter.</div>
            <div>
              Note: Similar to the 'Field Selection' feature, to select specific fields for population by
              using the populate query parameter with field names separated by a colon ":".
            </div>
          </div>
        </div>
      )
    }

    if (endpoint === 'orders') {
      return (
        <div className="tab-content">
          <div>
            <Item>populate=book</Item>
            <Item>populate=book:title</Item>
            <Item>populate=book:title,slug,image</Item>
            <Item>populate=book:title,slug,image,-_id</Item>
            <Item>populate=seller</Item>
            <Item>populate=buyer</Item>
            <Item>populate=seller:name,email</Item>
            <Item>populate=buyer:name,email</Item>
            <Item error={true}>populate=seller:email,password</Item>
            <Item error={true}>populate=buyer:email,password</Item>
            <Item>populate=bookInfo.category</Item>
            <Item>populate=bookInfo.publisher</Item>
            <Item>populate=bookInfo.author</Item>
            <Item>populate=bookInfo.author:name</Item>
            <Item>populate=bookInfo.author:name,-_id</Item>
            <Item>populate=bookInfo.tags</Item>
            <Item>populate=bookInfo.tags:title</Item>
          </div>
          <div className="text-xs mt-5 opacity-50">
            <div>populate=[populate_field_name]</div>
            <div>populate=[populate_field_name]:[selected_fields]</div>
            <div>Note: Here you can pass multiple populate as a query parameter.</div>
            <div>
              Note: Similar to the 'Field Selection' feature, to select specific fields for population by
              using the populate query parameter with field names separated by a colon ":".
            </div>
          </div>
        </div>
      )
    }
  }

  return <div></div>
}

export default TabContent
