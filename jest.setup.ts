import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

// Mock do AsyncStorage para persistência de dados em memória nos testes
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// Mock do roteador expo-router
jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  },
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}));

// Mock dos ícones vetoriais (@expo/vector-icons) para evitar falhas com fontes nativas
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    Ionicons: ({ name, testID, ...props }: any) =>
      React.createElement(
        Text,
        { testID: testID || `icon-${name}`, ...props },
        name
      ),
  };
});

// Mock do componente nativo expo-image utilizando o componente básico do React Native
jest.mock("expo-image", () => {
  const React = require("react");
  const { Image } = require("react-native");
  return {
    Image: (props: any) => React.createElement(Image, props),
  };
});
