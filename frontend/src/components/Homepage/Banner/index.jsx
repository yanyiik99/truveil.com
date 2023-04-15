import { Container } from "../../../layouts"
import bannerImage from '../../../assets/img/banner-img.png';
import { Grid } from "@mui/material";
import * as component from '../../../components/index';


function Banner() {
  return (
    <div className='my-12'>
      <Container>
        <Grid container spacing={2}>
          {/* Grid Left  */}
          <Grid item xs={12} xl={6}>
            <div>
              <h1 className="font-bold text-3xl lg:text-5xl">Welcome in <u className="text-[#005180]">Truveil</u> Bali Property</h1>
              <h3 className="mt-6 text-xl lg:text-2xl">A place where you will find your home for longterm stay in Bali..</h3>
              <p className="mt-5 lg:mt-10 mb-14 text-sm lg:text-base">It’s not easy to find a home for longterm staying in Bali right now because foreigners population growth rapidly. 
                We have vision to help you guys to find a suitable home base here in Bali. So, please don’t be hesitate and feel free to contact us as your trusted personel assistant to solve your problem in finding home in Bali. </p>
              <component.Button btn="contactus" label="Contact Us" />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          {/* Grid Right */}
          <Grid item xs={12} xl={5}>
            <div className="hidden lg:block">
              <img src={bannerImage} alt="banner-img" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner