export const questions = [
  {
    id: 1,
    question: "¿Cuál console.log está bien escrito?",
    options: [
      "console.log 'Hola'",
      "console.log(Hola)",
      "console.log('Hola')",
      "Console.log('Hola')",
    ],
    answer: "console.log('Hola')",
  },
  {
    id: 2,
    question: "¿Cuál declaración de variable es correcta?",
    options: ["let nombre = Juan", "let nombre = 'Juan'", "let = nombre 'Juan'", "nombre let = 'Juan'"],
    answer: "let nombre = 'Juan'",
  },
  {
    id: 3,
    question: "¿Cuál arrow function es válida?",
    options: [
      "const suma => (a,b) {return a+b}",
      "const suma = (a,b) => a + b",
      "const suma = a,b => a+b",
      "const suma = (a,b) -> a+b",
    ],
    answer: "const suma = (a,b) => a + b",
  },
  {
    id: 4,
    question: "¿Cuál if está bien escrito?",
    options: ["if x > 5 {}", "if (x > 5) {}", "if x > 5 then {}", "if {x > 5}"],
    answer: "if (x > 5) {}",
  },
  {
    id: 5,
    question: "¿Cuál array es correcto?",
    options: ["let arr = (1,2,3)", "let arr = [1,2,3]", "let arr = {1,2,3}", "let arr = <1,2,3>"],
    answer: "let arr = [1,2,3]",
  },
  {
    id: 6,
    question: "¿Cuál acceso a objeto es correcto?",
    options: ["persona-nombre", "persona.nombre", "persona=>nombre", "persona[nombre"],
    answer: "persona.nombre",
  },
  {
    id: 7,
    question: "¿Cuál función es válida?",
    options: [
      "function saludar[] {}",
      "function saludar() {}",
      "function = saludar() {}",
      "saludar function() {}",
    ],
    answer: "function saludar() {}",
  },
  {
    id: 8,
    question: "¿Cuál import en React es correcto?",
    options: [
      "import React from react",
      "import { React } from 'react'",
      "import React from 'react'",
      "import react from 'React'",
    ],
    answer: "import React from 'react'",
  },
  {
    id: 9,
    question: "¿Cuál map está bien usado?",
    options: [
      "array.map(item => {})",
      "array.map[item => {}]",
      "array.map = item => {}",
      "array.map(item) => {}",
    ],
    answer: "array.map(item => {})",
  },
  {
    id: 10,
    question: "¿Cuál JSX es válido?",
    options: [
      "<h1>Hola</h1",
      "<h1>Hola<h1>",
      "<h1>Hola</h1>",
      "h1>Hola</h1>",
    ],
    answer: "<h1>Hola</h1>",
  },
];