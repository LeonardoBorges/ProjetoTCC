import "./new.css"
import React from "react"
import Topbar from "../../AdminPage/Topbar/Topbar";
import Sidebar from "../../AdminPage/Sidebar/Sidebar";
import { Button } from "@mui/material";


function New() {
    return (
    <div className="new">
      <Topbar/>
      <div className="container">
      <Sidebar/>
        <div className="top">
        <h1>Novo Usuário</h1></div>
        <form className="formulario">
          <div className="form">
            <label> Nome Completo </label>
            <input type="text" placeholder="Ex: Brad Pitt" />
          </div>
          <div className="form">
            <label> Idade </label>
            <input type="text" placeholder="Ex: 18" />
          </div>
          <div className="form">
            <label> Email </label>
            <input type="text" placeholder="Ex: usuario@usuario.com" />
          </div>
          <div className="form">
            <label> Telefone </label>
            <input type="text" placeholder="Ex: 99999-9999" />
          </div>
          <div className="form">
            <label> CEP </label>
            <input type="text" placeholder="Ex: 1234567" />
          </div>
          <Button> Adicionar </Button>
        </form>

      </div>
      </div>
    
    );
  }
  
  export default New;
  