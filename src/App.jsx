import React from 'react';
import ButtonNav from './components/button-nav/button-nav.component';
import Header from './components/Header/header.component';
import SearchItem from './components/search-Item/search-Item.component';
import ImageGrid  from './components/image-grid/image-grid.component';
import ImageItem from './components/image-item/image-item.component';


function App() {
  return (
    <div className="App">
    <Header /> 
    <ButtonNav />
    <SearchItem />
    <ImageGrid />
    <ImageItem />  

    </div>
     
  );
}

export default App;
