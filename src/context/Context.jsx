import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState(""); // getting the prompt as input from the searchbox
  const [recentPrompt, setRecentPrompt] = useState(""); // showing the last prompt searched on the main-container
  const [prevPrompts, setPrevPrompts] = useState([]); // for making the recent prompts list in sidebar
  const [showResult, setShowResult] = useState(false); //condition for showing the data instead of predefined UI
  const [loading, setLoading] = useState(false); // loaders condition till data is fetched
  const [resultData, setResultData] = useState(""); // storing the response

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData(""); // to removing the previous response
    setLoading(true); // draw a animation on screen until data is fetched
    setShowResult(true); // show the result instead of predefined UI
    let response;
    if (prompt && typeof prompt === "string") {
      // if previous prompt from the sidebar
      setRecentPrompt(prompt);
      response = await runChat(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for (let index = 0; index < responseArray.length; index++) {
      if (index === 0 || index % 2 !== 1) {
        newResponse += responseArray[index];
      } else {
        newResponse += "<b>" + responseArray[index] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let index = 0; index < newResponseArray.length; index++) {
      const nextWord = newResponseArray[index];

      delayPara(index, nextWord + " ");
    }
    // setResultData(newResponse2); // show the response on Screen
    setLoading(false); // make loader intangible
    setInput(""); // and searchbox Empty
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    newChat,
    resultData,
    setLoading,
    setRecentPrompt,
    setShowResult,
    setResultData,
  };
  return (
    /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
