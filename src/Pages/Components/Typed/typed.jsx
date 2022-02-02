import Typed from 'react-typed';
import Container from 'react-bootstrap/container';
import { Grid } from "@material-ui/core";


function Title() {

  return (
    <>
        <div class="container">
          <Grid
            Container
            justify="center"
            alignItems="center"
          >
            <Typed
              strings={['Welcome to the BMI Calculator']}
              typeSpeed={40}
            />
          </Grid>
        </div>
    

    </>
  );

}

export default Title;