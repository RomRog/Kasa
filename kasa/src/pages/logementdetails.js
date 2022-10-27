import { Component } from 'react';
import Footer from '../components/footer';
import Logo from '../components/logo';
import Navigation from '../components/navigation';
import AboutLogement from '../components/logementdetails/aboutlogement';
import LogementDetailsWrapper from '../components/logementdetails/logement-details-wrapper';
import SliderDisplay from '../components/logementdetails/sliderdisplay';


class LogementDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logementData: {},
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(process.env.PUBLIC_URL + '/annonces.json')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    logementData: result.find((annonce) => annonce.id === id)
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const { error, isLoaded, logementData } = this.state;

        if (error) {
            return <div>Erreur !</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {

            return (

                <div className="home">
                    <Logo />
                    <Navigation />
                    <SliderDisplay logementData={logementData} />
                    <AboutLogement logementData={logementData} />
                    <LogementDetailsWrapper logementData={logementData} />
                    <Footer />
                </div>
            )
        }
    }
}

export default LogementDetails;