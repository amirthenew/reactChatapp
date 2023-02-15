import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext()

const AuthContextProvider = () => {

const [loading,setLoading]=useState(true)
const [user,setUser] = useState('')
const history = useHistory()

useEffect(()=>{
auth.onAuthStateChanged(user=>{
    setUser(user);
    setLoading(false)
    history.push('/chats')
})
},[user,history])



    return (<div>
        
        </div>  );
}
 
export default AuthContextProvider;