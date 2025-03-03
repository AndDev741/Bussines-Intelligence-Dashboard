import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import { RootState } from "../redux/rootReduce";

export default function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const registeredName = useSelector((state: RootState) => state.authentication.name);
    const registeredPassword = useSelector((state: RootState) => state.authentication.password);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setError("");
    
            const schema = Yup.object().shape({
                name: Yup.string().min(2, "Minimum of 2 characteres to your name").max(256).required(),
                password: Yup.number().min(3, "Minimum of 3 characteres on password").required()
            });
            
            try{
                await schema.validate({name, password});
                if(name === registeredName && password === registeredPassword){
                    navigate("/dashboard");
                }
                setError("Username or Password Incorrect");
            }catch(validationErrors){
                if(validationErrors instanceof Yup.ValidationError){
                    setError(validationErrors.errors.join(", "));
                }
            }
    }
    return(
        <>
            <Container maxWidth="xs">
                <Paper elevation={10}
                sx={{
                    mt: 8,
                    padding: 2,
                    textAlign: 'center'
                }}
                >
                    <Avatar sx={{
                        mx: 'auto',
                        textAlign: 'center',
                        color: "whitesmoke",
                        bgcolor: "#0082E1"
                    }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box onSubmit={(e) => handleLogin(e)}
                    component={"form"}>
                        <TextField onChange={(e) => setName(e.target.value)}
                        placeholder="Your username" autoFocus fullWidth
                        sx={{my: 2}}
                        />
                        <TextField onChange={(e) => setPassword(e.target.value)}
                        placeholder="*******" fullWidth required type="password"
                        sx={{mb: 2}}
                        />
                        <Typography variant="h6"
                        sx={{color: "red"}}>
                            {error}
                        </Typography>
                        <Button type="submit" fullWidth variant="contained" sx={{my: 1}}>
                            Sign in
                        </Button>
                    </Box>
                    <Link component={RouterLink}
                    to={"/register"}
                    sx={{my: 1}}>
                        Create Account
                    </Link>
                </Paper>
            </Container>
        </>
    )
}