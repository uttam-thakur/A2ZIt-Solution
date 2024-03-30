// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const ChooseUs = () => {
//   const [expandedItems, setExpandedItems]: any = useState({
//     rentalService: false,
//     salesService: false,
//     customBuild: false,
//   });

//   const toggleExpansion = (itemName: any) => {
//     setExpandedItems({
//       ...expandedItems,
//       [itemName]: !expandedItems[itemName],
//     });
//   };

//   return (
//     <>
//       <Typography variant="h5" gutterBottom style={{ marginLeft: "40%" }}>
//         WHY CHOOSE US
//       </Typography>
//       <Card style={{ color: "red", backgroundColor: "black" }}>
//         <Grid container>
//           {/* Image on the right */}
//           <Grid item xs={12} md={6}>
//             <CardMedia
//               component="img"
//               alt="Image Alt Text"
//               height="500"
//               image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             />
//           </Grid>

//           {/* Description on the left */}
//           <Grid item xs={12} md={6}>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 gutterBottom
//                 style={{ marginLeft: "40%" }}
//               >
//                 A2Z IT Solution
//               </Typography>
//               <Typography
//                 variant="h3"
//                 gutterBottom
//                 style={{ marginLeft: "35%" }}
//               >
//                 WHY CHOOSE US
//               </Typography>

//               <IconButton
//                 onClick={() => toggleExpansion("rentalService")}
//                 style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
//               >
//                 <ExpandMoreIcon />
//                 <p>RENTAL SERVICE</p>
//               </IconButton>
//               {expandedItems.rentalService && (
//                 <div style={{ display: "flex", width: "90%" }}>
//                   <img
//                     src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
//                     alt="laptop image"
//                     height="100px"
//                     width="150px"
//                   />
//                   <Typography
//                     variant="body1"
//                     style={{
//                       color: "white",
//                       textAlign: "justify",
//                       padding: "10px",
//                     }}
//                   >
//                     We carry a wide range of reliable PCs, Macs, and Laptops
//                     that cater to all kinds of needs on a professional and
//                     non-professional level. We ensure that every device we rent
//                     our backed up with an up to date operating system and
//                     anti-virus software.
//                   </Typography>
//                 </div>
//               )}

//               <br></br>
//               <IconButton
//                 onClick={() => toggleExpansion("salesService")}
//                 style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
//               >
//                 <ExpandMoreIcon />
//                 <p>MAINTENANCE</p>
//               </IconButton>

//               {expandedItems.salesService && (
//                 <div style={{ display: "flex", width: "90%" }}>
//                   <Typography
//                     variant="body1"
//                     style={{
//                       color: "white",
//                       textAlign: "justify",
//                       padding: "10px",
//                     }}
//                   >
//                     We carry a wide range of reliable PCs, Macs, and Laptops
//                     that cater to all kinds of needs on a professional and
//                     non-professional level. We ensure that every device we rent
//                     our backed up with an up to date operating system and
//                     anti-virus software.
//                   </Typography>
//                   <img
//                     src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
//                     alt="laptop image"
//                     height="100px"
//                     width="150px"
//                   />
//                 </div>
//               )}
//               <br></br>
//               <IconButton
//                 onClick={() => toggleExpansion("customBuild")}
//                 style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
//               >
//                 <ExpandMoreIcon />
//                 <p>ACCESSEORIES</p>
//               </IconButton>
//               {expandedItems.customBuild && (
//                 <div style={{ display: "flex", width: "90%" }}>
//                   <img
//                     src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
//                     alt="laptop image"
//                     height="100px"
//                     width="150px"
//                   />
//                   <Typography
//                     variant="body1"
//                     style={{
//                       color: "white",
//                       textAlign: "justify",
//                       padding: "10px",
//                     }}
//                   >
//                     We carry a wide range of reliable PCs, Macs, and Laptops
//                     that cater to all kinds of needs on a professional and
//                     non-professional level. We ensure that every device we rent
//                     our backed up with an up to date operating system and
//                     anti-virus software.
//                   </Typography>
//                 </div>
//               )}
//             </CardContent>
//           </Grid>
//         </Grid>
//       </Card>
//     </>
//   );
// };

// export default ChooseUs;
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ChooseUs = () => {
  const [expandedItem, setExpandedItem] = useState("");

  const toggleExpansion = (itemName) => {
    if (expandedItem === itemName) {
      setExpandedItem("");
    } else {
      setExpandedItem(itemName);
    }
  };

  return (
    <>
      <Typography variant="h5" gutterBottom style={{ marginLeft: "40%" }}>
        WHY CHOOSE US
      </Typography>
      <Card style={{ color: "red", backgroundColor: "black" }}>
        <Grid container>
          {/* Image on the right */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Image Alt Text"
              height="500"
              image=" https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Grid>

          {/* Description on the left */}
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginLeft: "40%" }}
              >
                A2Z IT Solution
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                style={{ marginLeft: "-35%" }}
              >
                WHY CHOOSE US
              </Typography>

              <IconButton
                onClick={() => toggleExpansion("rentalService")}
                style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
              >
                {expandedItem === "rentalService" ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
                <p>RENTAL SERVICE</p>
              </IconButton>
              {expandedItem === "rentalService" && (
                <div
                  style={{ display: "flex", width: "90%", marginLeft: "40px" }}
                >
                  <img
                    src="https://t4.ftcdn.net/jpg/02/06/84/39/360_F_206843915_5rPRsyBPBW2CSVwt3iO7NXt9Cy5M5HS0.jpg"
                    alt="laptop image"
                    height="150px"
                    width="200px"
                  />
                  <Typography
                    variant="body1"
                    style={{
                      color: "white",
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
              <br></br>
              <IconButton
                onClick={() => toggleExpansion("salesService")}
                style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
              >
                {expandedItem === "salesService" ? <RemoveIcon /> : <AddIcon />}
                <p>MAINTENANCE</p>
              </IconButton>
              {expandedItem === "salesService" && (
                <div
                  style={{ display: "flex", width: "90%", marginLeft: "40px" }}
                >
                  {" "}
                  <Typography
                    variant="body1"
                    style={{
                      color: "white",
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
              <br></br>

              <IconButton
                onClick={() => toggleExpansion("customBuild")}
                style={{ color: "white", marginLeft: "auto", marginTop: 10 }}
              >
                {expandedItem === "customBuild" ? <RemoveIcon /> : <AddIcon />}
                <p>ASSECERIES</p>
              </IconButton>
              {expandedItem === "customBuild" && (
                <div
                  style={{ display: "flex", width: "90%", marginLeft: "40px" }}
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
                    style={{
                      color: "white",
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
