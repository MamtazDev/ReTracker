import "../Styles/Auth.css";

const Auth = ({ children }) => {
  return (
    <div className="auth_layout">
      <div className="container mx-auto">
        <div className="max-w-[1536px] bg-white rounded-3xl">{children}</div>
      </div>
    </div>
  );
};

export default Auth;
