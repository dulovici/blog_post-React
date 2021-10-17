
import React, { useState } from 'react';
import axios from 'axios';
import './editModalUI.scss';

export default function EditModalUI(props) {
    const { setEditPostIsUp, pickedId, data, setData, setMessage } = props;

    const [newData, setNewData] = useState(data.filter(el => el.id === pickedId)[0])


    const updatePost = () => {
        axios.put(`https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${pickedId}`, newData)
            .then(response => {
                setMessage('You can replace me but not the memories.')
                setData([newData, ...data.filter(el => el.id !== newData.id)])
                setTimeout(() => {
                    setMessage('')
                }, 3000);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='edit-modal'>
            <h3>Edit post</h3>

            <div className="title">
                <p>Title</p>
                <input
                    type="text"
                    value={newData.title}
                    placeholder='Title of the post'
                    onChange={(e) => { setNewData({ ...newData, "title": e.target.value }) }}
                />
            </div>

            <div className="text">
                <p>Text</p>
                <textarea
                    value={newData.text}
                    placeholder='Text of the post'
                    cols="30" rows="10"
                    onChange={(e) => { setNewData({ ...newData, "text": e.target.value }) }}
                />
            </div>

            <div className="footer">
                <select
                    onChange={(e) => { setNewData({ ...newData, "categortId": e.target.value }) }}
                >
                    <option value="">Pick a category</option>
                    <option value="0">Category 1</option>
                    <option value="1">Category 2</option>
                    <option value="2">Category 3</option>
                </select>

                <div className="btns">
                    <button
                        onClick={() => {
                            if (newData.title && newData.text) {
                                updatePost()
                                setEditPostIsUp(false)
                            }
                            else console.log('jbg');
                        }}
                    >Edit Post</button>
                    <button
                        onClick={() => setEditPostIsUp(false)}>Cancle</button>
                </div>
            </div>
        </div>
    )
}

