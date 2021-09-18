import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return ( 
        <div>pageOne</div>
     );
}

const PageTwo = () => {
    return ( 
        <div>pageTwo</div>
     );
}
 


const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/page-two" component={PageTwo} />
            </BrowserRouter>
        </div>
     );
}
 
export default App;