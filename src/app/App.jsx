import { Providers } from "./providers/Providers";
import { Header } from "../widgets/Header";
import { VisitCard } from "../widgets/VisitCard/ui/VisitCard";
import { Projects } from "../widgets/Projects";
import { Container } from "@mui/material";
import { Services } from "../widgets/Services";
import { FAQ } from "../widgets/FAQ";
import { Contact } from "../widgets/Contact";
import { Footer } from "../widgets/Footer";

const App = () => {
    return (
    <Providers>
        <Header />
        <Container maxWidth="lg">
            <VisitCard />
            <Projects />
            <Services />
            <FAQ />
            <Contact />
        </Container>
        <Footer />
    </Providers>
    )
}

export default App;