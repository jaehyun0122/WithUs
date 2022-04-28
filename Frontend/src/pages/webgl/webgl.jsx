import React, { useState, useEffect } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const unityContext = new UnityContext({
  loaderUrl: "build/build.loader.js",
  dataUrl: "build/build.data",
  frameworkUrl: "build/build.framework.js",
  codeUrl: "build/build.wasm",
});

const GameContainer = styled.div`
`
npm
export default function Webgl() {

    // const [data, setData] = useState("");
    //
    // useEffect(function () {
    //     unityContext.on("showCharactor", function (str) {
    //         console.log(" data : ", str)
    //         setData(str);
    //     });
    // }, []);
    //
    // useEffect(()=>{
    //     console.log("리엑트에서 캐릭터 정보 : ", data);
    //
    // })
  const user = useSelector(state => state)

  const [characterData, setCharacterData] = useState('')
  unityContext.on("showCharactor" , function(userdata) {
    console.log('1',userdata)
    setCharacterData(userdata)
  });
  
  function sendUsername () {
    console.log(user.auth.username)
    unityContext.send("PhotonManager", "GetUsername", user.auth.username);
  }
  useEffect(() => {
  },[])



  return (
    <>
      <GameContainer>
        <Unity unityContext={unityContext} 
          style={{
            width: "100%",
            height: "85%",
            justifySelf: 'center',
            alignSelf: 'center'
          }}
        />;
      </GameContainer>
      <button onClick={sendUsername}>button</button>
    </>
  )
}
