
            const board = document.getElementById('wordle-board');
            for(let r=0; r<4; r++) {
                const row = document.createElement('div');
                row.className = 'w-row';
                for(let t=0; t<5; t++) {
                    const tile = document.createElement('div');
                    tile.className = 'w-tile';
                    tile.innerText = '';
                    row.appendChild(tile);
                }
                board.appendChild(row);
            }
            let curRow = 0;
            window.submitWord = function() {
                const inp = document.getElementById('wordle-input');
                const guess = inp.value.toUpperCase();
                if(guess.length !== 5) return;
                const rows = board.querySelectorAll('.w-row');
                if(curRow >= 4) return;
                const tiles = rows[curRow].querySelectorAll('.w-tile');
                for(let i=0; i<5; i++) {
                    tiles[i].innerText = guess[i];
                    tiles[i].style.background = 'green';
                }
                curRow++;
                inp.value = '';
            }
        