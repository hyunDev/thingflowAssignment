import { issueArray, issueType } from '../type/commonType'

const ListItem = ({ issueList: items }: issueArray) => {
  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              number: {item.number} title: {item.title} createAt:
              {item.created_at}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListItem
