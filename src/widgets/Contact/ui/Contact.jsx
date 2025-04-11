import { Box, Button, Card, Grid2, Typography } from '@mui/material'
import IMAGES from '../../../shared/assets/img'
import cls from './contact.module.css'

export function Contact() {
    return (
        <Box className={cls.contactWrapper}>
            <Card className={cls.contactCard}>
                <Grid2 container spacing={'40px'}>
                    <Grid2 size={6}>
                        <Box>
                            <Typography variant="h2">Свяжитесь со мной и получите бесплатную консультацию</Typography>
                        </Box>
                        <Box style={{ paddingBottom: '40px', marginTop: '3%' }}>
                            <Typography variant='h3BigLH'>Хотите признания клиентов, выделиться среди конкурентов и продавать 
                                больше? Создайте сайт, который работает на вас! Я предлагаю индивидуальные решения, которые 
                                помогут вашему бизнесу расти и привлекать клиентов. Закажите бесплатную консультацию и узнайте, 
                                как я могу помочь!
                            </Typography>
                        </Box>
                        <Box style={{ marginTop: '3%' }}>
                            <Button>
                                <Typography variant="button"> Связаться </Typography>
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 size={6} className={cls.contactRight}>
                        <Typography variant='h4' style={{textAlign: 'center',}}>Или напишите <br/> в Telegram</Typography>
                        <div className={cls.qrWrapper}> 
                            <img src={IMAGES.myQrCodeTg} alt="myQrCodeTg"/>
                        </div>
                    </Grid2>
                </Grid2>
            </Card>
        </Box>
    )
}