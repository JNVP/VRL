import React, {useEffect, useState} from 'react';
import '../App.scss';
import { ChakraProvider, Box, Button, Spacer } from "@chakra-ui/react"


function Playlists (){
    const [playlists, setPlaylist] = useState([]);
    console.log('in use effect')
    useEffect(() => {
        if(playlists.length===0){
            fetch('/spotify/playlists')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPlaylist(data)
            })

            .catch(error => console.log(error));
        }

     function songDisplay(id){
        fetch(`/spotify/songs/${id}`, )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
     }
          
    })
   
     return (
         <div>
             {playlists.map(playlist => {
                
                return (<div><Button onClick = {() => {
                           fetch(`/spotify/songs/${playlist.id}`)
                            .then((response) => {
                                console.log(response)
                                return response.json()})
                            .then((data) => {
                                 console.log(data)
                                        })
                }} colorScheme='green' size = "xs" variant="outline"> {playlist.name} </Button>
                <Spacer /> </div>)
             })}
         </div>
     )

  
}

export default Playlists;





// DEFINITION::::::
// Context provide a way to pass data through the component tree without 
// having to pass down manually at every level

// HOW TO USE::::::
// DECLARATION:::
// 	const MyContext = React.createContext()
// Creating a new Context for each unique piece of data that needs to be available
// throughout your component data
// 	const LocaleContext = React.createContext()
// Properties of LocaleContext --------
// 	LocaleContext.Provider
//     LocaleContext.Consumer

// What is a Provider 
// 	Allows us to "declare the data that we want available throughout our
// 	component tree"

// What is a Consumer
// 	Allows "any component in the tree that needs that data to be able to 
//     subscibe to it"

// How to use Provider	
// 	<MyContext.Provider value={data}>
//       <App />
//     </MyContext.Provider>






