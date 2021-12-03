import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Containers/Main/Main";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";
import portfolioData from "./PortfolioData/portfolioData";

function App() {
  document.title = portfolioData.about.name;
  return (
    <div className="App">
      <ScrollUpButton />
      <Header className="App-header"></Header>
      <Main portfolioData={portfolioData}></Main>
      <Footer
        link={portfolioData.about.socialLinks.github}
        name={portfolioData.about.name}
        social_links={portfolioData.about.socialLinks}
        message={portfolioData.about.getInTouchMessage}
      ></Footer>
    </div>
  );
}

export default App;
