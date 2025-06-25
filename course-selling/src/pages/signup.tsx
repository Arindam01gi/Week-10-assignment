import React, { useState } from 'react'
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material'

const signup = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
  return (
    
    <Grid container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '20px'
    }}>

        <Typography variant="h6">
            Welcome to Coursera.Sign in below
        </Typography>

        <Box>
            <Card variant="outlined" sx={{ width: 400, padding: 4 }} >
                <TextField 
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    sx={{ 
                        width: '100%',
                        marginBottom: 2
                    }}
                    onChange={(e) =>{
                        setEmail(e.target.value)
                    }}
                />
                <TextField 
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    sx={{ 
                        width: '100%',
                        marginBottom: 2
                    }}
                    type={"password"}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                />

                <Button
                size="large"
                variant="contained"
                >
                    Sign Up
                </Button>

            </Card>
        </Box>

    </Grid>
  )
}

export default signup