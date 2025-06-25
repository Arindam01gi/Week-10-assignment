import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'

export const AppBar = () => {
    const router = useRouter();
    return (
        <Grid container sx={{ p: 4, display: 'flex', justifyContent: 'space-between' }} >
            <div>
                <Typography variant='h6'>
                    Coursera
                </Typography>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid >
                        <Button size="large" variant="contained" onClick={() => {
                            router.push("/signup")
                        }}>Sign up</Button>
                    </Grid>
                    <Grid>
                        <Button size="large" variant="contained" onClick={() => {
                            router.push("/signin")
                        }}>Sign in</Button>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

