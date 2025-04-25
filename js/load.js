function loadTableData() {
    const savedData = localStorage.getItem('tableData');
  if (savedData) {
      return JSON.parse(savedData);
  } else {
      console.log('保存されたデータがありません'); 
      return null;
  }
}
