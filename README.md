# Rondelli Studio

Esta aplicação trata-se de um criador de perfis para tatuadores em estúdios de tatuagem. Ao criar seu perfil, o tatuador pode adicionar informações pessoais e profissionais, bem como casos do seu portfólio.

O objetivo principal da aplicação é, futuramente, apresentar esses perfis em uma interface intuitiva, para que os clientes, ao chegarem no estúdio, possam escolher o tatuador que lhes agrada.

## Para Rodar um Ambiente Docker de Desenvolvimento

1. Clone este repositório.

2. Crie um arquivo `.env` tendo o arquivo `.env.example` como referência. É recomendado usar uma cópia idêntica.

3. Verifique se não existe nenhuma aplicação rodando nas portas da aplicação e do PostgreSQL antes de seguir para o próximo passo.

4. Execute o comando a seguir para rodar os serviços presentes no arquivo `docker-compose.yml`:

```bash
make start_dev
```



## Para Gerar uma Imagem Otimizada para Produção
 ```bash
make build_prod
```

