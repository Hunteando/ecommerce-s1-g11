import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link 
        color="inherit" 
        href="https://www.instagram.com/melinda.muriel3/"
        target={"_blank"}
      >
        Melinda Muriel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const validateEmail = (email: string) : boolean => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email) ? true : false;
}

export const validatePassword = (password: string) : boolean => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(password) ? true : false;
}