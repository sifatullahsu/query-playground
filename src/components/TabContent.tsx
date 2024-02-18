import { iEndpoint } from '../types'
import { getQueryExample } from '../utils/getQueryExample'
import Item from './Item'

const TabContent = ({ tab, endpoint }: { tab: number; endpoint: iEndpoint }) => {
  if (tab === 1) {
    return (
      <div className="tab-content">
        <div>
          {getQueryExample(endpoint).query.map((i, index) => (
            <Item key={index} error={i.isError}>
              {i.text}
            </Item>
          ))}
        </div>
        <div className="text-xs mt-5 opacity-50">
          <div>[field_name]=[operation_type]:[execution_value]</div>
          <div>
            Note: You can do multiple operations on the same field or multiple fields by using the "&"
            interceptor. For filter operations $in, $nin, $all, and $mod, you can pass multiple
            execution_value separated by commas.
          </div>
        </div>
      </div>
    )
  }

  if (tab === 2) {
    return (
      <div className="tab-content">
        <div>
          {getQueryExample(endpoint).pagination.map((i, index) => (
            <Item key={index} error={i.isError}>
              {i.text}
            </Item>
          ))}
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

  if (tab === 3) {
    return (
      <div className="tab-content">
        <div>
          {getQueryExample(endpoint).select.map((i, index) => (
            <Item key={index} error={i.isError}>
              {i.text}
            </Item>
          ))}
        </div>
        <div className="text-xs mt-5 opacity-50">
          <div>select=[selected_fields]</div>
          Note: This functionality is similar to Mongoose's select feature. By default, the API will return
          the full document when the "select" parameter is not passed. Fields to include are separated by
          commas, and fields to exclude are prefixed with a hyphen (-). Specify the fields you need to tailor
          your API response to your exact requirements.
        </div>
      </div>
    )
  }

  if (tab === 4) {
    return (
      <div className="tab-content">
        <div>
          {getQueryExample(endpoint).populate.map((i, index) => (
            <Item key={index} error={i.isError}>
              {i.text}
            </Item>
          ))}
        </div>
        {getQueryExample(endpoint).populate.length === 0 && (
          <div className=" opacity-50">`populate` is not permitted in this collection.</div>
        )}
        <div className="text-xs mt-5 opacity-50">
          <div>populate=[populate_field_name]</div>
          <div>populate=[populate_field_name]:[selected_fields]</div>
          <div>Note: Here you can pass multiple populate as a query parameter.</div>
          <div>
            Note: Similar to the 'Field Selection' feature, to select specific fields for population by using
            the populate query parameter with field names separated by a colon ":".
          </div>
        </div>
      </div>
    )
  }

  return <div></div>
}

export default TabContent
