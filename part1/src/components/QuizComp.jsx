import React, { Component } from 'react'
import '../App.css'

class QuizComp extends Component {
  render() {
    return (
      <div className ='question'>
        <h1 className ='q'>Question</h1>
        <h5>1 of 15</h5>
        <h3>Which is the only mammal that can jump?</h3>
        <div className ='choice'>
            <button className ='Choices'>Dog</button>
            <button className ='Choices'>Elephant</button>
            <button className ='Choices'>Goat</button>
            <button className ='Choices'>Lion</button>
        </div>
        <div className ='submit'>
            <button className ='submit1'>Previous</button>
            <button className ='submit2'>Next</button>
            <button className ='submit3'>Quit</button>
        </div>
      </div>
    )
  }
}
export default QuizComp