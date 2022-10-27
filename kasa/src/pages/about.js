import { Component } from 'react';
import AboutMainText from '../components/about/about-main-text';
import BackgroundAbout from '../components/about/background-about';
import Footer from '../components/footer';
import Logo from '../components/logo';
import Navigation from '../components/navigation';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Logo />
                <Navigation />
                <BackgroundAbout />
                <AboutMainText />
            </div>
        )
    }
}

export default About;