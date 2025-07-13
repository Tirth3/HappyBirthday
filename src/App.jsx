import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import img1 from "./assets/images.jpg"

const PUZZLE_SIZE = 3; // 3x3 puzzle

function shuffle(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function isSolved(pieces) {
  return pieces.every((val, idx) => val === idx);
}

function App() {
  const [pieces, setPieces] = useState([]);
  const [messageShown, setMessageShown] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  useEffect(() => {
    const initial = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i);
    setPieces(shuffle(initial));
  }, []);

  const handleClick = (index) => {
    const emptyIndex = pieces.indexOf(pieces.length - 1);
    const x = index % PUZZLE_SIZE;
    const y = Math.floor(index / PUZZLE_SIZE);
    const ex = emptyIndex % PUZZLE_SIZE;
    const ey = Math.floor(emptyIndex / PUZZLE_SIZE);

    const dx = Math.abs(x - ex);
    const dy = Math.abs(y - ey);

    if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
      const newPieces = [...pieces];
      [newPieces[index], newPieces[emptyIndex]] = [newPieces[emptyIndex], newPieces[index]];
      setPieces(newPieces);

      if (isSolved(newPieces)) {
        setTimeout(() => {
          setPuzzleSolved(true);
          setTimeout(() => setMessageShown(true), 800);
        }, 300);
      }
    }
  };

  const solvePuzzle = () => {
    const solved = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i);
    setPieces(solved);
    setPuzzleSolved(true);
    setTimeout(() => setMessageShown(true), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF2DD1] to-[#FDFFB8] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#4DFFBE]">🎁 Birthday Puzzle Game 🎉</h1>

      <div className="relative">
        <div className="grid grid-cols-3 gap-1 bg-white rounded shadow-lg relative z-10">
          {pieces.map((val, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`w-24 h-24 flex items-center justify-center text-2xl font-bold cursor-pointer transition-transform duration-200 overflow-hidden relative ${val === pieces.length - 1 ? "bg-transparent" : "bg-[#63C8FF] text-white"}`}
            >
              {!puzzleSolved && val !== pieces.length - 1 && (
                <div>{val + 1}</div>
              )}
            </div>
          ))}
        </div>

        {puzzleSolved && (
          <motion.img
            src={img1}
            alt="Completed Puzzle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 w-full h-full object-cover rounded shadow-lg z-20"
          />
        )}
      </div>

      {!puzzleSolved && (
        <button
          onClick={solvePuzzle}
          className="mt-4 px-3 py-1 text-sm bg-[#FF2DD1] text-white font-medium rounded shadow hover:brightness-110 transition"
        >
          Solve Puzzle
        </button>
      )}

      {messageShown && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-md text-center"
        >
          <h2 className="text-3xl font-bold text-[#FF2DD1] mb-2">Happy Birthday! TOPPER! 🎂</h2>
          <p className="text-lg text-[#4DFFBE]">You completed the puzzle! You're awesome 🎉</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
