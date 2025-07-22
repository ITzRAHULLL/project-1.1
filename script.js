body {
  margin: 0;
  font-family: 'Pacifico', cursive;
  background-color: #ffc0cb; /* Light pink */
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: italic; /* Italic font */
}

.content {
  text-align: center;
  z-index: 2;
}

.question {
  font-size: 2.7rem;
  color: #d14e72;
  animation: bounce 1s ease;
  font-style: italic;
}

@keyframes bounce {
  0%   { transform: translateY(-20px); }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0); }
}

.buttons {
  margin-top: 30px;
}

button {
  font-family: 'Pacifico', cursive;
  font-style: italic;
  font-size: 1.5rem;
  margin: 0 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background-color: #ffb6c1;
  color: white;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

button:hover {
  background-color: #ffa3b1;
  transform: scale(1.05);
}
