import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js'
import LocationList from './components/LocationsList.js'
import EpisodeList from './components/EpisodeList'
import WelcomePage from './components/WelcomePage'


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
