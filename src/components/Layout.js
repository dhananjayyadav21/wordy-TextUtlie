import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Alerts from "./Alerts";

const Layout = ({Alert,mystyle,mode,toggleMode,BlueMode,yelloMode,greenMode }) => {
    
  return (
    <>
      <Navbar
        title="Wordy"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        BlueMode={BlueMode}
        yelloMode={yelloMode}
        greenMode={greenMode}
      />
      <Alerts alert={Alert} mystyle={mystyle}/>
      <Outlet />
    </>
  );
};

export default Layout;
