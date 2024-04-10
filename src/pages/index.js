import { data } from "@/assessts/data";
import BannerSlider from "@/components/bannerSlider";
import CreditSlider from "@/components/creditSlider";
import Secured from "@/components/secured";
import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <BannerSlider />
        <Container>
          <Box sx={{ mt: 15 }}>
            <Grid container>
              {data.secured.map((val, i) => (
                <Grid item lg={4} key={i}>
                  <Secured
                    img={val.img}
                    description={val.description}
                    title={val.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Box sx={{mt:4}}>
          <CreditSlider />
        </Box>
      </Box>
    </>
  );
}
