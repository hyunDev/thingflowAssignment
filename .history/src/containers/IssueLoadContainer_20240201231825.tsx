// library
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

//component
import BasicButton from '../components/BasicButton'
// slice
import { fetchIssueList } from '../redux/issue/issueSlice'

const IssueLoadContainer: React.FC = () => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(fetchIssueList())
  }

  return (
    <div>
      <BasicButton title="issue 10개 로딩 시작" onClick={onClick} />
    </div>
  )
}

export default IssueLoadContainer
