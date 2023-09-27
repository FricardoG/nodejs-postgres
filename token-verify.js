const jwt = require('jsonwebtoken');

const secret = 'MyCatPepiRush';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NTgyMzUwNH0.LsQpDf_6ccvieqc99Ai_EFuOm4rQ_eS-0WwQp6mMQDk';

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);