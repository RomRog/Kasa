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

    async componentDidMount() {
        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        const logData = await fetch(process.env.PUBLIC_URL + '/annonces.json')
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                let logementData = null;
                result.forEach(function (el) {
                    console.log(el)
                    if (el.id == id) {
                        logementData = el
                    }
                })
                return logementData;
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        console.log(logData)
        this.setState({
            isLoaded: true,
            logementData: logData
        })
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