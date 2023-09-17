import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-slate-300 p-3' key={route.id}>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;