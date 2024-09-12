import { Box, Button, Grid2, Typography } from '@mui/material'
import IMAGES from '../../../shared/assets/img'
import cls from './projects.module.css'

export function Projects() {
    return (
        <Box className={cls.projects}>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="title">Проекты</Typography>
                </Box>
                <Box>
                    <Button>
                        <Typography variant="fontBtn"> Смотреть всё портфолио </Typography>
                    </Button>
                </Box>
            </Box>
            <Grid2 container spacing={'30px'}>
                <Grid2 size={6}>
                    <Box>
                        <img src={IMAGES.project1Img} alt="project1Img" className={cls.projectsImgTop} />
                        <Box className={cls.projectsTags}>
                            <Box>
                                <Typography variant='fontBtn'>Аналитика</Typography>
                            </Box>
                            <Box>
                                <Typography variant='fontBtn'>Дизайн</Typography>
                            </Box>
                            <Box>
                                <Typography variant='fontBtn'>Вёрстка</Typography>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10px' }}><Typography variant='contentSmallLH' style={{ textTransform: 'uppercase' }}>Создание корпоративного сайта</Typography></Box>
                    </Box>
                </Grid2>
                <Grid2 size={6}>
                    <Box>
                        <img src={IMAGES.project2Img} alt="project2Img" className={cls.projectsImgTop} />
                        <Box className={cls.projectsTags}>
                            <Box>
                                <Typography variant='fontBtn'>Аналитика</Typography>
                            </Box>
                            <Box>
                                <Typography variant='fontBtn'>Дизайн</Typography>
                            </Box>
                            <Box>
                                <Typography variant='fontBtn'>Вёрстка</Typography>
                            </Box>
                        </Box>
                        <Box style={{ marginTop: '10px' }}><Typography variant='contentSmallLH' style={{ textTransform: 'uppercase' }}>Разработка встроенного приложения в Битрикс24</Typography></Box>
                    </Box>
                </Grid2>
            </Grid2>
            <Box style={{ marginTop: '80px' }}>
                <Box>
                    <img src={IMAGES.project3Img} alt="project3Im" className={cls.projectsImgBottom} />
                    <Box className={cls.projectsTags}>
                        <Box>
                            <Typography variant='fontBtn'>Аналитика</Typography>
                        </Box>
                        <Box>
                            <Typography variant='fontBtn'>Дизайн</Typography>
                        </Box>
                        <Box>
                            <Typography variant='fontBtn'>Вёрстка</Typography>
                        </Box>
                    </Box>
                    <Box style={{ marginTop: '10px' }}><Typography variant='contentSmallLH' style={{ textTransform: 'uppercase' }}>Создание сайта "под ключ"</Typography></Box>
                </Box>
            </Box>
        </Box>
    )
}