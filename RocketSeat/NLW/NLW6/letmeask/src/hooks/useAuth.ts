import { useContext } from 'react';

import {AuthContext} from '../contexts/AuthContext';

export function useAuth(){
    const contextData = useContext(AuthContext)
    console.log(contextData)
    return contextData
}