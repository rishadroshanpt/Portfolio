"use client";

import React, { useState, useEffect } from "react";

type Player = "X" | "O" | null;

export default function TicTacToe() {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [isHumanNext, setIsHumanNext] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);
    const [winningLine, setWinningLine] = useState<number[] | null>(null);

    const checkWinner = (squares: Player[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
            [0, 4, 8], [2, 4, 6]             // diags
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };
            }
        }
        if (squares.every(square => square !== null)) return { winner: "Draw", line: null };
        return null;
    };

    const minimax = (squares: Player[], depth: number, isMaximizing: boolean): number => {
        const result = checkWinner(squares);
        if (result?.winner === "O") return 10 - depth;
        if (result?.winner === "X") return depth - 10;
        if (result?.winner === "Draw") return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = "O";
                    const score = minimax(squares, depth + 1, false);
                    squares[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (squares[i] === null) {
                    squares[i] = "X";
                    const score = minimax(squares, depth + 1, true);
                    squares[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    };

    const findBestMove = (squares: Player[]) => {
        let bestScore = -Infinity;
        let move = -1;
        for (let i = 0; i < 9; i++) {
            if (squares[i] === null) {
                squares[i] = "O";
                const score = minimax(squares, 0, false);
                squares[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    };

    useEffect(() => {
        if (!isHumanNext && !winner) {
            const timer = setTimeout(() => {
                const bestMove = findBestMove([...board]);
                if (bestMove !== -1) {
                    const newBoard = [...board];
                    newBoard[bestMove] = "O";
                    setBoard(newBoard);
                    const gameResult = checkWinner(newBoard);
                    if (gameResult) {
                        setWinner(gameResult.winner === "Draw" ? "It's a Draw!" : "You lose !");
                        if (gameResult.line) setWinningLine(gameResult.line);
                    } else {
                        setIsHumanNext(true);
                    }
                }
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isHumanNext, winner, board]);

    const handleClick = (i: number) => {
        if (board[i] || winner || !isHumanNext) return;

        const newBoard = [...board];
        newBoard[i] = "X";
        setBoard(newBoard);

        const gameResult = checkWinner(newBoard);
        if (gameResult) {
            setWinner(gameResult.winner === "Draw" ? "It's a Draw!" : "It's just luck");
            if (gameResult.line) setWinningLine(gameResult.line);
        } else {
            setIsHumanNext(false);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsHumanNext(true);
        setWinner(null);
        setWinningLine(null);
    };

    const getLineClass = () => {
        if (!winningLine) return "";
        const [a, b, c] = winningLine;
        if (a === 0 && b === 1 && c === 2) return "line-row-1";
        if (a === 3 && b === 4 && c === 5) return "line-row-2";
        if (a === 6 && b === 7 && c === 8) return "line-row-3";
        if (a === 0 && b === 3 && c === 6) return "line-col-1";
        if (a === 1 && b === 4 && c === 7) return "line-col-2";
        if (a === 2 && b === 5 && c === 8) return "line-col-3";
        if (a === 0 && b === 4 && c === 8) return "line-diag-1";
        if (a === 2 && b === 4 && c === 6) return "line-diag-2";
        return "";
    };

    return (
        <div className="game-container">
            <div className="game-header mb-4 text-center">
                <h3 className="text-accent fw-bold mb-1">Can you beat me?</h3>
                <p className="small text-secondary m-0">A quick game while you're here!</p>
            </div>

            <div className="game-board-container">
                <div className="game-board">
                    {board.map((square, i) => (
                        <button
                            key={i}
                            className={`game-square ${square === 'X' ? 'x-color' : 'o-color'}`}
                            onClick={() => handleClick(i)}
                            disabled={!!square || !!winner || !isHumanNext}
                        >
                            {square}
                        </button>
                    ))}
                    {winningLine && <div className={`strike-line ${getLineClass()}`} />}
                </div>
            </div>

            <div className="game-footer mt-4 text-center">
                {winner ? (
                    <div className="winner-announcement animate-fade-in">
                        <h4 className="text-primary fw-bold mb-2">{winner}</h4>
                        <button className="btn-reset" onClick={resetGame}>
                            Play Again
                        </button>
                    </div>
                ) : (
                    <p className="text-secondary small">
                        {isHumanNext ? "Your turn (X)" : "Thinking..."}
                    </p>
                )}
            </div>

            <style jsx>{`
                .game-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }
                .game-board-container {
                    position: relative;
                }
                .game-board {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0;
                    width: 210px;
                    height: 210px;
                    position: relative;
                }
                .game-square {
                    aspect-ratio: 1;
                    font-size: 2.5rem;
                    font-weight: 900;
                    background: transparent;
                    border: 2px solid var(--surface-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                }
                
                /* Grid line logic - remove outer borders */
                .game-square:nth-child(3n) { border-right: none; }
                .game-square:nth-child(n+7) { border-bottom: none; }
                .game-square:nth-child(3n-2) { border-left: none; }
                .game-square:nth-child(-n+3) { border-top: none; }

                .game-square:disabled {
                    cursor: default;
                }

                .x-color { color: var(--text-primary); }
                .o-color { color: var(--accent); }
                
                /* Strike line styles */
                .strike-line {
                    position: absolute;
                    background-color: #e74c3c;
                    z-index: 10;
                    border-radius: 4px;
                    transition: all 0.5s ease-in-out;
                    pointer-events: none;
                }

                .line-row-1 { top: 16.66%; left: 5%; width: 90%; height: 4px; transform: translateY(-50%); }
                .line-row-2 { top: 50%; left: 5%; width: 90%; height: 4px; transform: translateY(-50%); }
                .line-row-3 { top: 83.33%; left: 5%; width: 90%; height: 4px; transform: translateY(-50%); }
                
                .line-col-1 { left: 16.66%; top: 5%; height: 90%; width: 4px; transform: translateX(-50%); }
                .line-col-2 { left: 50%; top: 5%; height: 90%; width: 4px; transform: translateX(-50%); }
                .line-col-3 { left: 83.33%; top: 5%; height: 90%; width: 4px; transform: translateX(-50%); }
                
                .line-diag-1 { 
                    top: 50%; left: 50%; width: 120%; height: 4px; 
                    transform: translate(-50%, -50%) rotate(45deg); 
                }
                .line-diag-2 { 
                    top: 50%; left: 50%; width: 120%; height: 4px; 
                    transform: translate(-50%, -50%) rotate(-45deg); 
                }

                .btn-reset {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    text-decoration: underline;
                    cursor: pointer;
                    padding: 5px 15px;
                    transition: color 0.2s;
                }
                .btn-reset:hover {
                    color: var(--text-primary);
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
