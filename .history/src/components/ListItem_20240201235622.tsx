import { issueType } from '../type/commonType'

const ListItem = ({ title, onClick }: ) => {
  return <button onClick={onClick}>{title}</button>
}

export default ListItem
