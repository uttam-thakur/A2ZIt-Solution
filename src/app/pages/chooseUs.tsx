import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../style/chooseUs.module.css";
import Image from "next/image";
const ChooseUs = () => {
  const [expandedItem, setExpandedItem]: any = useState("rentalService");

  const toggleExpansion = (itemName: any) => {
    if (expandedItem === itemName) {
      setExpandedItem("");
    } else {
      setExpandedItem(itemName);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        WHY CHOOSE US
      </Typography>
      <Card
        sx={{
          color: "red",
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Grid container>
          {/* Image on the right */}
          <Grid item xs={12} md={6}>
            <Image
              // component="img"
              alt={"Image Alt Text"}
              height={400}
              width={750}
              src={"/images/whychooseUs.jpg"}
              className={styles.image}
            />
          </Grid>

          {/* Description on the left */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              marginTop: "-50px",
            }}
          >
            <CardContent>
              <IconButton
                onClick={() => toggleExpansion("rentalService")}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  marginTop: "30px",
                }}
              >
                {expandedItem === "rentalService" ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
                <p className={styles.p}>RENTAL SERVICE</p>
              </IconButton>

              {expandedItem === "rentalService" && (
                <div className={`${styles.expandedItem} ${styles.mobileView}`}>
                  <Image
                    src={
                      "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    }
                    width={250}
                    height={200}
                    alt={"laptop image"}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
                      marginTop: {
                        xs: "0px",
                        sm: "20px",
                      },
                    }}
                  >
                    We carry a wide range of reliable PCs, Macs, and Laptops
                    that cater to all kinds of needs on a professional and
                    non-professional level. We ensure that every device we rent
                    our backed up with an up to date operating system and
                    anti-virus software.
                  </Typography>
                </div>
              )}
              <hr className={styles.horLine}></hr>
              <IconButton
                onClick={() => toggleExpansion("maintenance")}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  marginTop: "-30px",
                }}
              >
                {expandedItem === "maintenance" ? <RemoveIcon /> : <AddIcon />}
                <p className={styles.p}>MAINTENANCE</p>
              </IconButton>

              {expandedItem === "maintenance" && (
                <div className={`${styles.expandedItem} ${styles.mobileView}`}>
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
                      marginTop: {
                        xs: "0px",
                        sm: "20px",
                      },
                    }}
                  >
                    We carry a wide range of reliable PCs, Macs, and Laptops
                    that cater to all kinds of needs on a professional and
                    non-professional level. We ensure that every device we rent
                    our backed up with an up to date operating system and
                    anti-virus software.
                  </Typography>
                  <Image
                    src={
                      "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    }
                    width={250}
                    height={200}
                    alt={"laptop image"}
                  />
                </div>
              )}
              <hr className={styles.horLine}></hr>

              <IconButton
                onClick={() => toggleExpansion("accessories")}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  marginTop: "-30px",
                }}
              >
                {expandedItem === "accessories" ? <RemoveIcon /> : <AddIcon />}
                <p className={styles.p}>ACCESSORIES</p>
              </IconButton>

              {expandedItem === "accessories" && (
                <div className={`${styles.expandedItem} ${styles.mobileView}`}>
                  {" "}
                  <Image
                    src={
                      "https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    }
                    width={250}
                    height={200}
                    alt={"laptop image"}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
                      marginTop: {
                        xs: "0px",
                        sm: "20px",
                      },
                    }}
                  >
                    We carry a wide range of reliable PCs, Macs, and Laptops
                    that cater to all kinds of needs on a professional and
                    non-professional level. We ensure that every device we rent
                    our backed up with an up to date operating system and
                    anti-virus software.
                  </Typography>
                </div>
              )}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ChooseUs;
