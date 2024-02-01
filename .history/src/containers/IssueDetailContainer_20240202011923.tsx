// library
import { useParams } from 'react-router-dom'
// component
import IssueDetail from '../components/IssueDetail'

const IssueDetailContainer = () => {
  const { issueId } = useParams<{ issueId: string }>()
  return (
    <div>
      {issueId}
      <IssueDetail />
    </div>
  )
}

export default IssueDetailContainer
