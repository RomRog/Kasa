import { Component } from 'react';
import Footer from '../components/footer';
import BackgroundHome from '../components/home/background-home';
import GridHomePage from '../components/home/gril-home-page';

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