// library
import styled from 'styled-components'
// component
import BasicButton from '../components/BasicButton'

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface footerType {
  load: () => {}
  initialize: () => {}
}

const FooterContainer = ({ load, initialize }: footerType) => {
  return (
    <Layout>
      <BasicButton title="load" onClick={load} />
      <BasicButton title="초기화" onClick={initialize} />
    </Layout>
  )
}

export default FooterContainer
