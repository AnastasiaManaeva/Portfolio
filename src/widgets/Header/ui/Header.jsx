import { Container, Typography } from '@mui/material'
import cls from './header.module.css'

export function Header() {
    return (
        <header className={cls.header}>
            <div className={cls.headerBorder}></div>
            <Container maxWidth="lg" className={cls.headerContent}>
                <Typography variant="headerLogo">WebByManaeva</Typography>
                <Typography variant="header">Проекты</Typography>
                <Typography variant="header">Свяжитесь со мной</Typography>
            </Container>
        </header>
    )
}