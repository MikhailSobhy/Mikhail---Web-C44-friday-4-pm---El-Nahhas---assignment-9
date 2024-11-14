var reads = [
    {
        wisdom: 'Be yourself; everyone else is already taken.',
        author: '― Oscar Wilde'
    },
    {
        wisdom: 'So many books, so little time.',
        author: '― Frank Zappa'
    },
    {
        wisdom: 'Be the change that you wish to see in the world.',
        author: '― Mahatma Gandhi'
    },
    {
        wisdom: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: '― Oscar Wilde'
    },
    {
        wisdom: 'Classic - a book which people praise and do not read.',
        author: '― Mark Twain'
    },
    {
        wisdom: 'You don’t forget the face of the person who was your last hope.',
        author: '― Suzanne Collins'
    }
];
function getRandom(){
    var x = Math.floor(Math.random()*reads.length);
    document.getElementById("text").innerHTML=reads[x].wisdom;
    document.getElementById("author").innerHTML=reads[x].author;
}