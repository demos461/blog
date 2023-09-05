import {Link, Route, Routes} from "react-router-dom";
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";

const App = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;