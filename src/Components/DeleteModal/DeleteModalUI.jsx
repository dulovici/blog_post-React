import React from 'react';
import axios from 'axios';
import './DeleteModalUI.scss';

export default function DeleteModalUI(props) {
    const { setDeletePostlIsUp, pickedId, data, setData, setMessage } = props;

    const removePost = () => {
        axios.delete(`https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${pickedId}`)
            .then(res => {
                if (res.status === 204) {
                    setMessage('Oh, Blog Post... wont see him no more.');
                    setData(data.filter(el => el.id !== pickedId));
                    setTimeout(() => {
                        setMessage('')
                    }, 3000);
                }
            })
            .catch(err => console.error(err));
    }



    return (
        <div className='delete-modal'>
            <h1>Are you sure you want to delete this blog post?</h1>

            <div className="btns">
                <button onClick={() => {
                    removePost()
                    setDeletePostlIsUp(false)
                }}>Yes</button>
                <button onClick={() => setDeletePostlIsUp(false)}>No</button>
            </div>

        </div>
    )
}