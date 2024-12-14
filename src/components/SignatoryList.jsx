
import { Card, CardContent, Typography, Box } from "@mui/material";
import LiamImage from "../assets/profile-img.png";

const SignatoryCard = () => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={LiamImage}
        alt="Liam"
        style={{
          borderRadius: "50%",
          marginRight: "15px",
          maxWidth : "40%"
        }}
      />
      <Box>
        <Typography variant="body1" sx={{ py: 0.5 }}>Liam</Typography>
        <Typography variant="body2" sx={{ py: 0.5 }}>Role: Witness</Typography>
        <Typography variant="body2"sx={{ py: 0.5 }}>D.O.C: 28/04/2024</Typography>
        <Typography variant="body2" sx={{ py: 0.5 }}>Status: Complete</Typography>
      </Box>
    </CardContent>
  </Card>
);

const SignatoryList = () => (
  <Box p={3}>
    <Typography variant="h6" mb={2}>
      Signatory Will
    </Typography>
    {[...Array(4)].map((_, index) => (
      <SignatoryCard
        key={index}
        name="Liam"
        role="Witness"
        doc="28.04.2013"
        status="Complete"
      />
    ))}
  </Box>
);

export default SignatoryList;
