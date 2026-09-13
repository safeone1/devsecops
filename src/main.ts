
import {sum} from './math'
import Express from 'express'


const app = Express()

app.get('/', (req, res) => {
  const result = sum(5, 10)
  res.send(`The sum of 5 and 10 is: ${result}`)
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})