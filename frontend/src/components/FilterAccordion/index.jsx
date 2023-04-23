
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { AiFillCaretDown } from "react-icons/ai";
import { Container } from "../../layouts";
import * as Homepage from "../Homepage";





function FilterAccordion() {
  return (
    <div className="my-20">
        <Container>
            <Accordion className="bg-blue-400 my-20">
                <AccordionSummary
                expandIcon={<AiFillCaretDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="border-2 border-blue-600"
                >
                    <Typography>Search Your Property</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <Homepage.FormFilter/>
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    </div>
  );
}

export default FilterAccordion;