### Hexlet tests and linter status:
[![Actions Status](https://github.com/yanchik78/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/yanchik78/frontend-project-44/actions)

# Описание

Игры разума — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
---
#### Инструкция по установке

    make install
---
## Инструкция по запуску

### Запуск игр производится следующими командами:

    brain-calc - для запуска калькулятора,
    brain-even - для запуска игры на определение четности числа,
    brain-gcd - для запуска игры на определение наибольшего общего делителя,
    brain-prime - для запуска игры на определение простого числа,
    brain-progression - для запуска игры на определение элемента арифметической прогрессии,

### Примеры запуска
1. Игра "Проверка на чётность"

node bin/brain-even.js

[![asciicast](https://asciinema.org/a/MWqADBevsZrhvCF53DFlzhTP9.svg)](https://asciinema.org/a/MWqADBevsZrhvCF53DFlzhTP9)

2. Игра "Калькулятор"

$ make brain-calc

What is the result of the expression? Question: 5 + 7 Your answer: 12 Correct! Question: 10 - 4 Your answer: 6 Correct! Question: 3 * 8 Your answer: 24 Correct! Congratulations, Bob! Вторая игра
3. Игра "НОД"

$ make brain-gcd

Третья игра
4. Игра "Прогрессия"

$ make brain-progression


5. Игра "Простое ли число?"

$ make brain-prime

Пятая игра
