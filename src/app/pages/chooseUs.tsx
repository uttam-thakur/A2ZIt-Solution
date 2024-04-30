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
const ChooseUs = () => {
  const [expandedItem, setExpandedItem]: any = useState("");

  const toggleExpansion = (itemName: any) => {
    if (expandedItem === itemName) {
      setExpandedItem("");
    } else {
      setExpandedItem(itemName);
    }
  };

  return (
    <>
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
            <CardMedia
              component="img"
              alt="Image Alt Text"
              height="500"
              image=" https://st4.depositphotos.com/1350793/27775/i/380/depositphotos_277754254-stock-photo-why-choose-us-with-businessman.jpg"
              sx={{
                padding: "40px",
              }}
            />
          </Grid>

          {/* Description on the left */}
          <Grid item xs={12} md={6}>
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
                <p
                  className={styles.p}
                  // style={{
                  //   marginTop: "15px",
                  //   marginLeft: "10px",
                  //   color: "grey",
                  // }}
                >
                  RENTAL SERVICE
                </p>
              </IconButton>

              {expandedItem === "rentalService" && (
                <div
                  className={styles.expandedItem}

                  // style={{ display: "flex", width: "90%", marginLeft: "40px" }}
                >
                  <img
                    src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    // src="https://st4.depositphotos.com/1350793/27775/i/380/depositphotos_277754254-stock-photo-why-choose-us-with-businessman.jpg"
                    alt="laptop image"
                    height="150px"
                    width="200px"
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
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
              {/* <br></br> */}
              <IconButton
                onClick={() => toggleExpansion("maintenance")}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  marginTop: "-30px",
                }}
              >
                {expandedItem === "maintenance" ? <RemoveIcon /> : <AddIcon />}
                <p
                  className={styles.p}
                  // style={{
                  //   marginTop: "15px",
                  //   marginLeft: "10px",
                  //   color: "grey",
                  // }}
                >
                  MAINTENANCE
                </p>
              </IconButton>

              {expandedItem === "maintenance" && (
                <div
                  className={styles.expandedItem}

                  // style={{ display: "flex", width: "90%", marginLeft: "40px" }}
                >
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
                    }}
                  >
                    We carry a wide range of reliable PCs, Macs, and Laptops
                    that cater to all kinds of needs on a professional and
                    non-professional level. We ensure that every device we rent
                    our backed up with an up to date operating system and
                    anti-virus software.
                  </Typography>
                  <img
                    src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    alt="laptop image"
                    height="150px"
                    width="200px"
                  />
                </div>
              )}
              <hr className={styles.horLine}></hr>
              {/* <br></br> */}

              <IconButton
                onClick={() => toggleExpansion("accessories")}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  marginTop: "-30px",
                }}
              >
                {expandedItem === "accessories" ? <RemoveIcon /> : <AddIcon />}
                <p
                  className={styles.p}
                  // style={{
                  //   marginTop: "15px",
                  //   marginLeft: "10px",
                  //   color: "grey",
                  // }}
                >
                  ACCESSORIES
                </p>
              </IconButton>

              {expandedItem === "accessories" && (
                <div
                  className={styles.expandedItem}
                  // style={{ display: "flex", width: "90%", marginLeft: "40px" }}
                >
                  {" "}
                  <img
                    src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    alt="laptop image"
                    height="150px"
                    width="200px"
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      textAlign: "justify",
                      padding: "10px",
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
    </>
  );
};

export default ChooseUs;
