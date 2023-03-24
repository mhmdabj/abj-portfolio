import {createRef} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, Link, RouterProvider, useLocation, useOutlet,} from 'react-router-dom'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Project from "./components/Project";
import img from "./theme/logo-removebg-preview.png";
import {IconContext} from "react-icons";
import {FaGithub, FaInstagram, FaLinkedinIn, FaSteam, FaTwitch} from "react-icons/fa";
import './theme/circular-std-medium-500.ttf';


const routes = [
    {path: '/', name: 'home', element: <Home/>, nodeRef: createRef()},
    {path: '/about', name: 'about me', element: <About/>, nodeRef: createRef()},
    {path: '/contact', name: 'contact', element: <Contact/>, nodeRef: createRef()},
    {path: '/projects', name: 'my projects', element: <Project/>, nodeRef: createRef()},
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Example/>,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
])

function Example() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    const {nodeRef} =
    routes.find((route) => route.path === location.pathname) ?? {}
    return (
        <>
            <div className="d-flex gap-2 h-100 flex-column-reverse flex-md-row">
                <div
                    className="col-md-1 sidebar border-right d-flex flex-row flex-md-column align-items-center justify-content-between align-self-center align-self-md-auto">
                    <img src={img} className="logo_img d-none d-md-block" alt="logo"/>
                    <div className="d-flex flex-row flex-md-column mx-3 gap-3">
                        <IconContext.Provider value={{className: 'linkedin'}}>
                            <Link to="http://www.linkedin.com/in/mohamadabdeljalil/"
                                  target="_blank"><FaLinkedinIn/></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'github'}}>
                            <Link to="https://github.com/mhmdabj" target="_blank"><FaGithub/></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'instagram'}}>
                            <Link to="https://www.instagram.com/mhmdabj/" target="_blank"><FaInstagram/></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'steam'}}>
                            <Link to="https://steamcommunity.com/id/MoOohat/" target="_blank"><FaSteam/></Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'twitch'}}>
                            <Link to="https://www.twitch.tv/mhmdabj" target="_blank"><FaTwitch/></Link>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="d-flex flex-column h-100 w-100">

                    <Navbar routeObj={routes}/>
                    {/*margin:auto*/}
                    <SwitchTransition>
                        <CSSTransition
                            key={location.pathname}
                            nodeRef={nodeRef}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            {(state) => (
                                <div ref={nodeRef} className="d-flex h-100">
                                    {currentOutlet}
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router}/>)
