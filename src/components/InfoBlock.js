import React from 'react';
import InfoBlockItem from './InfoBlockItem';

const InfoBlock = (props) => (
    <div className="info">
        <div className="info__header">
            <h2 className="block-title">
                {props.title}
            </h2>
            <div className="info__more">
                See All
            </div>
        </div>
        <div className="info-content-list">
        {
            props.contentData.map((item, index) => (
                <InfoBlockItem
                key={index}
                follow={props.follow}
                {...item}    
                />
            ))
        }
            
        </div>
    </div>
);

export default InfoBlock;