    function transposeMatrix() {
    const input = document.getElementById('matrixInput').value.trim();

    const rows = input.split('\n').map(row => row.trim().split(/\s+/).map(Number));


    if (!rows.length || !rows.every(r => r.length === rows[0].length)) {
        document.getElementById('outputMatrix').textContent = 'Invalid matrix input.';
        return;
    }

    const transposed = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));

    const outputStr = transposed.map(row => row.join(" " )).join('\n');
    document.getElementById('outputMatrix').textContent = outputStr;
}