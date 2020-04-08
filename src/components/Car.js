import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
  let id = props.match.params.id
  let specificCar = cars[id - 1]

  const chipData = [
    `id: ${specificCar.id}`,
    `Name: ${specificCar.Name}`,
    `mpg: ${specificCar.Miles_per_Gallon}`,
    `Cylinders: ${specificCar.Cylinders}`,
    `Displacement: ${specificCar.Displacement}`,
    `Horsepower: ${specificCar.Horsepower}`,
    `Weight(lbs): ${specificCar.Weight_in_lbs}`,
    `Acceleration: ${specificCar.Acceleration}`,
    `Year: ${specificCar.Year}`,
    `Origin: ${specificCar.Origin}`,
  ]

  return (
    <Container maxWidth="sm" style={{marginTop: "40px"}}>
      <Paper elevation={3} style={{padding: "40px"}}>
        <h2>{specificCar.Name}</h2>
        {chipData.map((data, i) => <Chip
          key={i}
          label={data}
        />
        )
        }
      </Paper>
    </Container>
  )
}

export default Car