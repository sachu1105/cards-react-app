import Card from "./components/Card"
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import "./App.css";

function App() {

const[Status, setStatus] = useState('All');

const cardData = [
  { id: 1, title: 'Card 1', subtitle: 'This is the first card.', isActive: true },
  { id: 2, title: 'Card 2', subtitle: 'This is the second card.', isActive: false },
  { id: 3, title: 'Card 3', subtitle: 'This is the third card.', isActive: true },
  { id: 4, title: 'Card 4', subtitle: 'This is the fourth card.', isActive: true },
  { id: 5, title: 'Card 4', subtitle: 'This is the fourth card.', isActive: true},
  { id: 6, title: 'Card 4', subtitle: 'This is the fourth card.', isActive: true },
  { id: 7, title: 'Card 1', subtitle: 'This is the first card.', isActive: true },
  { id: 8, title: 'Card 2', subtitle: 'This is the second card.', isActive: false },
  { id: 9, title: 'Card 3', subtitle: 'This is the third card.', isActive: false }

];


const handleStatus = (event) => {
  setStatus(event.target.value);
};

const filteredCards = cardData.filter(card => {
  if (Status === 'All') return true;
  return Status === 'Active' ? card.isActive : !card.isActive;
});

  return (
    <div style={{ padding: '20px' }}>
    <Dropdown selectedStatus={Status} handleStatusChange={handleStatus} />
      <div className="grid-container">
   
        {filteredCards.map(card => (
          console.log(card),
            <Card
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                isActive={card.isActive}
            />
        ))}
    </div>
</div>
  )
}

export default App
