import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomInput from "../common/input/CustomInput";
import CustomButton from "../common/btn/CustomButton";

const LoginForm = (props) => {
    const [isVisiablePass, setIsVisiablePass] = useState(false);
    return (
        <Box component="form" onSubmit={props.onSubmit} noValidate sx={{ mt: 1 }}>
            <CustomInput
                id="username"
                label="User Name"
                autoComplete="username"
                autoFocus
                name="username"
                disabled={props.is_loading}
                value={props.username}
                onChange={props.onChange}
            />
            <CustomInput
                label="Password"
                type={isVisiablePass ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                name="password"
                disabled={props.is_loading}
                value={props.password}
                onChange={props.onChange}
                endIcon={
                    <IconButton
                        onClick={() => setIsVisiablePass(value => !value)}
                    >
                        {isVisiablePass ?
                            <VisibilityOff />
                            :
                            <Visibility />
                        }
                    </IconButton>
                }
            />

            <CustomButton
                is_loading={props.is_loading}
                title='Login'
                type='submit'
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </CustomButton>
        </Box>
    )
}

export default LoginForm