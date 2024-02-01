// library
import { useParams } from 'react-router-dom'
// component
import IssueDetail from '../components/IssueDetail'

const IssueDetailContainer = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      {id}
      <IssueDetail />
    </div>
  )
}

export default IssueDetailContainer
