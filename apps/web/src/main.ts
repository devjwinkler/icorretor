import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento raiz da aplicação não encontrado.");
}

app.innerHTML = `<main class="grid min-h-screen place-items-center bg-slate-950 px-6 text-slate-50"><p class="text-center text-sm font-medium">Base do iCorretor configurada.</p></main>`;
