import { Header } from '../../../widgets/Header'
import { Container } from '@mui/material'
import { VisitCard } from '../../../widgets/VisitCard/ui/VisitCard'
import { Projects } from '../../../widgets/Projects'

function MainPage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <VisitCard />
        <Projects />
      </Container>
    </>
  )
}

export default MainPage
