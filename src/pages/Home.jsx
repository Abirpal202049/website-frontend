import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Navbar openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
};

export default Home;
