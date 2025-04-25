// テーブルにデータを表示する関数
    function displaySavedData() {
      const tableData = loadTableData();
      if (!tableData) {
        alert('保存されたデータがありません');
        return;
      }
      
      const table = document.getElementById('myTable');
      const rows = table.querySelectorAll('tr');
      
      const headers = [];
      const headerCells = rows[0].querySelectorAll('th');
      headerCells.forEach(cell => {
        headers.push(cell.textContent.trim());
      });
      
      for (let i = 0; i < tableData.length; i++) {
        if (i + 1 < rows.length) {
          const dataRow = tableData[i];
          const cells = rows[i + 1].querySelectorAll('td');
          
          cells.forEach((cell, index) => {
            if (cell.getAttribute('contenteditable') === 'true') {
              cell.textContent = dataRow[headers[index]] || '';
            }
          });
        }
      }
      
      alert('保存された時間割を表示しました。');
}
