import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { CardActions, CardContent, Typography } from '@mui/material';
import { fmData } from '../../redux/widgetData';
import { useDispatch } from 'react-redux';
import minus from '../../images/minus.png';
import plus from '../../images/plus.png';
import fm from '../../images/fm.jpg';

const stations = [
    {
        name: 'Futin FM',
        count: '66,6',
        panel: 'panel1'
    },
    {
        name: 'Dribble FM',
        count: '101,2',
        panel: 'panel2'
    },
    {
        name: 'Doge FM',
        count: '99,4',
        panel: 'panel3'
    },
    {
        name: 'Ballads FM',
        count: '87,1',
        panel: 'panel4'
    },
    {
        name: 'Maximum FM',
        count: '142,2',
        panel: 'panel5'
    }
];

const SingleStation = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [currentPlay, setCurrentPlay] = React.useState('');
    let [click, setClick] = React.useState(1);

    const dispatch = useDispatch();

    const handleClick = (panel, name) => {

        // console.log(panel)

        const panelArr = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5'];

        if (panelArr.includes(panel)) {
            setClick(click += 1);
            // console.log(e);

            if (click % 2 === 0) {
                setExpanded(panel);
                setCurrentPlay(name);
                dispatch(fmData(name));
            } else if (click % 2 !== 0) {
                setExpanded(false);
                setCurrentPlay('');
            }
        }
    };

    return (
        <>
            <CardContent sx={{ backgroundColor: '#2A2A35' }}>
                {
                    stations.map(s => <Accordion key={s.panel} sx={{ backgroundColor: 'transparent', color: '#fff', border: '0px' }} onClick={() => handleClick(s.panel, s.name)}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ px: 3, py: 1 }}
                        >
                            <Typography sx={{ width: '50%', flexShrink: 0, textAlign: 'left' }}>
                                {s.name}
                            </Typography>
                            <Typography sx={{ width: '50%', flexShrink: 0, textAlign: 'right' }}>
                                {s.count}
                            </Typography>
                        </AccordionSummary>
                        {
                            expanded ? <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Typography variant="img">
                                    <img style={{ width: '25px' }} src={minus} />
                                </Typography>
                                <Typography variant="img">
                                    <img style={{ width: '100px', borderRadius: '10px' }} src={fm} />
                                </Typography>
                                <Typography variant="img">
                                    <img style={{ width: '25px' }} src={plus} />
                                </Typography>
                            </AccordionDetails> : ""
                        }
                    </Accordion>)
                }
            </CardContent>

            {
                currentPlay ? <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#1b1b28' }}>
                    <Typography sx={{ color: '#EDAD61' }} variant="p" component="div">
                        Currently Playing
                    </Typography>
                    <Typography sx={{ color: '#fff' }} variant="h6" component="div">
                        {currentPlay}
                    </Typography>
                </CardActions> : ''
            }

        </>
    );

};

export default SingleStation;