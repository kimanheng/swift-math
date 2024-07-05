const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
score = urlParams.get('score')
console.log(score)
document.getElementById('score').textContent = score