import { useNavigate, Outlet } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Submit Form</button>
      <Outlet />
    </main>
  );
};

export default Contact;
