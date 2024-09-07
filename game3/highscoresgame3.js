const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = `
  <table>
  <thead>
  <tr>
  <th>Rank</th>
  <th>Name</th>
  <th>Score</th>
  </tr>
  </thead>
  <tbody>
  ${highScores.map((score, index) => `<tr><td>${index + 1}</td><td>${score.name}</td><td>${score.score}</td></tr>`).join("")}
  </tbody>
  </table>`;