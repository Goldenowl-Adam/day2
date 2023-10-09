import { Card } from './components/Card';
import './App.css';
import './style.scss';

const userList = [
    { id: 1, name: 'ấdasd', role: 'asdasd', avatar: 'images/aNam.jpg' },
    { id: 2, name: 'ấdasd', role: 'asdasd', avatar: 'images/aNam.jpg' },
    { id: 3, name: 'ấdasd', role: 'asdasd', avatar: 'images/aNam.jpg' },
];

function App() {
    return (
        <div className="container">
            <div className="cards">
                {userList.map(({ id, name, role, avatar }) => (
                    <Card key={id} name={name} role={role} avatar={avatar} />
                ))}
            </div>
        </div>
    );
}

export default App;
