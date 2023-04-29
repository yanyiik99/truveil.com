import { Box, Button, 
  Checkbox, FormControl, 
  Grid, InputLabel, 
  ListItemText, MenuItem, 
  OutlinedInput, Select, 
  TextField } from '@mui/material';
import * as admin from '../../admin';
import { useState } from 'react';
import * as component from '../../components';




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

const dataFacilities = [
  'AC',
  'Fridge',
  'Living Room',
  'Parking Space',
  'Kitchen',
  'Internet',
  'TV',
  'Rubbish Collection',
];



function AddVilla() {

  // UPLOAD IMAGE & PREVIEW
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };


  // RENT TYPE STATE
  const [rentType, setRentType] = useState('');
  const handleChangeRentType = (event) => {
    setRentType(event.target.value);
  };

  // BEDROOM STATE
  const [bedroom, setBedroom] = useState('');
  const handleChangeBedrrom = (event) => {
    setBedroom(event.target.value);
  };

  // SWIMING STATE
  const [swiming, setSwiming] = useState('');
  const handleChangeSwiming = (event) => {
    setSwiming(event.target.value);
  };

  // SWIMING STATE
  const [living, setLiving] = useState('');
  const handleChangeLiving = (event) => {
    setLiving(event.target.value);
  };

    // Include Facilities 
    const [facilities, setFacilities] = useState([]);
    const handleChangeFacilities = (event) => {
      const {
        target: { value },
      } = event;
      setFacilities(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  

  return (
    <div>
        <admin.Wrapper>
            <div>
              <h1 className='text-3xl mb-8'>Add Villa</h1>
              <form method='POST'>

                {/* ROW 1 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name='originalvilla' label="Original Villa Name" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name='anonymousvilla' label="Anonymous Villa Name" variant="outlined" />
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 2 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name='location' label="Location" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name='linkmaps' label="Link Google Maps" variant="outlined" />
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 3 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name='contact' label="Contact" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Rent Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='renttype'
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
                </Grid>

                {/* ROW 4 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <TextField className="w-full" id="outlined-basic" name="price" label="Price" variant="outlined" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Bedroom</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='bedroom'
                            value={bedroom}
                            label="Select Bedroom"
                            onChange={handleChangeBedrrom}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 5 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Swiming Pool</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='swiming'
                            value={swiming}
                            label="Swiming Pool"
                            onChange={handleChangeSwiming}
                          >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={2}>No</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Living Room</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='living'
                            value={living}
                            label="Living Room"
                            onChange={handleChangeLiving}
                          >
                            <MenuItem value={1}>Yes</MenuItem>
                            <MenuItem value={2}>No</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 6 */}
                <Grid container spacing={10} className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-multiple-checkbox-label">Facilities</InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            name='facilities'
                            value={facilities}
                            onChange={handleChangeFacilities}
                            renderValue={(selected) => selected.join(', ')}
                            input={<OutlinedInput label="Facilities" />}
                            MenuProps={MenuProps}
                          >
                            {dataFacilities.map((dataFacility) => (
                              <MenuItem
                                key={dataFacility}
                                value={dataFacility}
                              >
                                <Checkbox checked={facilities.indexOf(dataFacility) > -1} />
                                <ListItemText primary={dataFacility} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 7 */}
                <Grid container className='my-12 px-5'>
                  <Grid item xs={12}>
                    <div>
                      <TextField
                        name='desc'
                        label="Description"
                        variant='outlined'
                        id='outlined-basic'
                        className='w-full'
                        multiline
                        rows={5}
                      />
                    </div>
                  </Grid>
                </Grid>

                {/* ROW 8 */}
                <Grid container className='my-12 px-5'>
                  <Grid item xs={6}>
                    <div>
                      <Button
                        variant="contained"
                        component="label"
                      >
                        Upload Image
                        <input
                          name='img'
                          accept="image/*"
                          type="file"
                          onChange={imageChange}
                          hidden
                        />
                      </Button>
                      <p className='text-sm mt-2 text-gray-400'>
                        <span>Max 3MB</span>
                        <br />
                        <span>Format : PNG, JPG, JPEG</span>
                      </p>

                      {selectedImage && (
                        <div className='mt-12 p-4 bg-gray-300 border-2 border-dashed border-gray-500 rounded-md'>
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumb"
                            className=''
                          />
                        </div>
                      )}
                    </div>
                  </Grid>
                </Grid>

                <div className='flex justify-center'>
                    <component.Button label="Add Villa" btn="addvilla" />
                </div>

              </form>
            </div>
        </admin.Wrapper>
    </div>
  )
}

export default AddVilla;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};