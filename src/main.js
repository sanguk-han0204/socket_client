function buttonClick(nsp){
    const socket = io("http://localhost:3000/namespace"+nsp);

    socket.on("text",(text)=>{
        console.log(text);
        console.log(socket.id);
    })

    

}