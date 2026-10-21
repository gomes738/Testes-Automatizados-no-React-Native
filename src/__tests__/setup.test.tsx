import { render, screen } from "@testing-library/react-native";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { formatPrice } from "@utils/index";

describe("Test Environment Setup", () => {
  it("resolves module aliases correctly", () => {
    expect(formatPrice(1234.56)).toBe("1,234.56");
  });

  it("renders a basic React Native component using Testing Library", async () => {
    await render(
      <View>
        <Text>Crypto Alert Test Setup</Text>
      </View>
    );

    expect(screen.getByText("Crypto Alert Test Setup")).toBeTruthy();
  });

  it("has AsyncStorage mock functional", async () => {
    await AsyncStorage.setItem("test-key", "test-val");
    const val = await AsyncStorage.getItem("test-key");
    expect(val).toBe("test-val");
  });

  it("has expo-router mock functional", () => {
    router.push("/test");
    expect(router.push).toHaveBeenCalledWith("/test");
  });

  it("renders mocked Ionicons and Image without native errors", async () => {
    await render(
      <View>
        <Ionicons name="add" />
        <Image source={{ uri: "https://example.com/test.png" }} />
      </View>
    );

    expect(screen.getByTestId("icon-add")).toBeTruthy();
  });
});
