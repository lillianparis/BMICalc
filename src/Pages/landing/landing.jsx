import React from "react";
import ReactDOM from "react-dom";
import "../landing/style.scss";
import Title from "../Components/Typed/typed";

class Calc extends React.Component {
  
    constructor(){
      super();
  
      this.state = {
        heightFeet: '',
        heightInch: '',
        weight: '',
      }
  
      this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
      this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
      this.handleWeightChange = this.handleWeightChange.bind(this);
      this.calculateBMI = this.calculateBMI.bind(this);
    }
  
    handleHeightFeetChange(event){
      this.setState({
        heightFeet: event.target.value
      });
    }
  
    handleHeightInchChange(event){
      this.setState({
        heightInch: event.target.value
      });
    }  
  
    handleWeightChange(event){
      this.setState({
        weight: event.target.value
      });
    }
  
    calculateBMI(){
      if (this.state.weight && this.state.heightFeet && this.state.heightInch){
    
        let INCHES_IN_FEET = 12;
  
        var height = Number(this.state.heightFeet);
           
            height *= INCHES_IN_FEET;
          
            height += Number(this.state.heightInch);
  
        let weight = this.state.weight;
  
        var bmi = (weight / (height * height)) * 703;
            bmi = bmi.toFixed(2);
  
        return bmi;
      }
    }
  
    getBMIResults(bmi){
      let bmiResults = {
        label: '',
        alertClass: '',
      };
      
      if (bmi <= 18.5){
        bmiResults.label = 'Underweight😒';
        bmiResults.alertClass = 'alert-danger';
      } 
      else if (bmi <= 24.9) {
        bmiResults.label = 'Normal weight😍';
        bmiResults.alertClass = 'alert-success';
      }
      else if (bmi <= 29.9){
        bmiResults.label = 'Overweight😮';
        bmiResults.alertClass = 'alert-warning';
      }
      else if (bmi >= 30) {
        bmiResults.label = 'Obesity😱';
        bmiResults.alertClass = 'alert-danger';
      } else {
        bmiResults.label = 'BMI';
        bmiResults.alertClass = 'alert-primary';
      }
  
      return bmiResults;
    }
  
    render() {
  
      let bmi = this.calculateBMI();
      let results = this.getBMIResults(bmi);
  
      return (
          <>
     <div class="wrap">
        <div className="contents">
          <div className="row">
            <div className="col-xs-12">
              <div id="title">
            <Title />
            </div>
              <p>Enter your weight and height below.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  <legend>Weight</legend>
                  <div className="row">
                    <div className="col-xs-12">
                      <input className="form-control" id="bmiWeight" type="number" min="1" max="1000" value={ this.state.weight } onChange={ this.handleWeightChange } />
                      <label className="control-label" htmlFor="bmiWeight">lb</label>
                    </div>
                  </div>
                </div>
  
                <div className="form-group">
                  <legend>Height</legend>
                  <div className="row">
                    <div className="col-xs-6">
                      <input className="form-control" id="bmiHeightFeet" type="number" min="1" max="12" value={ this.state.heightFeet } onChange={ this.handleHeightFeetChange } />
                      <label className="control-label" htmlFor="bmiHeightFeet">ft</label>
                    </div>
                    <div className="col-xs-6">
                      <input className="form-control" id="bmiHeightInch" type="number" min="0" max="12" value={ this.state.heightInch } onChange={ this.handleHeightInchChange } />
                      <label className="control-label" htmlFor="bmiHeightInch">in</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
  
            <div className="col-sm-6">
              <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
            </div>
  
          </div>
        </div>
        </div>
        </>
      );
    }
  }
  
  function BmiDisplay(props){
    return (
      <div className={"bmi-result alert " + props.alertClass}>
        <div>{ props.bmi || '--.-' }</div>
        <div>{ props.label }</div>
      </div> 
    )
  }
  
  ReactDOM.render(
    <Calc />,
    document.getElementById('root')
  );

  export default Calc;