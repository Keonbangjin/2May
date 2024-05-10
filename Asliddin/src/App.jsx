import Loginform from "./components/Loginform";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  function handleSubmit(data) {
    toast(`Salom ${data.username} emailingiz: ${data.email}`);
  }

  return (
    <div className="bg-green-400 h-screen flex flex-row justify-center items-center">
      <Loginform handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
};

export default App;
