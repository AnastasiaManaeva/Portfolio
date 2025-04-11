import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Grid2, Typography } from '@mui/material'
import cls from './FAQ.module.css'

export function FAQ() {
    return (
        <Box className={cls.accordionWrapper}>
            <Accordion className={cls.accordion}>
                <AccordionSummary 
                    className={cls.accordingHeader}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant='h3'>
                        Какие услуги Вы предоставляете?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className={cls.accordion}>
                <AccordionSummary 
                    className={cls.accordingHeader}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography variant='h3'>
                        Каковы примерные сроки выполнения работ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className={cls.accordion}>
                <AccordionSummary 
                    className={cls.accordingHeader}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant='h3'>
                        Как с Вами связаться?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}