import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import toast, { Toaster } from "react-hot-toast";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const predefinedprompt = "You are a healthchatbot and just answer the following querry with no unnecessary things";

  async function generateAnswer(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCpVo69OJKyLtx0r6no4HYROYxeQIs4I8M",
        {
          contents: [{ parts: [{ text: predefinedprompt + question }] }],
        }
      );
      setAnswer(response.data.candidates[0].content.parts[0].text);
      toast.success("BitHeart Ai Generated your response");
    } catch (error) {
      console.log(error);
      setAnswer("Sorry, something went wrong. Please try again!");
    }
    setLoading(false);
  }

  return (
    <div className="page-container">
      <style>
        {`
          .page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background-color: black;
            text-align: center;
          }

          .header {
            color: #036EFD;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .header-icon {
            color: #036EFD;
            margin-right: 10px;
          }

          .header-text {
            background: linear-gradient(-100deg, #036EFD, #EC7A6F, #EC7A6F);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .chatbot-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 90%;
            max-width: 600px;
            padding: 20px;
            background-color: black;
            border-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .custom-btn {
            border-radius: 20px;
            color: #FFF;
            font-weight: bold;
            width: 90%;
            background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
            background-size: 600%;
            animation: anime 16s linear infinite;
            border: none;
            cursor: pointer;
            margin-bottom: 20px;
          }

          .custom-btn:disabled {
            cursor: not-allowed;
          }

          @keyframes anime {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .textarea {
            width: 90%;
            height: 15vh;
            border-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            font-family: 'PT sans';
            color: #036EFD;
            padding: 10px;
            margin-bottom: 20px;
          }

          .response-container {
            background-color: rgb(241 241 241);
            max-height: 50%;
            width: 90%;
            border-radius: 20px;
            overflow-y: auto;
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            color: black;
            text-align: left;
          }
        `}
      </style>
      <Toaster />
      <div className="header">
        <i className="fa-brands fa-gripfire header-icon"></i>
        <span className="header-text">BitHeat AI Health Assistant</span>
      </div>
      <div className="chatbot-container">
        <form onSubmit={generateAnswer} style={{ width: "100%", textAlign: "center" }}>
          <textarea
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="> Ask your Health Related Query here."
            className="textarea"
          ></textarea>

          <button
            type="submit"
            className="custom-btn"
            disabled={loading}
            style={{ height: "40px" }}
          >
            {loading ? "Generating..." : <><i className="fa-solid fa-poo-storm"></i> &nbsp;Generate Answer</>}
          </button>
        </form>
        <div className="response-container">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
