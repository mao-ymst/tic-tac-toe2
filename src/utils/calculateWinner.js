//4 winnerを判定する
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {

        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default calculateWinner;

// 勝負が決まる並びを設定する
//８通りのうちどれかに当てはまっているか確認する (a,b,cがどれかなら)
//squares[a]　aのマスが空でなく、b,cにaと同じ記号が並んでいるかを確認(つまりb,cも空ではない)
//そろっている記号を返す そろっていなければ続行