echo 'function mostrarReceita() { document.getElementById("receita").innerText = "Pizza Calabresa"; }' > script.js

echo "function mostrarReceita() { document.getElementById('receita').innerText = 'Pastel de Carne'; }" > script.js

echo "let receitas = ['Pizza Calabresa', 'Pastel de Carne', 'Xis de Salada']; let index = 0; function mostrarReceita() { document.getElementById('receita').innerText = receitas[index]; index = (index + 1) % receitas.length; }" > script.js