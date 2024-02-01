//library
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//component
import Header from '../components/Header'
// container
import IssueLoadContainer from './IssueLoadContainer'
import FooterContainer from './FooterContainer'
import IssueDetail from '../components/IssueDetail'
import IssueDetailContainer from './IssueDetailContainer'

const MainLayout = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`
const HeaderLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`

const ListLayout = styled.div`
  width: 100%;
  height: calc(100vh - 130px);
  overflow: scroll;
  padding: 5px;
  border: 1px solid lightblue;
`

const FooterLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgreen;
`

const MainContainer: React.FC = () => {
  const load = () => {}

  const initialize = () => {}

  const issueCardClick = () => {}
  return (
    <Router>
      <MainLayout>
        <HeaderLayout>
          <Header title="Angular" subtitle="Angular-cli" />
        </HeaderLayout>
        <ListLayout>
          <Routes>
            <Route path="/issues/:id" element={<IssueDetailContainer />} />
            <Route path="/" element={<IssueLoadContainer />} />
          </Routes>
        </ListLayout>
        <FooterLayout>
          <FooterContainer load={load} initialize={initialize} />
        </FooterLayout>
      </MainLayout>
    </Router>
  )
}

export default MainContainer
