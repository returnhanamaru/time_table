    // テーブルをクリアする関数
    function clearTableData() {
      const table = document.getElementById('myTable');
      const rows = table.querySelectorAll('tr');
      
      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll('td[contenteditable="true"]');
        cells.forEach(cell => {
          cell.textContent = '';
        });
      }
    }
