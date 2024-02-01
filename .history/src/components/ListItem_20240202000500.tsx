//import { issueType } from '../type/commonType'

interface issueType {
  title: string
  contents: string
}

interface issueState {
  items: issueType[]
}

const ListItem = ({ items }: issueState) => {
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
