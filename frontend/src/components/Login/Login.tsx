import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright, validateEmail, validatePassword } from '../../utils/utils';
interface ICredentials {
  username: string,
  password: string
}

interface IErrors extends ICredentials {}

type ReactEvent = React.ChangeEvent<HTMLInputElement>;

const theme = createTheme();

export default function Login() {
  const [credentials, setCredentials] = React.useState<ICredentials>({} as ICredentials);
  const [errors, setErrors] = React.useState<IErrors>({} as IErrors);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
    alert(JSON.stringify(credentials));
    //TODO: Agregar funcionalidad de login una vez se cuente con el backend
  };

  const handleChangeUser = (event: ReactEvent): void => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
    validateEmail(value) ? 
    setErrors({ ...errors, [name]: "" }) : 
    setErrors({ ...errors, [name]: "Porfavor introduce un email valido" });
  };

   const handleChangePassword = (event: ReactEvent): void => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
    validatePassword(value) ?
    setErrors({ ...errors, [name]: "" }) :
    setErrors({ ...errors, [name]: "Porfavor introduce una contraseña valida: al menos 1 numero, 1 mayuscula, 1 minuscula, no caracteres especiales, en total 8 caracteres." });

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height:1000,marginTop:8 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.diarionorte.com/content/bucket/7/300627h720.jpg.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 12,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '90%',
            }}
          >
            <Avatar 
              sx={{ m: 1, width: 200, height: 200}} 
              variant="rounded" 
              src="https://scontent.ftrc3-1.fna.fbcdn.net/v/t39.30808-6/292705260_355423520102615_5360930653742585650_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1wFvGuPuKhsAX_bJHqU&_nc_ht=scontent.ftrc3-1.fna&oh=00_AT9x8rnZGSGuVgwDe_qbuM8TwJ_Wssc6xrNLpCtLZPRwzw&oe=635DA5E4">
            </Avatar> 
            <Typography component="h1" variant="h5">
              Acceso
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                autoComplete="email"
                autoFocus
                onChange={handleChangeUser}
                error={errors.username ? true : false}
                helperText={errors.username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePassword}
                error={errors.password ? true : false}
                helperText={errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/registrarse" variant="body2">
                    {"No tienes una cuenta? Registrate aqui"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 10 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}