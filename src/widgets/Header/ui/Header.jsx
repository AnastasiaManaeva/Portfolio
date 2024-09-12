import { Container } from '@mui/material'
import cls from './header.module.css'

export function Header() {
    return (
        <header className={cls.header}>
            <div className={cls.border}></div>
            <Container maxWidth="lg" className={cls.headerContent}>
                <p>WebByManaeva</p>
                <p>Проекты</p>
                <p>Свяжитесь со мной</p>
            </Container>
        </header>
    )
}