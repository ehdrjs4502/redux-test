import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reducer/user";

const NavBar = () => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispath = useDispatch();
  console.log(user);
  return (
    <nav>
      {user.id ? (
        <div>
          {user.id}
          <button onClick={() => dispath(logout())}>로그아웃 </button>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>로그인</button>
      )}
    </nav>
  );
};

export default NavBar;
