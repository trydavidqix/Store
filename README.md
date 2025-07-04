# 👟 Store - E-commerce de Tênis

Um aplicativo mobile de e-commerce moderno e elegante para venda de tênis, desenvolvido com React Native e Expo.

## 📱 Preview

<div align="center">
  <img src="./src/assets/Screenshot_1751670591.png/>
</div>

*Interface principal do aplicativo mostrando o catálogo de tênis com navegação intuitiva*

## 📱 Sobre o Projeto

O **Store** é um aplicativo de e-commerce focado na venda de tênis masculinos, oferecendo uma experiência de usuário intuitiva e moderna. O app apresenta uma interface limpa com navegação fluida entre catálogo de produtos e detalhes dos itens.

### ✨ Funcionalidades

- 🏠 **Tela Inicial**: Catálogo de produtos com grid de tênis
- 🔍 **Detalhes do Produto**: Visualização completa com preços, cores e tamanhos
- 🎨 **Seleção de Cores**: Interface visual para escolha de variações
- 📏 **Seleção de Tamanhos**: Botões interativos para diferentes numerações
- 💰 **Exibição de Preços**: Valores destacados para cada produto
- 🛒 **Botão de Compra**: Interface para finalização de pedidos
- 📱 **Design Responsivo**: Otimizado para diferentes tamanhos de tela
- 🎯 **Navegação Fluida**: Transições suaves entre telas

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **TypeScript** - Linguagem com tipagem estática
- **React Navigation** - Navegação entre telas
- **Expo Google Fonts** - Fonte customizada Anton
- **React Native Gesture Handler** - Gestos e animações
- **React Native Safe Area Context** - Gerenciamento de área segura

## 📦 Dependências Principais

```json
{
  "@expo-google-fonts/anton": "^0.4.1",
  "@react-navigation/native": "^7.1.14",
  "@react-navigation/native-stack": "^7.3.21",
  "expo": "~53.0.17",
  "react": "19.0.0",
  "react-native": "0.79.5",
  "react-native-gesture-handler": "~2.24.0",
  "react-native-safe-area-context": "5.4.0"
}
```

## 🏗️ Estrutura do Projeto

```
Store/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Shoes/           # Card de produto
│   │   ├── Button/          # Botão de compra
│   │   ├── Dot/             # Indicador de cores
│   │   ├── SizeButton/      # Seletor de tamanhos
│   │   └── Footer/          # Rodapé com sugestões
│   ├── pages/
│   │   └── Home/            # Tela principal
│   ├── Detail/              # Tela de detalhes do produto
│   ├── assets/              # Imagens e recursos
│   └── router.tsx           # Configuração de navegação
├── App.tsx                  # Componente principal
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Expo Go app (para testing no dispositivo)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/trydavidqix/Store.git
   cd Store
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Para executar em plataformas específicas**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Web
   npm run web
   ```

## 📱 Telas do Aplicativo

### 🏠 Tela Principal (Home)
- Header com banner promocional
- Filtro de produtos (Tênis Masculino)
- Grid de produtos com imagens, nomes e preços
- Navegação para detalhes do produto

### 🔍 Tela de Detalhes (Detail)
- Imagem em destaque do produto
- Informações de preço e nome
- Seletor de cores (dots coloridos)
- Seletor de tamanhos (botões)
- Descrição detalhada do produto
- Especificações técnicas
- Botão de compra
- Seção "Você também pode gostar"

## 🎨 Componentes

### `Shoes`
Componente de card de produto com:
- Imagem do tênis
- Nome do produto (com truncamento automático)
- Preço com opacidade reduzida
- Ação de clique configurável

### `SizeButton`
Botão para seleção de tamanhos com:
- Estilo customizável (cor de fundo e texto)
- Estados visual para seleção
- Suporte a diferentes numerações

### `Dot`
Indicador visual de cores com:
- Formato circular
- Cor configurável via props
- Sombra para destaque

### `Button`
Botão principal de compra com:
- Estilo consistente
- Texto "COMPRAR"
- Design destacado

## 💡 Características Técnicas

- **Tipagem TypeScript**: Interfaces bem definidas para props
- **Navegação Tipada**: Parametrização de rotas com TypeScript
- **Gesture Handling**: Suporte completo a gestos nativos
- **Safe Area**: Compatibilidade com notch e áreas seguras
- **Font Loading**: Carregamento assíncrono de fontes customizadas
- **Edge-to-Edge**: Suporte ao modo edge-to-edge do Android

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador

## 📄 Licença


## Author

| [<img src="https://avatars.githubusercontent.com/u/193255351?s=400&u=fc9352baf3193df4491c0a07d9b8a40ea0a82e9f&v=4" width="100" style="border-radius: 50%;"><br><sub>David Macêdo</sub>](https://github.com/trydavidqix) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [LinkedIn](https://www.linkedin.com/in/trydavidqix/) |
