// type
import { issueArray, issueType } from '../type/commonType'
// library
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const IssueCard = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  width: 600px;
  margin-bottom: 5px;
  cursor: pointer;
`

const CardLeft = styled.div`
  display: grid;
  grid-template-columns: 200px 300px;
  grid-gap: 10px;
`

const CardRight = styled.div`
  width: 100px;
  float: right;
`

const CardContents = styled.div`
  float: left;
`
const ListItem = ({ issueList: items }: issueArray) => {
  const history = useHistory()
  const handleItemClick = (id: number) => {
    // 클릭한 이슈의 ID를 이용하여 경로를 생성하고 이동합니다.
    history.push(`/issues/${id}`)
  }

  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <IssueCard key={item.id} onClick={() => handleItemClick(item.id)}>
              <CardLeft>
                <CardContents>#{item.number}</CardContents>
                <CardContents>{item.title}</CardContents>
                <CardContents>작성자: {item.user}</CardContents>
                <CardContents>작성일: {item.created_at}</CardContents>
              </CardLeft>
              <CardRight>
                <CardContents>코멘트: {item.comments}</CardContents>
              </CardRight>
            </IssueCard>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListItem
