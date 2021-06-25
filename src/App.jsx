import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '8px 38px',
    marginBottom: 35
  },
  paper: {
    backgroundColor: 'green',
    color: 'white'
  },
  divider: {
    color: "white"
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: '5px',
    }
  },
  // palette: {
  //   primary: {
  //     main: orange[500]
  //   },
  //   secondary: {
  //     main: green[400]
  //   }
  // }
})

const ButtonStyled = () => {
  const classes = useStyles();

  return <Button className={classes.root}>Test Styled Button</Button>
}

const CheckboxExample = (e) => {
  const [checked, setChecked] = useState(true)
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            check={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            // color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }} />}
        label="Testing Checkbox" />
    </div>
  )
}

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2"
              component="div" //div with h2 styling
            >
              Welcome to MUI
          </Typography>
            <Typography
              component="div"
              variant="subtitle1"
            // variant="body1"
            >
              Learn MUI          </Typography>
            <ButtonStyled />
            <Grid container
              spacing={2}
              // justify="center"
              direction="column"
            >
              <Grid item xs={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={12}>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item xs={12} container spacing={3}
                // style={{ alignSelf: 'center' }}
                justify="center"
              >
                <Grid item xs={3} >
                  <Paper style={{ height: 75, width: '100%' }} className={classes.paper} >Paper</Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper style={{ height: 75, width: '100%' }} className={classes.paper} >Paper</Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper style={{ height: 75, width: '100%' }} className={classes.paper} >Paper</Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper style={{ height: 75, width: '100%' }} className={classes.paper} >Paper</Paper>
                </Grid>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <TextField
              variant="filled"
              // variant="outlined"
              color="secondary"
              // type="date"
              type="email"
              label="The Time"
              // value="laa"
              placeholder="Email"

            />
            <CheckboxExample />
            <ButtonGroup
              variant="contained"
              color="primary"
            >
              <Button
                href="#"
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                onClick={() => alert('Hello')}
                // variant="contained"
                color="primary"
                size="large" >
                {/* style={{ fontSize: 23 }} disabled */}
              Save
          </Button>
              <Button
                href="#"
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon />}
                onClick={() => alert('Hello')}
                variant="contained"
                color="secondary"
                size="large" >
                {/* style={{ fontSize: 23 }} disabled */}
          Discard
        </Button>
            </ButtonGroup>
          </header>
        </div >
      </Container>
    </ThemeProvider >
  );
}

export default App;
