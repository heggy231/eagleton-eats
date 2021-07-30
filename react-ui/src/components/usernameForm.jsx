import {useState} from 'react';

const UsernameForm = () => {

    const [username, setUsername] = useState('Paul');
    return <input onChange = {} value={username} />;
}

export default UsernameForm;