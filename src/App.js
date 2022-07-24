
import './App.css';

import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import Note from '../src/Components/Note'

import notes from '../src/notes'


function App() {
  return (
    <div className="App">
     <Header />
     {notes.map(noteItem =>
     <Note
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
  />
)}
     <Footer />
    </div>
  );
}

export default App;
