import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
    return (
        <div className='contactFormContainer'>
            <h5 style={{ textAlign: 'center', fontSize: '1.3rem' }}>Contact Form</h5>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        placeholder="Enter Name"
                        type='text'
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Enter Email"
                        type='email'
                    />
                    {/* <TextField
                        id="outlined-password-input"
                        label="Message"
                        type="password"
                        autoComplete="current-password"
                    /> */}

                    <TextField

                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={3}
                        placeholder='Message'
                        variant="outlined"
                        sx={{
                            width: '300px', // Adjust width as needed
                            marginTop: 2, // Add spacing
                        }}
                    />
                </div>
            </Box>
        </div>
    )
}





