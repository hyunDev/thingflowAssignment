// library
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// component
import IssueDetail from '../components/IssueDetail'
import { useEffect } from 'react'
// slice
import { fetchIssue } from '../redux/issue/issueSlice'
import { RootState } from '../redux/store'

const IssueDetailContainer = () => {
  const dispatch = useDispatch()
  const { issueInfo } = useSelector((state: RootState) => state.issue)
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
      <div>타이틀: {issueInfo.title}</div>
      <div>코멘트: {issueInfo.comments}</div>
      <div>내용: {issueInfo.contents}</div>
      <IssueDetail />
    </div>
  )
}

export default IssueDetailContainer
