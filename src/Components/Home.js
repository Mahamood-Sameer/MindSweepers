import React,{useState} from "react";
import "./Home.css";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Input } from "@mui/material";
import aarohan from '../Images/final-logo.png'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const [open_Akshay, setOpen_Akshay] = useState(false);

  const handleClickOpen_Akshay = () => {
    setOpen_Akshay(true);
  };

  const handleClose = () => {
    setOpen_Akshay(false);
  };

  //Akshay
  const[akshay,setakshay] = useState("");


  const [open_varandeep, setOpen_varandeep] = useState(false);

  const handleClickOpen_varandeep = () => {
    setOpen_varandeep(true);
  };

  const handleClose_varandeep = () => {
    setOpen_varandeep(false);
  };

  //Varandeep
  const[varandeep,setvarandeep] = useState("");



  const [open_ankitbhaiya, setOpen_ankitbhaiya] = useState(false);

  const handleClickOpen_ankitbhaiya = () => {
    setOpen_ankitbhaiya(true);
  };

  const handleClose_ankitbhaiya = () => {
    setOpen_ankitbhaiya(false);
  };

  //ankit bhaiya
  const[ankitbhaiya,setankitbhaiya] = useState("");

  return (
    <>
    <img src={aarohan} alt="" className="aarohan_logo" />
      <div className="home_container">
        <div className="home_container_left">
          <img
            src={image}
            alt=""
            className="image_game image_rules image_home"
          />
        </div>
        <div className="home__games_right">
          <Button className="links_to_games" onClick={handleClickOpen_Akshay}>
            Rhombus Game 
          </Button>
          <br />
          <br />
          <Button className="links_to_games" onClick={handleClickOpen_varandeep}>
            Special Matrix 
          </Button>
          <br />
          <br />
          <Button className="links_to_games" onClick={handleClickOpen_ankitbhaiya} >
            Rotating circle
          </Button>
        </div>
      </div>


      <Dialog
        open={open_Akshay}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter the game code"}</DialogTitle>
        <Input type="password" className="password_box" placeholder="Game code" value={akshay} onChange={(e)=>(setakshay(e.target.value))} />
        <br />
        <DialogActions>
          <Button onClick={()=>{
              if(akshay==="akshaygame1"){
                  window.location.replace('/rules2')
              }
          }}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>



      <Dialog
        open={open_varandeep}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose_varandeep}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter the game code"}</DialogTitle>
        <Input type="password" className="password_box" placeholder="Game code" value={varandeep} onChange={(e)=>(setvarandeep(e.target.value))} />
        <br />
        <DialogActions>
          <Button onClick={()=>{
              if(varandeep==="varandeepgame4"){
                  window.location.replace('/rules')
              }
          }}>Submit</Button>
          <Button onClick={handleClose_varandeep}>Cancel</Button>
        </DialogActions>
      </Dialog>



      
      <Dialog
        open={open_ankitbhaiya}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose_ankitbhaiya}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter the game code"}</DialogTitle>
        <Input type="password" className="password_box" placeholder="Game code" value={ankitbhaiya} onChange={(e)=>(setankitbhaiya(e.target.value))} />
        <br />
        <DialogActions>
          <Button onClick={()=>{
            console.log(ankitbhaiya)
              if(ankitbhaiya==="ankitbhaiyagame3"){
                  window.location.replace('/rules3')
              }
          }}>Submit</Button>
          <Button onClick={handleClose_ankitbhaiya}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home;
