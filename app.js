const labels = document.querySelectorAll('.information label')

//The function below splits each letter of the form into an array
//Then each of the letters are maped to the span with a delay on each letter
//Finally each of these are re-joined into a string.
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
