import React from 'react';
import Project1 from '../Project1/project1';
import Project2 from '../Project2/project2'

export default function PortfolioContainer() {
  return (
<section style={{display: "flex", flexDirection: "row"}}>
    <Project1 />
    <Project2 />
</section>
  );
}
