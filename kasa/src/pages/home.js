import { Component } from 'react';
import BackgroundHome from '../components/home/background-home';
import GridHomePage from '../components/home/gril-home-page';
import Logo from '../components/logo';
import Navigation from '../components/navigation';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Logo />
                <Navigation />
                <BackgroundHome />
                <GridHomePage />
            </div>
        )
    }
}

export default Home;