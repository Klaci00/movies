import React, { useState } from 'react';
import { BASE_URL } from '../Settings';
import FormApp from './Apps/FormApp';
import { HandleSubmit } from './Functions/HandleSubmit';

const AddShow = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [playtime, setPlaytime] = useState(0);
    const [poster, setPoster] = useState(null);
    const [selectedRestriction, setSelectedRestriction] = useState('');
    const Restrictions = ['Korosztályra való tekintet nélkül megtekinthető', '6 éven felülieknek', '12 éven felülieknek', '16 éven felülieknek', '18 éven felülieknek'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        HandleSubmit(title, description, selectedRestriction, playtime, poster, BASE_URL);
    };

    const handleDropdownChange = (e) => {
        console.log('Selected roomname:', e.target.value);
        setSelectedRestriction(e.target.value);
    };

    const handlePlaytimeFocus = (e) => {
        if (e.target.value === '0') {
            setPlaytime('');
        }
    };


    return (<>
        <FormApp handleSubmit={handleSubmit} title={title} setTitle={setTitle} description={description} setDescription={setDescription} selectedRestriction={selectedRestriction} handleDropdownChange={handleDropdownChange} Restrictions={Restrictions} playtime={playtime} setPlaytime={setPlaytime} handlePlaytimeFocus={handlePlaytimeFocus} setPoster={setPoster} />
    </>
    );
};

export default AddShow;
