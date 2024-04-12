import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import support from "@/assessts/images/support.png";
import chat from "@/assessts/icons/chat.svg";
import styles from "@/styles/index.module.css";
import picture from "@/assessts/icons/pictures.svg";
import clock from "@/assessts/icons/clock.svg";
import calendar from "@/assessts/icons/calendar.svg";
const Support = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              lg={4}
              sx={{
                textAlign: "end",
              }}
            >
              <Box
                sx={{
                  pt: 32,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      textAlign: "end",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color={"grey"}
                      fontSize={"28px"}
                      fontWeight={600}
                    >
                      IT Support
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        right: "-6.5rem",
                      }}
                      className={styles.image}
                    >
                      <img src={chat.src} width={"50px"} />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    color={"grey"}
                    fontSize={"15px"}
                    fontWeight={500}
                    marginTop={"20px"}
                  >
                    Our technical department professionals provide you
                    assessment, design, configuration, and integration services
                    across the enterprise.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 8,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      textAlign: "end",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h4"
                      color={"grey"}
                      fontSize={"28px"}
                      fontWeight={600}
                    >
                      Web Design & Web <br /> Development
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        right: "-6.5rem",
                      }}
                      className={styles.image}
                    >
                      <img src={picture.src} width={"50px"} />
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    color={"grey"}
                    fontSize={"15px"}
                    fontWeight={500}
                    marginTop={"20px"}
                  >
                    The Team of SpellCRM Possesses Extensive and In-Depth
                    Knowledge For PHP, Wordpress, Magento etc
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                textAlign: "center",
              }}
            >
              <img src={support.src} />
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                textAlign: "start",
              }}
            >
              <Box
                sx={{
                  pt: 32,
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      textAlign: "end",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: "-6.5rem",
                      }}
                      className={styles.image}
                    >
                      <img src={clock.src} width={"50px"} />
                    </Box>
                    <Typography
                      variant="h4"
                      color={"grey"}
                      fontSize={"28px"}
                      fontWeight={600}
                    >
                      CMS & E-commerce Store
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    color={"grey"}
                    fontSize={"15px"}
                    fontWeight={500}
                    marginTop={"20px"}
                  >
                    We support quick, reliable and accurate custom open-source
                    development for wordpress, Magento, Shopify and other CMS
                    tools to build user-friendly ecommerce-stores.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: 8,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      textAlign: "end",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: "-6.5rem",
                      }}
                      className={styles.image}
                    >
                      <img src={calendar.src} width={"50px"} />
                    </Box>
                    <Typography
                      variant="h4"
                      color={"grey"}
                      fontSize={"28px"}
                      fontWeight={600}
                    >
                      CRM System
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color={"grey"}
                    fontSize={"15px"}
                    fontWeight={500}
                    marginTop={"20px"}
                  >
                    Our Expert Team will provide to your company with dedicated
                    CRM like Merchant Stronghold, Chargeback Expertz, Giant
                    Health Benefits that will help you to run any campaign.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              textAlign: "center",
              mt: 8,
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                padding: "10px 40px",
                borderRadius: "20px",
                border: "none",
              }}
            >
              LEARN MORE
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Support;
