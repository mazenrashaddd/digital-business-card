// import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card";
import userData from "./Components/Card/userData";

function App() {
  const userElement = userData.map((user) => {
    return (
      <Card
        key={user.id} 
        {...user} 
      />);
  });

  return (
    <main className="mainLayout">
      {userElement}
    </main>
  );
}

export default App;
