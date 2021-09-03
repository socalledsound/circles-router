import React, { Component } from 'react'
import Circle from './Circle'
import Button from './Button'
import styles from './App.module.css'

const radius = 200;

const numCircles = 100

const circlePoints = Array.from({length: numCircles}, (el, i) => {
    return ({
        top: window.innerHeight/2 + Math.cos(i * .06) * radius,
        left: window.innerWidth/2 + Math.sin( i * .06) * radius
    })
})

const linePoints = Array.from({ length: numCircles}, (el, i) => {
    return({
        top: window.innerHeight/2,
        left: window.innerWidth/numCircles * i
    })
})

const pointsChoices = [circlePoints, linePoints]
const defaultChoice = 0;

class CirclesPage extends Component {

    state = {
        choice: defaultChoice,
        pointsChoices : pointsChoices
    }

    toggleChoice = (idx) => {
        this.setState({
            choice: idx,
        })
    }


    render(){
        const { choice, pointsChoices } = this.state
        const points = pointsChoices[choice]
        return ( 
            <div>
                <div className={styles.buttonsRow}>
                    {
                        pointsChoices.map((item, idx) => {
                            return (
                                <Button key={idx} idx={idx} updateParent={this.toggleChoice}/>
                            )
                        })
                    }
                </div>
                {
                points.map((point, idx) => <Circle key={idx} top={point.top} left={point.left} />)
                }
            </div>
            
         );
    }
    
}
 
export default CirclesPage;