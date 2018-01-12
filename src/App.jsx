import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
    <section className="hero" id="header-section">
      <div className="hero-body">
        <div className="container has-text-centered">
          <header>
            <h1
              className="title has-text-weight-light"
              id="heading"
              style={{ display: 'inline-block' }}
            >
              tod
              <img
                src={logo}
                alt="logo"
                className="App-logo"
              />
              <span className="has-text-weight-bold">list</span>
            </h1>
            <h2
              className="subtitle"
            >
              A simple todo list app built using react and bulma
            </h2>
          </header>
        </div>
      </div>
    </section>
    <TodoList />
    <Footer />
  </div>
);

export default App;
