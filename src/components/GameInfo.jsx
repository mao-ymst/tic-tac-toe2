//8 タイムトラベル機能を作る　過去の手に戻れる機能

import React from 'react'

export default function GameInfo({ history, jumpTo }) {
    const moves =
        history.map((squares, move) => {
            let description;
            if (move > 0) {
                description = "GO to move #" + move;
            } else {
                description = "Go to game Start";
            }

            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            );


        });

    return (
        <div className='game-info'>
            <ol>{moves}</ol>
        </div>
    )



}




//履歴historyをボタンに変換する　history配列１手ごとにボタンにする
//ボタンを押したときにその時点の手数に戻る(今の盤面を戻す)関数を作成する
//rfc --> 必要なpropsを考える
//historyはsquare(盤面の配列)が並んだ状態のlist　ボタンクリックでどう見えるかをmovesに作成
//square-->historyに入っているその時点の盤面
//move-->何番目のdataなのかというindex(何手目か)
//description-->説明文
//9　button内の説明文作成map　開始時と〇手目
//10 listとbuttonを作成　buttonを押したときの処理(関数)を設置
//11 GameInfoで作成したmovesを返す