import React from 'react'
import Circle from './Circle'
// import Button from './Button'
// import styles from './App.module.css'

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
// const defaultChoice = 0;

const CirclesPageParams = ({match}) => {
    console.log(match.params)
    const points = pointsChoices[match.params.id]
    return ( 
        <div>

            {
            points.map((point, idx) => <Circle key={idx} top={point.top} left={point.left} />)
            }
        </div>
        
     );
}


 
export default CirclesPageParams;