import React, {useEffect} from 'react';
import './styles.css';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

function CreatePoint() {

  useEffect(() => {
    api.get('items').then(response => {
      console.log(response);
    })

  },[]);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form >
        <h1 style={{ textAlign: "center" }}>Cadastro do ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          
          <div className="field">
          <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">

          <div className="field">
            <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="field">
            <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>


        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-27.2092052, -49.6401092]} zoom={15} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
              <Marker position={[-27.2092052, -49.6401092]}></Marker>
        </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">
                  Selecione uma UF
                </option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">
                  Selecione uma CIDADE
                </option>
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
            <span>Selecione um ou mais itens a baixo</span>
          </legend>
          <ul className="items-grid">
            <li className="selected">
              <img src="http://localhost:3333/uploads/baterias.svg" alt="Teste"/>
              <span>Baterias</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/eletronicos.svg" alt="Teste"/>
              <span>Eletrônicos</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Teste"/>
              <span>Lâmpadas</span>
            </li>            <li className="selected">
              <img src="http://localhost:3333/uploads/baterias.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/organicos.svg" alt="Teste"/>
              <span>Orgânicos</span>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/papeis-papelao.svg" alt="Teste"/>
              <span>Papéis e Papelão</span>
            </li>
          </ul>

        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>

      </form>

    </div>
  );
}

export default CreatePoint;
