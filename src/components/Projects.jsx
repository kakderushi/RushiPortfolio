import React from 'react';
import Diamond from '../../public/Diamond.png'
import Hospitality from '../../public/Hospitality.jpg'
import creditCard from '../../public/creditCard.png'

function Projects() {
  const projectList = [
    {
      title: "Diamond Price Prediction ",
      imageUrl: Diamond, // Replace with the actual path to the image
      githubLink:"https://github.com/kakderushi/DimondPricePrediction",
    },
    {
      title: "Hospitality Domain Analysis ",
      imageUrl:Hospitality , // Replace with the actual path to the image
      githubLink:"https://github.com/kakderushi/Hospitality_anlysis",
    },
    {
      title: "Credit Card Finacial Dashbord using Power BI",
      imageUrl: creditCard, // Replace with the actual path to the image
      githubLink: "https://github.com/kakderushi/Credit_card_report",
    },
  ];

  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-black font-semibold text-2xl">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {projectList.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <a href={project.githubLink} className="text-blue-500 hover:underline mt-2 block" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
