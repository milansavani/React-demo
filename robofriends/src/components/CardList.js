import React from 'react';
import Card from './Card';

let retrieveCardInfoFromArray = (data) => {
    return data.map(obj => <Card id={obj.id} key={obj.id} name={obj.name} email={obj.email}/>);
};

const CardList = (props) => {
    const { data } = props;
    return (
        <div>
            {retrieveCardInfoFromArray(data)}
        </div>
    );
};

export default CardList;

