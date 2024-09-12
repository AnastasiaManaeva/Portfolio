import { Box, Button, Card, Grid2, Typography } from '@mui/material'
import IMAGES from '../../../shared/assets/img'
import EastIcon from '@mui/icons-material/East';
import cls from './visitCard.module.css'

export function VisitCard() {
    return (
        <Box className={cls.visitCardWrapper}>
            <Card className={`${cls.visitCard}`}>
                <Grid2 container spacing={'40px'}>
                    <Grid2 size={6}>
                        <Box>
                            <Typography variant="title">Уникальные сайты от профессионала</Typography>
                        </Box>
                        <Box style={{ paddingBottom: '40px', marginTop: '3%' }}>
                            <Typography variant='contentBigLH'>Я воплощаю ваши идеи в жизнь! <br />
                                Мои преимущества — использование современных технологий
                                и полная удовлетворённость клиентов результатом работы.
                            </Typography>
                        </Box>
                        <Box style={{ marginTop: '3%' }}>
                            <Button>
                                <Typography variant="fontBtn"> Связаться </Typography>
                                <EastIcon style={{ width: '20px', height: '20px' }} />
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 size={6}>
                        <img src={IMAGES.visitCardImg} alt="visitCard" />
                    </Grid2>
                </Grid2>
            </Card>
        </Box>
    )
}