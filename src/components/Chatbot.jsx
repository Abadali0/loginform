import React, { useState } from "react";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GENINI_API_KEY });

const Chatbot = () => {
  const [query, setQuery] = useState();
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const interaction = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: query,
        config: {
          systemInstruction: `
    Your are an a KFC Chatbot,we are US food point 1000 year old in pakistan we have the menu
    Burger,Sandwich...etc

    
    
    
    `,
        },
      });

      setResponse(interaction.candidates[0].content.parts[0].text);
    } catch (err) {
      console.log(err);
      alert("Something Went Wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>{response}</div>
      <div>
        <label htmlFor="query">Query</label>
        <input type="text" name="query" id="query" onChange={handleChange} />
      </div>

      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Chatbot;
