import React,{useContext,useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, Touchable, TextInput } from 'react-native';
import { UsuarioContext } from '../../context/user';
import firebaseApp from '../../services/firebase';

import { 
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    query,
    where
} from 'firebase/firestore';

import {
    MsgBubbleSent,
    MsgBubbleUser,
    MsgBubbleText
  } from './styles';
const Chat = () =>  {

    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        const unsub = onSnapshot(query(collection(db,"mensagens"),where("lido","!=",true)),
        (querySnapshot)=>{
            const tmp = [];

            querySnapshot.forEach(async(document)=>{
                tmp.push({
                    id:document.id,
                    ...document.data()
                })
            })

            setMessages(tmp);
        })

        return ()=>{
            unsub()
        }

    }, [])
    
    const db = getFirestore(firebaseApp);

    

    async function handleMessage(msg,usuario){
        try{
            await addDoc(collection(db,'mensagens'),{
                lido:false,
                mensagem:msg,
                userSent:usuario
            })
        }catch(err){
            console.log('err',err)
        }
    }

    const [text, setText] = useState('');

    return (
       <View>
           
          
           {messages.map((item)=>(
               <MsgBubbleSent>
                <MsgBubbleUser key={item.id}>{item.userSent}</MsgBubbleUser>
                <Text key={item.id}>{item.mensagem}</Text>
                </MsgBubbleSent>
            ))}

            <TextInput value={text} onChangeText={text => setText(text)}></TextInput>

            <TouchableOpacity onPress={()=>{
                handleMessage(text, 'UsuarioQueEnviou');
                setText('')
                }}>
                
                <Text>Enviar!</Text>
            </TouchableOpacity>  



           </View> 
    )
}

export default Chat;
