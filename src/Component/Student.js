import React from 'react'
import { Box, Button, Container,Grid,Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { setStudentDetails } from '../redux/action';
import { useDispatch } from 'react-redux';

function Student() {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const studentId = e.target.elements.studentId.value;
        const sessionYear = e.target.elements.sessionYear.value;
        const joiningDate = e.target.elements.joiningDate.value;
        const email = e.target.elements.email.value;

        const studentDetails = {
        firstName,
        lastName,
        studentId,
        sessionYear,
        joiningDate,
        email,
        }

        alert('Form submitted!');
        dispatch(setStudentDetails(studentDetails))
        e.target.reset()
    };

  return (
    <Container sx={{mt:20, border:1}}>
        <form onSubmit={handleSubmit}>
            <Grid container md={4}>
                <Typography sx={{borderBottom: 3,borderColor: 'primary.main',mt:2,mb:2,fontSize: 'h6.fontSize'}}>Student Details</Typography>
            </Grid>
            
            <Box sx={{display:'flex',mt:2, alignItems: 'center'}}>
                <Grid container md={4}>
                    <Typography sx={{mr:5,}} >Name</Typography>
                </Grid>
                <Grid container md={4}>
                    <TextField sx={{ width: '100%'}} id="outlined-basic" label="First name" variant="outlined" name='firstName'/>
                </Grid> 
                <Grid container md={4}>
                    <TextField sx={{ width: '100%',ml:2}} id="outlined-basic" label="Last name" variant="outlined" name='lastName' />
                </Grid>  
            </Box>
            <hr/>

            <Box sx={{display:'flex',alignItems: 'center'}}>
                <Grid container md={4}>
                    <Typography>Student ID</Typography>
                </Grid>
                <Grid container md={8}>
                    <TextField sx={{ width: '100%'}} id="outlined-basic" label="Student ID" variant="outlined" name='studentId'/>
                </Grid>      
            </Box>
            <hr/>

            <Box sx={{display:'flex',alignItems: 'center'}}>
                <Grid container md={4}>
                    <Typography>Session Year(without spacing)</Typography>
                </Grid>
                <Grid container md={8}>
                    <TextField sx={{ width: '100%'}} id="outlined-basic" label="2022-2023" variant="outlined" name='sessionYear'/>
                </Grid>
            </Box>
            <hr/>

            <Box sx={{display:'flex',alignItems: 'center'}}>
                <Grid container md={4}>
                    <Typography>Joining Date</Typography>
                </Grid>
                <Grid container md={8}>
                    <TextField sx={{ width: '100%'}} id="outlined-basic" label="mm/dd/yyyy" variant="outlined" name='joiningDate'/>
                </Grid>   
            </Box>
            <hr/>

            <Box sx={{display:'flex',alignItems: 'center'}}>
                <Grid container md={4}>
                    <Typography>Email</Typography>
                </Grid>
                <Grid container md={8}>
                    <TextField sx={{ width: '100%'}} id="outlined-basic" label="email" variant="outlined" name='email'/>
                </Grid>   
            </Box>
            <hr/>

            <Box>
                <Grid container md={12} sx={{display:'flex',justifyContent:'center',mt:2,mb:2}}>
                    <Button type='submit' variant="contained">Submit</Button>
                </Grid>
            </Box>
        </form>
    </Container>
  )
}

export default Student