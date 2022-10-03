function createBoard() {

    let board = document.createElement('div');
    board.setAttribute('class', 'board');

    for(let i = 0; i < 8; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        for(let j = 0; j < 8; j++) {
            let cell = document.createElement('div');

            if((i+j) % 2 == 0){
                cell.setAttribute('class', 'cell light');
                row.appendChild(cell);
            } else {
                cell.setAttribute('class', 'cell dark');
                row.appendChild(cell);
            }
        }

        board.appendChild(row);
    }
    document.body.appendChild(board);
}

createBoard();