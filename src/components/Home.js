import home_img from "../theme/home.png";
import Image from 'react-bootstrap/Image'
import {Button} from "react-bootstrap";
import "../theme/home.css";

function Home() {
    return (
        // <div className="d-flex flex-column justify-content-evenly w-100">
            <div className="demo-wrap py-3 d-flex flex-column justify-content-evenly w-100">
                <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="flex-grow-1 align-self-center px-5 text-gray-color">
                        <h4>Hi There,</h4>
                        <h1 className="fw-bold display-1">I am Abu<span className="text-danger">j</span></h1>
                        <h2 className="display-6">I am developer during daytime</h2>
                        <h3>& playing dota during nights</h3>
                        <Button className="mt-4" size="lg" variant="danger">Ask Me How</Button>
                    </div>
                    <div className="flex-grow-1 d-none d-md-block">
                        <Image fluid src={home_img} alt="home_image"></Image>
                    </div>
                </div>
                <div className="d-flex align-self-center align-self-md-auto px-md-5 mt-5 flex-column flex-md-row">
                    <div className="pe-md-5 border-right">
                        <p className="m-0 fw-bold">Email</p>
                        <p className="m-0">mohatabj@gmail.com</p>
                    </div>
                    <div className="px-md-5 border-right">
                        <p className="m-0 fw-bold">Phone</p>
                        <p className="m-0">+961-76692901</p>
                    </div>
                    <div className="px-md-5">
                        <p className="m-0 fw-bold">Location</p>
                        <p className="m-0">Beirut-Lebanon</p>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default Home;