// type
import { issueArray, issueType } from '../type/commonType'
// library
import styled from 'styled-components'

const IssueCard = styled.li`
  border: 1px solid black;
  display: flex;
`

const CardLeft = styled.div`
  display: ;
`

const CardRight = styled.div``
const ListItem = ({ issueList: items }: issueArray) => {
  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <IssueCard key={item.id}>
              <CardLeft>
                #{item.number} {item.title}
                작성자: {item.user.login} 작성일: {item.created_at}
              </CardLeft>
              <CardRight></CardRight>
            </IssueCard>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListItem
