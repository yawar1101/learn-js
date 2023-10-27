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
    return new Promise((resolve) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
            resolve();
        }, 1000);
    });
}

async function createPost(post) {
    await new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });

    await updateLastUserActivityTime();
}

async function updateLastUserActivityTime() {
    await new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

async function deletePost() {
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

async function main() {
    try {
        const promise1 = Promise.resolve('Hello World');
        const promise2 = 10;
        const promise3 = new Promise((resolve) =>
            setTimeout(resolve, 2000, 'goodbye')
        );

        const values = await Promise.all([promise1, promise2, promise3]);
        console.log(values);

        await createPost({ title: 'Post Three', body: 'This is post three' });
        await updateLastUserActivityTime();

        getPostsAndActivity();

        await deletePost();
        getPostsAndActivity();
    } catch (err) {
        console.error(err);
    }
}

main();
