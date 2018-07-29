import React from 'react';

const InfoBlockItem = (props) => (
    <div className="info-item">
        <div className="info-item__picholder">
            <img className="info-item__image" src={props.picture} alt=""/>
        </div>
        <div className="info-item__content">
            { props.name && <h3 className="info-item__title">{ props.name }</h3>}
            { 
                (props.company_direction || props.job) && 
                <p className="info-item__text">
                    {(props.company_direction || props.job)}
                </p>
            }
            { props.location && <p className="info-item__text">{ props.location }</p> }
            { props.follow && <span className="info-item__action">Foolow Now</span> }
            { props.addFriend && <span className="info-item__action">Add Friend</span>  }
        </div>
    </div>
);

export default InfoBlockItem;