import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    otp:new Array(4).fill("")  
    }
  }


  handleChange=(e,index)=>{
    let value=e.value.replace(/[^0-9]/g,"")
    let otptemp=[...this.state.otp]

    otptemp.splice(index,1,value)
    this.setState({
      otp:[...otptemp]
    },()=>{
      console.log(this.state.otp,"change")
    })

    if(e.nextSibling){
      e.nextSibling.focus()
    }

  }

  submit=(e)=>{
    e.preventDefault()
    alert(this.state.otp.join(""))

  }

  otpClear=(e)=>{
    e.preventDefault()
    let arrayotp=new Array(this.state.otp.length).fill("")
    this.setState({
      otp:arrayotp
    })
  }

  render(){
    return(
      <div>
        <form className="loginSec" onSubmit={this.submit}>
          <div className="form-grup">
            {
              this.state.otp.map((digits,index)=>{
                return <input 
                type='text'
                name='otp'
                maxLength="1"
                key={index}
                value={digits}
                onChange={(e)=>this.handleChange(e.target, index)}
                onFocus={e=>e.target.select()}
                />
              })
            }
          </div>
        
        </form>
        <button onClick={this.otpClear}>Clear the Otp</button>    
        <button type="submit" onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default App;
