// library
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// component
import IssueDetail from '../components/IssueDetail'
import { useEffect } from 'react'
// slice
import { fetchIssue } from '../redux/issue/issueSlice'

const IssueDetailContainer = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const owner = 'angular'
  const repos = 'angular-cli'
  useEffect(() => {
    if (id) {
      dispatch(fetchIssue({ owner, repos, id }))
    }
  }, [dispatch, id])
  return (
    <div>
      {id}
      <IssueDetail />
    </div>
  )
}

export default IssueDetailContainer
