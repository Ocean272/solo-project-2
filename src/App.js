import React from "react"
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cardDetails = data.map(card => 
    <Card 
      key = {card.id}
      {...card} />
  )
  
  return (
    <div className="App">
      <Navbar />
      <div>
      {cardDetails}
      </div>
    </div>
  );
}

export default App;

// const cardDetails = 
// {
//   title: "Mount Fuji",
//   location: "Japan",
//   googleMapsUrl: "https://goo.gl/maps/IDG5WrWnATgkSNB8",
//   startDate: "12 Jan, 2021",
//   endDate: "24 Jan, 2021",
//   description: `Mount Fuji is the tallest mountain in Japan, standing at 3,776
//   meters (12,380 feet). Mount Fuji is the single most popular tourist
//   site in Japan, for both Japanese and foreign tourists.`,
//   imageUrl: "MountFuji.png"
// }