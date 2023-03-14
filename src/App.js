import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <div className="my-2 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/*<Navbar/>*/}
                        <h2 className="line-1 anim-typewriter text-danger m-0">Welcome to Monty Mobile Test</h2>
                    </div>
                </div>
                <Routes>
                    <Route exact path='/' element={<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
