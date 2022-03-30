import React from 'react';
import useFirebase from '../../../firebase/useFirebase/useFirebase';

const Login = () => {
    let {signUsingGoogle} = useFirebase();
    return (
        <div className='p-3' >
            <button className='btn btn-outline-primary' onClick={signUsingGoogle} > Google </button>
        </div>
    );
};

export default Login;