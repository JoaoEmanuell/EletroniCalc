- [EletroniCalc](#eletronicalc)
  - [Rodando localmente](#rodando-localmente)
  - [Stack utilizada](#stack-utilizada)
  - [Autores](#autores)
  - [Licença](#licença)


# EletroniCalc

EletroniCalc é uma aplicação mobile cujo objetivo é descobrir quanto um eletrodoméstico gasta, em reais, mensalmente, usando como base o valor do *kWh*, a potência (em *watts*) do aparelho e as horas mensais de uso.

## Rodando localmente

Requisitos

```bash
node >= 19.9.0
npm >= 9.6.3
openjdk >= 17.0.10
```

Clone o projeto:

```bash
git clone https://github.com/JoaoEmanuell/EletroniCalc.git
```

Entre no diretório do projeto:

```bash
cd EletroniCalc
```

Instale as dependências:

```bash
npm install
```

Gere um keystore de debug:

```bash
keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -keyalg RSA -keysize 2048 -validity 10000
```

A senha deve ser `android`.

Mova o keystore para `android/app`.

Conecte seu dispositivo Android via USB ou execute um emulador.

Inicie o Android:

```bash
npm run android
```

Inicie o servidor:

```bash
npm run start
```

## Stack utilizada

**Mobile:** React Native, TypeScript e Tailwind CSS

## Autores

- [@JoaoEmanuell](https://www.github.com/JoaoEmanuell)

## Licença

[MIT](https://github.com/JoaoEmanuell/EletroniCalc/blob/master/LICENSE)