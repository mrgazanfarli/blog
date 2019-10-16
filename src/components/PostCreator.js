import React from 'react';
import * as post from '../apis/post';

class PostCreator extends React.Component {
    state = {
        title: '',
        body: '',
        requestSucceeded: false,
        message: null
    };

    handleTitleChange = val => {
        this.setState({ title: val });
    }

    handleBodyChange = val => {
        this.setState({ body: val });
    }

    resetInputs = () => {
        this.setState({
            title: '',
            body: ''
        })
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({ requestSucceeded: null });
        let title = this.state.title.trim();
        let body = this.state.body.trim();
        if (title && body) {
            try {
                await post.createPost({
                    title,
                    body
                });
                this.setState({
                    message: {
                        type: 'success',
                        content: 'Post has successfully been published!'
                    },
                    requestSucceeded: true
                })
            } catch (error) {
                console.log(error);
                this.setState({
                    message: {
                        type: 'danger',
                        content: 'Request failed. Please, be sure that you have internet connection...'
                    },
                    requestSucceeded: false
                })
            }

        } else {
            this.setState({
                message: {
                    type: 'danger',
                    content: 'Please, enter valid title and body...'
                },
                requestSucceeded: false
            })
        }
        this.resetInputs();
    }

    render() {
        let { message, requestSucceeded } = this.state;
        return (
            <div>
                <h3 className="text-center text-info">Add post</h3>
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    {message ? (
                        <div className="message-container">
                            <p className={`text-center text-${message.type}`}>
                                {message.content}
                            </p>
                        </div>
                    ) : null}
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            disabled={requestSucceeded === null ? true : false}
                            type="text"
                            value={this.state.title}
                            name="title"
                            className="form-control"
                            placeholder="Enter a title..."
                            onChange={(e) => this.handleTitleChange(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea
                            disabled={requestSucceeded === null ? true : false}
                            className="form-control"
                            value={this.state.body}
                            name="body"
                            rows="4"
                            placeholder="Enter post body..."
                            onChange={(e) => this.handleBodyChange(e.target.value)}></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary px-4"
                        disabled={requestSucceeded === null ? true : false}>Add</button>
                </form>
            </div>
        )
    }
}

export default PostCreator;