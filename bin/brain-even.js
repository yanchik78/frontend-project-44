import { helloUser, myName } from '../src/cli.js'
import readlineSync from 'readline-sync'


const isEven = (number) => number % 2 === 0

const gameEven = () => {
  helloUser()
  const userName = myName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}
  const rounds = 3 
  let correctAnswers = 0

  for (let i = 0; i < rounds; i++) 
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(Question: `${randomNumber})
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers += 1
    } else {
      console.log('${userAnswer}' ``is wrong answer; (Correct ``answer was ``'${correctAnswer}').)
    }
  }
`
  ```console.log(Congratulations, $`{userName``}!``)
  console.log(You ```answered ``correctly ${correctAnswers} ``out of ${rounds} questions.)
}

gameEven(`)