function submit(code , id){
    const exitCode = code;
    let newCode = document.getElementById(id).value
    if(newCode == exitCode) {
        // alert(`Your code was correct for ${id}`);
        window.location.href='home.html';
        document.getElementById(id).value = ''
    }
    else{
        alert(`Your code was incorrect for ${id}`)
        document.getElementById(id).value = ''
    }
}

