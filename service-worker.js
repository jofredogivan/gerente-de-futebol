body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #141e30, #243b55);
  color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.game-container {
  width: 100%;
  max-width: 900px;
  background-color: #2e2e3e;
  padding: 30px;
  margin: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  box-sizing: border-box;
}

.main-btn {
  background: linear-gradient(to right, #4CAF50, #45a049);
  color: white;
  padding: 12px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  transition: transform 0.2s ease;
}
.main-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #43a047, #388e3c);
}

.header-info {
  background-color: #1f2a38;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.scrollable {
  max-height: 300px;
  overflow-y: auto;
  background-color: #39424e;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 10px;
}
.scrollable li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #455269;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95em;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
  transition: background-color 0.2s ease;
}
.scrollable li:hover {
  background-color: #556179;
}
.scrollable button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9em;
}
.scrollable button:hover {
  background-color: #45a049;
}

#team-banner {
  padding: 10px;
  border-radius: 8px;
  color: white;
  margin-bottom: 15px;
  text-align: center;
}

@media (max-width: 768px) {
  .header-info {
    flex-direction: column;
    align-items: center;
  }
  .main-btn {
    width: 100%;
    margin: 8px 0;
  }
}
