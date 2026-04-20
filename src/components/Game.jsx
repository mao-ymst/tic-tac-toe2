//7 Board,Square,calculateWinnerを一つのゲームにまとめる(親)
import React, { useState } from 'react'
import Board from './Board';
import GameInfo from './GameInfo';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history, nextSquares];
        setHistory(nextHistory);

        setCurrentMove(nextHistory.length - 1);

    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);

    }

    return (
        <>
            <div>
                <div>
                    <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}></Board>
                </div>
                <GameInfo history={history} jumpTo={jumpTo}/>

            </div>

        </>
    )
}

//Boardにあったsquare、xIsNextをgameで一括管理するStateのリフトアップ
//履歴と今が何手目かを管理するstateを管理する
//propsに必要な値や関数を作成する(今手番が何番目か、Xが偶数番、boardがclickされた時の処理)
//関数　clickされたら履歴更新と何手目か(index番号を入手-1)を次の数にする
//Boardを呼び出し、必要なpropsを渡す

//11 ※state(data)を持っている場所でそのデータを変える関数を持つことがルール　今何手目かの情報を持っているから変える関数はgameComponentで作成する
//今何手目か押されたボタンのindexを反映させて変更する　--> GameInfo呼び出し props渡す 受け渡す名前と渡す名前揃える(jumpTo)
