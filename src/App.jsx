import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table.jsx';
import BasicTable from './components/BasicTable';


function App() {
  return (
    <>
      <BasicTable />
      <br />
      <Table />

    </>
  );
}

export default App;
