import { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import CardList from "./components/CardList";
import MessageCard from "./components/MessageCard";

function App() {
  const [cards, setCards] = useState([dummyCard]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/13-5/recipients/"
        );

        console.log("API 응답 데이터:", response.data);
        // API 응답 데이터가 비어있을 시 더미 데이터를 사용
        if (!response.data.results || response.data.results.length === 0) {
          setCards(dummyCard);
        } else {
          setCards(response.data.results);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
        setCards(dummyCard);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (isloading) return <p>Loading...</p>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
