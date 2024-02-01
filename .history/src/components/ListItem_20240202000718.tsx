import { issueArray, issueType } from '../type/commonType'

const ListItem = ({ issueList: items }: issueArray) => {
  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListItem
