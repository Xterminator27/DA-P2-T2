import React from "react"

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => {
            this.setState({ posts: data });
        });
    }
    postAddHandle = (e) => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const body = e.target.elements.body.value;
            const post = {
              title: title,
              body: body,
              id: 2,
            };
            console.log(post);
        this.setState(() => ({posts: [...this.state.posts, post]}));
    }

    render() {
        return (
            <>
            <h1 className="font-bold text-2xl m-2">ADD POSTS</h1>
            <form className="w-2/5" onSubmit={this.postAddHandle}>
                        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="title" placeholder="Title" />
                        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="body" placeholder="Body" />
                        <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" type="submit">Add post</button>
                    </form>
            
            <h1 className="font-bold text-2xl m-2">POSTS</h1>
            <DisplayPost posts={this.state.posts}/>
            </>
        )
    }
}

class PostAddHandler extends React.Component {
    constructor(props) {
        super(props);
        this.postAddHandle = this.postAddHandle.bind(this);
    }
    
    postAddHandle(e) {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const body = e.target.elements.body.value;
        const post = {
          title: title,
          body: body,
          id: 2,
        };
        console.log(post);
        this.props.postAddHandle(post)
        // this.setState({ posts: [...this.props.posts, post]})
    }
    render() {
        return (
            <>
            <form className="w-2/5" onSubmit={this.postAddHandle}>
                        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="title" placeholder="Title" />
                        <input className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" name="body" placeholder="Body" />
                        <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" type="submit">Add post</button>
                    </form>
            </>
        )
    }
    
}
const DisplayPost = (props) => {
    return (
        <>
        { 
            props.posts.map(post =>
            <div className="m-2 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base"> {post.body} </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">#{post.id}</span>
              </div>
            </div>
          )
          }
        </>   
    )
}

