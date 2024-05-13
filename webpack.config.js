const path = require("path"); //Подключил модуль Node.js для работы с путями на ПК
const CopyPlugin = require("copy-webpack-plugin"); // Плагин для копирования public

module.exports = {
  entry: `./src/main.js`, // Точка входа - главный JavaScript-файл проекта
  output: {
    filename: "bundle.js", // Название итогового бандла
    path: path.resolve(__dirname, "build"), // Куда нужно положить бандл после создания
    clean: true, // Перед сохранением обновлённого бандла старые файлы нужно удалить
  },
  devtool: "source-map", // Генерация source-maps
  plugins: [new CopyPlugin({ patterns: [{ from: "public" }] })], // Включение плагина в сборку и указание директории, откуда нужно скопировать файлы
  module: {
    rules: [
      {
        test: /\.js$/, // Указание регулярным выражением, что преобразовывать нужно только JavaScript-файлы
        exclude: /(node_modules)/, // Файлы из директории node_modules игнорируются
        use: ["babel-loader"], // Используемый лоадер
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
