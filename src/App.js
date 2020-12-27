import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import AllAgents from './Components/Agents/AllAgents';
import AllMaps from './Components/Maps/AllMaps';
import AllWeapons from './Components/Weapons/AllWeapons';
import {Layout, Header, HeaderRow, Navigation, Content } from 'react-mdl';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import StickyFooter from './Components/StickyFooter';

function App() {
  return (
      <div className="App">

        <Router>

          <div className="demo-big-content">
            <Layout>
                <Header waterfall>
                    <HeaderRow title="VALPRO 🎮">

                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/">HOME</Link>
                            <Link to="/About">ABOUT</Link>
                            <Link to="/AllAgents">AGENTS</Link>
                            <Link to="/AllMaps">MAPS</Link>
                            <Link to="/AllWeapons">WEAPONS</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Content>
                    
                  <Switch>
                    <Route path='/About' component={About} />
                    <Route path='/AllAgents' component={AllAgents} />
                    <Route path='/AllMaps' component={AllMaps} />
                    <Route path='/AllWeapons' component={AllWeapons} />
                    <Route path='/' component={Home} />
                  </Switch>

                </Content>
            </Layout>
          </div>
      
        <StickyFooter />

        </Router>
    
      </div>
  );
}

export default App;
