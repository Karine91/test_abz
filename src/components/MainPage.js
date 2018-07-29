import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Advertisement from './Advertisement';
import InfoBlock from './InfoBlock';

const MainPage = (props) => (
    <div>
        <Header />
        <div className="container container--tb-padding">
            <div className="row">
                <div className="row__col row__col-3 row__col--column row__col--width-fixed">
                    <Sidebar />
                    <div className="info-wrapper">
                        <Advertisement />
                        <InfoBlock 
                            title="Featured Companies"
                            follow={true} 
                            contentData={props.companies} />
                    </div>
                </div>
                <div className="row__col row__col-6 row__col--column">
                
                </div>
                <div className="row__col row__col-3 row__col--column row__col--width-fixed">
                
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = ( { companies } ) => ({
    companies
});

export default connect(mapStateToProps)(MainPage);