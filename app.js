function submit(code , id){
    let newCode = document.getElementById(id).value
    if(newCode == code) {
        if(code == 12345){
            window.location.href = 'bbpi.html'
        }
        else if ( code == 67890){
            window.location.href = 'mbpi.html'
        }
        else if (code == 'bbpimale'){
            window.location.href = 'bbpiMale.html'
        }
        else if ( code == 'bbpifemale'){
            window.location.href = 'bbpiFemale.html'
        }
        else if ( code == 'mbpimale'){
            window.location.href = 'mbpiMale.html'
        }
        else if ( code == 'mbpifemale'){
            window.location.href = 'mbpiFemale.html'
        }
        document.getElementById(id).value = ''
    }
    else{
        alert(`Your code was incorrect for ${id}`)
        document.getElementById(id).value = ' '
    }
}

// getElementsByTagName
var tagName = document.getElementsByTagName('h1')
for(const tag of tagName){
    // console.log(tag.innerText);
}

// getElementsByClassName
var classTag = document.getElementsByClassName('content')
for(const classt of classTag){
    // console.log(classt.innerText);
}

// getElementById
var id = document.getElementById('MBPI')
// console.log(id);

// querySelector
var select = document.querySelector('.content');
// console.log(select);

// querySelectorAll 
var selectAll = document.querySelectorAll('.content');
// console.log(selectAll);
