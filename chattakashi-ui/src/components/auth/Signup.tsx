import { Link } from "react-router-dom";
import Auth from "./Auth";
import { Link as MUILink } from "@mui/material";
const Signup = () => {
    return <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
        <Link to={"/login"} style={{ alignItems: "center"}}>
            <MUILink>Login</MUILink>
        </Link>
    </Auth>;
}

export default Signup;