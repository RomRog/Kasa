import { Component } from 'react';
import Footer from '../components/footer';
import BackgroundHome from '../components/home/background-home';
import GridHomePage from '../components/home/gril-home-page';
import Logo from '../components/logo';
import Navigation from '../components/navigation';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <BackgroundHome />
                <GridHomePage />
                <Footer />
            </div>
        )
    }
}

export default Home;