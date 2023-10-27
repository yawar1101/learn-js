const posts = [
    {
        title: 'Post One',
        body: 'This is post one',
    },
    {
        title: 'Post Two',
        body: 'This is post two',
    },
];

let lastActivityTime = new Date();

function getPostsAndActivity() {
    console.log('Posts:', posts);
    console.log('Last Activity Time:', lastActivityTime);
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            updateLastUserActivityTime().then(() => {
                resolve();
            });
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve('Post deleted successfully');
            } else {
                reject('No posts to delete');
            }
        }, 1000);
    });
}

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'goodbye')
);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
        return createPost({ title: 'Post Three', body: 'This is post three' });
    })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        getPostsAndActivity();
        return deletePost();
    })
    .then(() => getPostsAndActivity())
    .catch((err) => console.error(err));
