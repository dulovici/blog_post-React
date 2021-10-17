import React from 'react';
import Modal from 'react-modal';
import EditModalUI from './EditModalUI';


Modal.setAppElement('#root')
export default function EditModal(props) {
    const { editPostIsUp, setEditPostIsUp, pickedId, data, setData, setMessage } = props;

    const EDIT_MODAL_STYLE = {
        overlay: {
            position: 'fixed'
        },
        content: {
            position: 'absolute',
            height: '50%',
            width: '60%',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'sans-serif'
        }
    }
    return (
        <div className='EditModal'>
            <Modal
                isOpen={editPostIsUp}
                style={EDIT_MODAL_STYLE}
            >
                <EditModalUI
                    setEditPostIsUp={setEditPostIsUp}
                    pickedId={pickedId}
                    data={data}
                    setData={setData}
                    setMessage={setMessage}
                />
            </Modal>
        </div>
    )
}