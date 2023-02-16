# Planetfone5D-frontend
Código FrontEnd para o Planetfone5 Debian


##Atualizar dependencias todo Dia 15 do mês

Instalação

Instalar globalmente:
npm install -g npm-check-updates

Ou execute com npx :
npx npm-check-updates

##Uso

Mostre todas as novas dependências ( excluindo peerDependencies ) para o projeto no diretório atual:
$ ncu

Execute ncu -u para atualizar package.json
Atualize o arquivo de pacote de um projeto:

Certifique-se de que seu arquivo de pacote esteja sob controle de versão e que todas as alterações tenham sido confirmadas. Isso substituirá seu arquivo de pacote.

$ ncu-u
Atualizando package.json

Execute npm install para instalar novas versões.

$ npm install       # atualiza pacotes instalados e package-lock.json
Confira os pacotes globais:

ncu-g