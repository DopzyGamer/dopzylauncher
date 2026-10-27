# Dopzy Fusion Launcher — página de downloads

Página única com dois botões para downloads no Google Drive, no estilo visual do launcher PC. Sem Cloud Mods, menu lateral ou login.

## Links configurados

- **PC (Windows):** https://drive.google.com/file/d/1Y-hQfGhU_E4gxXKlJkyKSQVRRKjkYVlP/view?usp=drive_link
- **APK (Android):** https://drive.google.com/file/d/1XtXI84lJ0GJfjDdUq7jLxgrmaa1ITtKM/view?usp=sharing

Links configurados no arquivo `config.js`. Os botões abrem a página de cada arquivo no Google Drive, onde o visitante pode clicar em **Fazer download**. Isso evita depender de redirecionamentos de download direto, que o Google pode bloquear para alguns arquivos.

**Antes de publicar:** certifique-se de que ambos os arquivos estejam com acesso geral **Qualquer pessoa com o link → Leitor**. Os links foram fornecidos pelo usuário; a disponibilidade e as permissões não foram verificadas.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub chamado `SEUUSUARIO.github.io` (ou utilize um repositório existente).
2. Extraia este ZIP e envie diretamente para a raiz do repositório os arquivos `index.html`, `styles.css`, `script.js`, `config.js` e a pasta `assets`.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Acesse `https://SEUUSUARIO.github.io` (ou `https://SEUUSUARIO.github.io/NOME-DO-REPOSITORIO/`).

Para alterar os links no futuro, edite somente `config.js`.

**Segurança:** o GitHub Pages é público. Não armazene códigos de acesso, tokens ou chaves privadas no frontend.
