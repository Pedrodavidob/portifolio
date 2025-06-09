// Modo escuro (dark mode)
const body = document.body;

const toggleTheme = () => {
  body.classList.toggle('dark');
};

// Botão para ativar modo escuro
const btn = document.createElement('button');
btn.innerText = '🌙 Modo Escuro';
btn.onclick = toggleTheme;
document.body.prepend(btn);
