import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, useTheme } from "@mui/material";
import { Container } from "../../../layouts";
import { useState } from "react";
import * as component from '../../../components/index';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const filters = [
  'Pool',
  'Open Living Room',
];


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function FormFilter() {

  // RENT TYPE STATE
  const [rentType, setRentType] = useState('');
  const handleChangeRentType = (event) => {
    setRentType(event.target.value);
  };
  
  // LOCATION STATE
  const [location, setLocation] = useState('');
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  

  // Bedrrom TYPE STATE
  const [bedroom, setBedroom] = useState('');
  const handleChangeBedrrom = (event) => {
    setBedroom(event.target.value);
  };
  
  // Other Filter STATE

  const [otherFilter, setOtherFilter] = useState([]);

  const handleChangeOtherFilters = (event) => {
    const {
      target: { value },
    } = event;
    setOtherFilter(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  

  return (
    <div className="mt-44">
        <Container>
          <div className="border-4 border-[#4C748B] rounded-xl p-10">
            <form method="POST">
              <h3 className="text-[#4C748B] font-semibold">Search Your Property</h3>
              <div>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <div className="w-full mt-10">
                      <TextField className="w-full" id="outlined-basic" label="Property Name / ID" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <div className="mt-10">
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Rent Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rentType}
                            label="Rent Type"
                            onChange={handleChangeRentType}
                          >
                            <MenuItem value={1}>Sale - Freehold</MenuItem>
                            <MenuItem value={2}>Sale - Leasehold</MenuItem>
                            <MenuItem value={3}>Rent - Monthly</MenuItem>
                            <MenuItem value={4}>Rent - Yearly</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <div className="mt-10">
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="select-location-filter">Location</InputLabel>
                          <Select
                            labelId="select-location-filter"
                            id="demo-simple-select"
                            value={location}
                            label="Location"
                            onChange={handleChangeLocation}
                          >
                            <MenuItem value={10}>Canggu</MenuItem>
                            <MenuItem value={20}>Seminyak</MenuItem>
                            <MenuItem value={30}>Ubud</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <div className="w-full mt-10">
                      <TextField className="w-full" id="outlined-basic" label="Price" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <div className="mt-10">
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Bedroom</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bedroom}
                            label="Select Bedroom"
                            onChange={handleChangeBedrrom}
                          >
                            <MenuItem value={11}>1</MenuItem>
                            <MenuItem value={22}>2</MenuItem>
                            <MenuItem value={33}>3</MenuItem>
                            <MenuItem value={44}>4</MenuItem>
                            <MenuItem value={55}>5</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <div className="mt-10">
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-multiple-checkbox-label">Other Filters</InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={otherFilter}
                            onChange={handleChangeOtherFilters}
                            renderValue={(selected) => selected.join(', ')}
                            input={<OutlinedInput label="Other Filters" />}
                            MenuProps={MenuProps}
                          >
                            {filters.map((filter) => (
                              <MenuItem
                                key={filter}
                                value={filter}
                              >
                                <Checkbox checked={otherFilter.indexOf(filter) > -1} />
                                <ListItemText primary={filter} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                </Grid>
            </div>
            <component.Button btn="search" label="Search" />
            </form>
          </div>
        </Container>
    </div>
  )
}

export default FormFilter;