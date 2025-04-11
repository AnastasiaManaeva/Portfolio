import { Container, Typography } from '@mui/material'
import cls from './footer.module.css'

export function Footer() {
    return (
        <footer className={cls.footer}>
            <Container maxWidth="lg" className={cls.footerContent}>
                <Typography variant="footerLogo">WebByManaeva</Typography>
                <Typography variant="footer">Проекты</Typography>
                <Typography variant="footer">Свяжитесь со мной</Typography>
            </Container>
        </footer>
    )
}