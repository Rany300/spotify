import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import MainPage from "./pages/MainPage/MainPage";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorText: "white",
            colorTextSecondary: "white",
            colorTextPlaceholder: "white",
            colorTextDescription: "white",
            colorTextDisabled: "white",
            colorTextBase: "white",
            colorBgBase: "gray",
          },
        }}>
        <MainPage />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
