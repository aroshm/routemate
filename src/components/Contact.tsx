import { useNavigate, Outlet } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Submit Form</button>
      <Outlet />
    </>
  );
};

export default Contact;
