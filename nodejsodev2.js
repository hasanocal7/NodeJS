const posts = [
    {id: 1, postName: 'Post1', year: 2019},
    {id: 2, postName: 'Post2', year: 2020},
    {id: 3, postName: 'Post3', year: 2021},
    {id: 4, postName: 'Post4', year: 2022},
    {id: 5, postName: 'Post5', year: 2023}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post);
    })
};

const newPost = (post) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(post);
        //resolve('Kayıt Eklendi');
        reject('Post Eklenemedi');
    })
    
    return promise1;
};

async function processPost() {
    try {
        await newPost({id: 6, postName: 'Post6', year: 2024});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

processPost();