function saveTableData() {

        var today = new Date();
        console.log(today);
 
        console.log("年=" + today.getFullYear());
        console.log("月=" + (today.getMonth()+1));
        console.log("日=" + today.getDate());
        console.log("時=" + today.getHours());
        console.log("分=" + today.getMinutes());
        console.log("秒=" + today.getSeconds());

      const table = document.getElementById('myTable');
      let tableData = [];
      const rows = table.querySelectorAll('tr');
      
      const headers = [];
      const headerCells = rows[0].querySelectorAll('th');
      headerCells.forEach(cell => {
        headers.push(cell.textContent.trim());
      });
      
      for (let i = 1; i < rows.length; i++) {
        const row = {};
        const cells = rows[i].querySelectorAll('td');
        
        cells.forEach((cell, index) => {
          row[headers[index]] = cell.textContent.trim();
        });
        
        tableData.push(row);
      }
      
      localStorage.setItem('tableData', JSON.stringify(tableData));
      alert('データが保存されました');
      console.log(tableData);
    }
