import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogedIn } from "../../redux/action";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

const handleLogout = async () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
}
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "antiquewhite"
        }}>
            <Button>Logo</Button>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Header;