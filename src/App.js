import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './Components/Layout/Layout/Layout';
import Innovacion from './Components/Pages/Innovacion/Innovacion';
import Reconocimiento from './Components/Pages/Reconocimiento/Reconocimiento';
import Institucional from './Components/Pages/Institucional/Institucional';
import Todos from './Components/Pages/Todos/Todos';
import error from './Components/Pages/Error/Error.js';
import NoticiaDetalle from './Components/Pages/NoticiaDetalle/NoticiaDetalle';
import './App.css';

function App() {
  return (
    <div >
      <Layout>
            <Switch>
              <Route path="/innovacion" exact component={Innovacion} />
              <Route path="/reconocimiento" exact component={Reconocimiento} />
              <Route path="/institucional" exact component={Institucional} />
              <Route path="/Todos"  exact component={Todos} />
              <Route path="/Noticia/:id" component={NoticiaDetalle} />
              <Route path="/"  exact component={Todos} />
              <Route  component={error} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
