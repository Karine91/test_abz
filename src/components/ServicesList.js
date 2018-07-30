import React from 'react';
import { connect } from 'react-redux';
import ServiceListItem from './ServicesListItem';
import { startSetServices } from '../actions/services';

class ServiceList extends React.Component {
   
    componentDidMount() {
        this.props.dispatch(startSetServices());
    };

    render() {
        return (
            <div className="container container--fluid container--bordered container--no-margin">
                <ul className="services">
                    {
                        this.props.services.map((item, index) => (
                            <ServiceListItem {...item} key={index} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    services: state.services
});

export default connect(mapStateToProps)(ServiceList);