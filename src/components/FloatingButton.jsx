
import { Fab } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const FloatingButton = () => (
  <Fab 
  
   
  >
   
      
       <div> 
      <button  color="secondary"
    aria-label="add"
    style={{
      position: "fixed",
      bottom: "30px",
      lift: "20px",
      backgroundColor:"hsl(327, 100.00%, 71.60%)",
      borderRadius:30,
      color:"while",

      

    }}
      
      
      >       <AddCircleOutlineIcon />   ADD NEW    </button>
    </div>
  </Fab>
);  

export default FloatingButton;
