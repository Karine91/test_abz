import React from 'react';

class InfoBlockItem extends React.Component {

    formatDescription({ str, size = 80 }) {
        if ( str.length > size ) {
            return str.slice(0, size) + '...';
        }
        return str;
    }

    render() {
        return (
            <div className="info-item">
                { (this.props.type === 'friends' || this.props.type === 'products') && <h3 className="info-item__title">{ this.props.name }</h3> }
                <div className="info-item__inner">
                    <div className="info-item__picholder">
                        <img className="info-item__image" src={this.props.picture} alt=""/>
                    </div>
                    <div className="info-item__content-wrapper">
                        <div className="info-item__content">
                            { this.props.type === 'companies' && <h3 className="info-item__title">{ this.props.name }</h3>}
                            <p className="info-item__text">
                                { (this.props.company_direction || this.props.job || this.props.description ) && 
                                    this.formatDescription( 
                                        this.props.company_direction && { str: this.props.company_direction, size: 16 } 
                                        || this.props.job && { str: this.props.job, size: 53 } 
                                        || this.props.description && { str: this.props.description } 
                                    ) }
                            </p>
                            { (this.props.type === 'companies' || this.props.type === 'friends') && <p className="info-item__text text-one-line" >{ this.props.location }</p> }
                        </div>
                        { this.props.type === 'companies' && <a href="#" className="info-item__action">Foolow Now</a> }
                        { this.props.type === 'friends' && <a href="#" className="info-item__action">Add Friend</a> }
                    </div>
                </div>
            </div>
        )
    }
}
    

export default InfoBlockItem;