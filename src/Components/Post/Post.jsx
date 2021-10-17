import React from 'react';
import './post.scss';
import moment from 'moment';
import placeholder from '../../img/placeholder.png';


export default function Post(props) {
    const { data, setDeletePostlIsUp, setEditPostIsUp, setPickedId } = props;

    const timeStamp = `Posted date: ${moment(data.updatedAt).subtract(10, 'days').calendar().replaceAll('/', ',')} at ${moment(data.updatedAt).format('LT')} by Some Person ${data.id}`;

    return (
        <div className='post'>
            <div className='post-header'>
                <div className="info">
                    <img src={placeholder} alt="img" />
                    <div className="meta">
                        <h2>{data.title}</h2>
                        <p>{timeStamp}</p>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={() => {
                        setEditPostIsUp(true);
                        setPickedId(data.id)
                    }}>Edit</button>
                    <button onClick={() => {
                        setDeletePostlIsUp(true)
                        setPickedId(data.id)
                    }}>Delete</button>
                </div>
            </div>
            <p className='post-text'>
                {data.text}
            </p>
            <div className='post-imgs'>
                <img src={placeholder} alt="img" />
                <img src={placeholder} alt="img" />
                <img src={placeholder} alt="img" />
            </div>

        </div>
    )
}
