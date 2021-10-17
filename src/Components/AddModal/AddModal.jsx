import React from 'react';
import Modal from 'react-modal';
import AddModalUI from './AddModalUI';


Modal.setAppElement('#root')
export default function AddModal(props) {
    const { newPostIsUp, setNewPostIsUp, data, setData, setMessage } = props;



    const ADD_MODAL_STYLE = {
        overlay: {
            position: 'fixed'
        },
        content: {
            position: 'absolute',
            height: '50%',
            width: '50%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'sans-serif'
        }
    }
    return (
        <div className='AddModal'>
            <Modal
                isOpen={newPostIsUp}
                style={ADD_MODAL_STYLE}
            >
                <AddModalUI
                    setNewPostIsUp={setNewPostIsUp}
                    data={data}
                    setData={setData}
                    setMessage={setMessage}
                />
            </Modal>
        </div>
    )
}
