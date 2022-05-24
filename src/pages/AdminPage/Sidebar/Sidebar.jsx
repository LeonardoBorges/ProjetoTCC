import React from "react";
import "./Sidebar.css";
import { BsFilterSquare, BsGraphUp, BsGraphDown, BsShop } from "react-icons/bs";
import {FcMenu, FcAddDatabase, FcInfo } from "react-icons/fc";
import {FaShopify, FaIndustry, FaMailBulk, FaUserSecret, FaUserAlt} from "react-icons/fa";
import { MdLocalOffer, MdMessage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  
  let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Painel</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <FcMenu className="sidebarIcon"/>
                Home
            </li>
            <li className="sidebarListItem">
              <BsGraphUp className="sidebarIcon"/>
                Análise
            </li>
            <li className="sidebarListItem">
              <FcAddDatabase className="sidebarIcon"/>
                Pedidos
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Lojas</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BsShop className="sidebarIcon"/>
                Lojas
            </li>
            <li className="sidebarListItem">
              <FaShopify className="sidebarIcon"/>
                Produtos
            </li>
            <li className="sidebarListItem">
              <MdLocalOffer className="sidebarIcon"/>
                Ofertas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaUserAlt className="sidebarIcon"/>
              <button 
                onClick={()=>{
                  navigate('/Users')
                }}>
                  Usuarios
            </button>   
            </li>
            <li className="sidebarListItem">
              <FcInfo className="sidebarIcon"/>
                Informações
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificação</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaMailBulk className="sidebarIcon"/>
                Email da empresa
            </li>
            <li className="sidebarListItem">
              <MdMessage className="sidebarIcon"/>
                Mensagens
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Empresa</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaUserSecret className="sidebarIcon"/>
                Administradores
            </li>
            <li className="sidebarListItem">
              <FaIndustry className="sidebarIcon"/>
                Sobre a Empresa
            </li>
          </ul>
        </div>
      </div>
  </div>

  )
}  