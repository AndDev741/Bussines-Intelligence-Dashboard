import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { nameEnter, passwordEnter } from "../redux/authentication/authenticationSlice";

export default function Register(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const schema = Yup.object().shape({
            name: Yup.string().min(2, "Minimum of 2 characteres to your name").max(256).required(),
            password: Yup.number().min(3, "Minimum of 3 characteres on password").required()
        });
        
        try{
            await schema.validate({name, password});
            dispatch(nameEnter(name));
            dispatch(passwordEnter(password));
            setSuccess("Account created successfully");
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
                        Sign up
                    </Typography>
                    <Box component={"form"} 
                    onSubmit={(e) => handleRegister(e)}>
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
                        <Typography variant="h6"
                        sx={{color: "blue"}}>
                            {success}
                        </Typography>
                        <Button type="submit" fullWidth variant="contained" sx={{my: 1}}>
                            Sign up
                        </Button>
                    </Box>
                    <Link component={RouterLink}
                    to={"/"}
                    sx={{my: 1}}>
                        Already have an account?
                    </Link>
                </Paper>
            </Container>
        </>
    )
}