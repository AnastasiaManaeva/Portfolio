import { Box, Button, Card, Grid2, Typography } from '@mui/material'
import cls from './services.module.css'

export function Services() {
    return (
        <Box className={cls.servicesWrapper}>
            <Card className={cls.services}>
                <Grid2 container spacing={'50px'}>
                    <Grid2 size={6}>
                        <Box>
                            <Typography variant="h1">Разработка сайтов</Typography>
                        </Box>
                        <Box style={{ paddingBottom: '40px', marginTop: '3%' }}>
                            <Typography variant='contentSmall'>Я предлагаю разработку уникальных сайтов и цифровых 
                                решений для вашего бренда. Я использую передовые технологии для создания веб-решений, 
                                способных выделить вас среди конкурентов.
                            </Typography>
                        </Box>
                        <Box className={cls.servicesBtnContainer}>
                            <Button className={cls.servicesBtn}>
                                <Typography variant="button"> Оставить заявку </Typography>
                            </Button>
                            <Typography variant="caption">Оставьте заявку сейчас <br/> и получите бесплатный подарок</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={6}>
                        <ul className={cls.servicesList}>
                            <li> 
                                <Typography variant="h3">Разработка Web сайтов</Typography>
                            </li>
                            <li>
                                <Typography variant="h3">Продвижение</Typography>
                            </li>
                            <li>
                                <Typography variant="h3">Настройка хостинга</Typography>
                            </li>
                        </ul>
                    </Grid2>
                </Grid2>
            </Card>
        </Box>
    )
}