import React, { useState } from 'react'
import Card from './components/Card.jsx';
import './index.css'
import Dither from './components/Dither.jsx';

const App = () => {

  const [title, setTitle] = useState('');
  const [txtarea, setTextarea] = useState('');
  const [notesList, setNotesList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotesList(prev => [
      ...prev,
      { name: title, txt: txtarea }
    ]);

    setTitle('');
    setTextarea('');
  };

  return (
    <div className="relative min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Dither
          waveColor={[0.5,0.5,0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      
      <div className="flex items-center justify-center flex-col relative z-10">
        <h2 className='text-7xl uppercase font-bold text-white'>Notes</h2>

        <form
          className='flex flex-col gap-6 py-6 px-4 m-5 w-1/3 text-xl text-black bg-gray-200 justify-around rounded-2xl'
          onSubmit={handleSubmit}
        >
          <input
            placeholder='Enter Notes Heading'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder='Details here ...'
            value={txtarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>

          <button className='border rounded-full' type='submit'>Submit</button>
        </form>

        <div className='flex gap-2 flex-wrap h-fit'>
          {notesList.map((elem, index) => (
            <Card key={index} title={elem.name} txt={elem.txt} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;
