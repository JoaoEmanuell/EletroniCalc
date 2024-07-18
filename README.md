- [EletroniCalc](#eletronicalc)
  - [Running locally](#running-locally)
  - [Tech Stack](#tech-stack)
  - [Authors](#authors)
  - [License](#license)

[Português Brasil](./README-pt-br.md)

# EletroniCalc

EletroniCalc is a mobile application designed to calculate the monthly cost, in Brazilian Reais, of using an appliance. It uses the *kWh* rate, the appliance's power (in *watts*), and the monthly usage hours as the basis for calculation.

## Running locally

Requirements

```bash
node >= 19.9.0
npm >= 9.6.3
openjdk >= 17.0.10
```

Clone the project:

```bash
git clone https://github.com/JoaoEmanuell/EletroniCalc.git
```

Navigate to the project directory:

```bash
cd EletroniCalc
```

Install the dependencies:

```bash
npm install
```

Generate a debug keystore:

```bash
keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -keyalg RSA -keysize 2048 -validity 10000
```

The password should be `android`.

Move the keystore to `android/app`.

Connect your Android device via USB or start an emulator.

Start Android:

```bash
npm run android
```

Start the server:

```bash
npm run start
```

## Tech Stack

**Mobile:** React Native, TypeScript, and Tailwind CSS

## Authors

- [@JoaoEmanuell](https://www.github.com/JoaoEmanuell)

## License

[MIT](https://github.com/JoaoEmanuell/EletroniCalc/blob/master/LICENSE)
