import React from "react";
import { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

//useref hook

const feedbackDiv = document.querySelector(".feedback");

export default function () {
  let strength;
  function getStrengthColor() {
    if (status === "Weak") strength = "red";
    if (status === "Medium") strength = "orange";
    if (status === "Strong") strength = "green";
    if (status === "Very Strong") strength = "lightgreen";
    return strength;
  }
  const passwordRef = useRef(null);
  const [uppercase, setUppercase] = useState(false);
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Weak");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (symbol) {
      str += "!@#$%^&*()";
    }

    if (uppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (length < 25) setStatus("Weak");

    if (length < 50 && length > 25) setStatus("Medium");

    if (length < 75 && length > 50) setStatus("Strong");

    if (length > 75) setStatus("Very Strong");

    if (number || symbol || uppercase) {
      setStatus("Medium");
    }

    if ((number && symbol) || (number && uppercase) || (symbol && uppercase)) {
      setStatus("Strong");
    }

    if (number && symbol && uppercase) {
      setStatus("Very Strong");
    }

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, uppercase, number, symbol, setPassword]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); //setSelectionRange is a method to set a range of selection
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, uppercase, passwordGenerator, symbol, number]);

  return (
    <>
      <div className="container">
        <div className="input-div">
          <input
            placeholder="Password"
            type="text"
            value={password}
            className="input"
            readOnly
            ref={passwordRef}
          />
          <button onClick={handleCopy} className="copy">
            Copy
          </button>
        </div>
        <div
          style={{
            color: getStrengthColor(strength),
          }}
          className="feedback"
        >
          <p>{status}</p>
        </div>
        <div className="decision-div">
          <div className="lambai">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="numbers">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              id="numbers"
            />
            <label htmlFor="numbers">Uppercase</label>
          </div>

          <div className="symbols">
            <input
              type="checkbox"
              defaultChecked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
              id="symbols"
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
          <div className="test-box">
            <textarea placeholder="Copy button test-box"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
