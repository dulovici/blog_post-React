
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './addModalUI.scss';

export default function AddModalUI(props) {
    const { setNewPostIsUp, data, setData, setMessage } = props;
    const [newPost, setNewPost] = useState({});

    const mandatoryRef = useRef([]);

    const submitPost = () => {
        axios.post('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts', newPost)
            .then(response => {
                if (response.status === 201) {
                    setMessage('I Think This Is The Creation Of A Beautiful Blog Post.');
                    setData([...data, response.data]);
                    setTimeout(() => {
                        setMessage('')
                    }, 3000);
                }
            })
            .catch(err => console.error(err));
    }

    const validateForm = () => {
        mandatoryRef.current[0].classList[!newPost.title ? 'add' : 'remove']('err');
        mandatoryRef.current[1].classList[!newPost.text ? 'add' : 'remove']('err');
    }

    return (
        <div className='add-modal'>
            <h3>Add new blog post</h3>

            <div className="title">
                <p>Title</p>
                <input
                    type="text"
                    placeholder='Title of the post'
                    onChange={(e) => { setNewPost({ ...newPost, "title": e.target.value }) }}
                />
                <p ref={(el) => mandatoryRef.current[0] = el} className='mandatory'>*</p>
            </div>

            <div className="text">
                <p>Text</p>
                <textarea
                    placeholder='Text of the post'
                    cols="30" rows="10"
                    onChange={(e) => { setNewPost({ ...newPost, "text": e.target.value }) }}
                />
                <p ref={(el) => mandatoryRef.current[1] = el} className='mandatory'>*</p>
            </div>


            <div className="footer">
                <select
                    onChange={(e) => setNewPost({ ...newPost, "categoryID": e.target.value })}>
                    <option value="">Pick a category</option>
                    <option value="0">Category 1</option>
                    <option value="1">Category 2</option>
                    <option value="2">Category 3</option>
                </select>

                <div className="btns">
                    <button
                        onClick={() => {
                            validateForm()

                            if (newPost.title && newPost.text) {
                                submitPost()
                                setNewPostIsUp(false)
                            }
                        }}>Add new Post</button>
                    <button onClick={() => setNewPostIsUp(false)}>Cancle</button>
                </div>
            </div>
        </div>
    )
}


