import React from 'react';
import InfoBlockItem from './InfoBlockItem';

const InfoBlock = (props) => (
    <div className="info">
        <div className="info__header">
            <h2 className="block-title text-one-line">
                {props.title}
            </h2>
            <a href="#" className="info__more">
                See All
            </a>
        </div>
        <div className="info-content-list">
        {
            props.contentData.map((item, index) => (
                <InfoBlockItem
                key={index}
                type={props.type}
                {...item}    
                />
            ))
        }
            
        </div>
    </div>
);

export default InfoBlock;