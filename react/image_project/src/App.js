import React from 'react';

import ImageGallery from './views/ImageGallery/ImageGallery';
// import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <h1 className = "text-center">Image Gallery</h1>
      <ImageGallery>
      {/* <AppRouter /> */}
      </ImageGallery>
      
    </div>
  );
}

export default App;
