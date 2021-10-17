import React from 'react';
import Modal from 'react-modal';
import AddModalUI from './DeleteModalUI';


Modal.setAppElement('#root')
export default function DeleteModal(props) {
    const { deletePostIsUp, setDeletePostlIsUp, pickedId, data, setData, setMessage } = props;

    const DELETE_MODAL_STYLE = {
        overlay: {
            position: 'fixed'
        },
        content: {
            position: 'absolute',
            height: '30%',
            width: '55%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'sans-serif'
        }
    }
    return (
        <div className='DelModal'>
            <Modal
                isOpen={deletePostIsUp}
                style={DELETE_MODAL_STYLE}
            >
                <AddModalUI
                    setDeletePostlIsUp={setDeletePostlIsUp}
                    pickedId={pickedId}
                    data={data}
                    setData={setData}
                    setMessage={setMessage}
                />
            </Modal>
        </div>
    )
}