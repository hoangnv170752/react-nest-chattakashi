import React from 'react'
import { Button, Stack, TextField } from '@mui/material'

interface AuthProps {
    submitLabel: string;
    onSubmit: (credentials: {email: string; password: string}) => Promise<void>;
    children: React.ReactNode;
}
function Auth({ submitLabel, onSubmit, children}: AuthProps) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <Stack spacing={3} sx={{ 
        height: "100vh", 
        maxWidth: {
            xs: "70%",
            md: "30%",
        }, 
        justifyContent: 'center', 
        margin: "0 auto"
    }}>
        <TextField  
            type='email' 
            label='email'
            variant='outlined'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <TextField  
            type='password' 
            label='password'
            variant='outlined'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant='contained' onClick={() => onSubmit({ email, password})}>
            {submitLabel}
        </Button>
        {children}
    </Stack>
  )
}

export default Auth