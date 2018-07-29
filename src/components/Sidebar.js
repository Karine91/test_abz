import React from 'react';

const menuList = [
    { title: 'Feed', icon: 'feed' }, 
    { title: 'Ask a Colleague', icon: 'ask'}, 
    { title: 'Companies', icon: 'companies'}, 
    { title: 'Service Directory', icon: 'services'}
];

const Sidebar = () => (
    <aside>
        <ul className="sidebar">
            {
                menuList.map((item, index) => (
                   <li className="sidebar__item" key={index}>
                        <a href="#" className="sidebar__link">
                            <div className="sidebar__icon">
                                <span className={`icon icon--${item.icon}`}></span>
                            </div>
                            <div className="sidebar__title">
                                { item.title }
                            </div>
                        </a>
                   </li> 
                ))
            }
        </ul>
    </aside>
);

export default Sidebar;