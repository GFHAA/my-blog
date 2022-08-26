import React from 'react';
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="statistics">
                <div className="online statistics-block">
                    <div className='online'>123</div>
                    <div className='description-sidebar'>онлайн</div>
                </div>
                <div className="statistics-block">
                    <div>123</div>
                    <div className='description-sidebar'>онлайн</div>
                </div><div className="statistics-block">
                    <div>123</div>
                    <div className='description-sidebar'>онлайн</div>
                </div>
            </div>
            <div className="categories mt-3">
                <h3 className='color-yellow'>Категории</h3>
                <div>фиолософия</div>
            </div>
        </div>
    );
};

export default Sidebar;