import React, { useState } from 'react';
import Header from '../Header/header';
import About from '../About/about';
import Contact from '../ContactMe/contactMe'
import PortfolioContainer from '../PortfolioContainer/portfolioContainer';
import Resume from '../Resume/resume';

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'PortfolioContainer') {
      return <PortfolioContainer />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    //return <Contact />;
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
