Problema do Amigo Secreto

1. Crie um backend simples usando mongoose e algum framework web qualquer para salvar as pessoas (nome, email, amigo). Um CRUD bem simples mesmo.

2. Crie um frontend bem simples usando Angular ou React para listar, cadastrar, editar e apagar as pessoas e realizar o sorteio.

3. Crie um botão no frontend para realizar o sorteio e enviar para cada pessoa um email contendo o amigo sorteado. Salve o nome de cada amigo sorteado (campo amigo)

4. IMPORTANTE: crie um repositório público no github com o nome de k121 e ao terminar responda esse email com a url do github. A url deve possuir o padrão: github.com/seu-user/k121. Crie uma pasta frontend e outra backend na raiz e escreva as instruções de como executar o programa no README.md

Dicas: 

- Use um banco de dados free (mlab.com por exemplo). Pode também usar o próprio mongodb em localhost.

- Use um servidor free para envio de emails (mailgun.com por exemplo). Pode também usar o FakeSMTP (https://nilhcem.github.io/FakeSMTP/) também

- Se não souber o que é um amigo secreto pesquise: https://pt.wikipedia.org/wiki/Amigo_secreto

O que será avaliado:

Basicamente TUDO. Se conseguir publicar o sistema em algum servidor free, tipo heroku ou qualquer um outro, seria uma boa. Iria me ajudar bastante :)

Seu prazo é de 5 dias à partir de hoje.
~ Mas não ligamos se você quiser entregar antes rs. ;)

Estamos ansiosos pra ver seu amigo secreto funcionado!

Dúvidas? É só responder este e-mail.

Att.
@TechTeam Kenoby


#Hipóteses#
1) Deve-se aceitar um número muito grande de amigos.
2) Uma turma não pode se misturar com outra. -> Sol. tempo de expiração dos dados da database?
3) A roleta pode ocorrer no client e na api. Problemas, roleta no client pode ser adulterada, server é mais seguro.
4) Se o amigo secreto for ele mesmo, escolha outro.
  Problema: o amigo pode ser ele mesmo se for o último.

Development Process

Repository for the whole project - check
Separate folders:
  RESTful API (server, database architecture, routes) - check
  Client (React) - check

