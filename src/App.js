import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
