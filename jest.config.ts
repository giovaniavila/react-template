import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Usa ts-jest para transformar TypeScript
  testEnvironment: "jsdom", // Define o ambiente de teste como jsdom (para testes com React)
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mapeia arquivos de estilo (opcional)
  },
};

export default config;