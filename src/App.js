import React, { useState, useEffect } from 'react';
import { useViewport } from './Hooks/useViewport';
import { ADD_MODAL_STYLE, EDIT_MODAL_STYLE, DELETE_MODAL_STYLE } from './Modal_Styles/modal_styles';
import axios from 'axios';
import Modal from 'react-modal';
import './App.scss';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import MsgBox from './Components/MsgBox/MsgBox';
import Post from './Components/Post/Post';
import AddModalUI from './Components/AddModal/AddModalUI';
import DeleteModalUI from './Components/DeleteModal/DeleteModalUI';
import EditModalUI from './Components/EditModal/EditModalUI';


function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [pickedId, setPickedId] = useState(null);
  // Msg Box
  const [message, setMessage] = useState('')
  //Delete Blog
  const [deletePostIsUp, setDeletePostlIsUp] = useState(false);
  //Edit Blog
  const [editPostIsUp, setEditPostIsUp] = useState(false);
  //New Blog
  const [newPostIsUp, setNewPostIsUp] = useState(false);


  //ViewPort
  const { width } = useViewport()
  const brakepoint = 830;

  // Search
  const filtered = data.filter(el => el.title.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    axios.get('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts')
      .then(data => setData(data.data.resultData))
      .catch(err => console.log(err));
  }, [])


  return (
    <div className="App">
      <div className='container'>
        <Header
          setSearch={setSearch}
        />

        <main className='content'>
          {width > brakepoint ? <Categories setMessage={setMessage} /> : null}

          <div className='main-wr'>
            <h2>Welcomne to My Blog</h2>

            {message ? <MsgBox message={message} /> : null}

            <div className='newbtn-wr'>
              <button className='new-btn' onClick={() => setNewPostIsUp(true)}>Add Post</button>
            </div>

            {width < brakepoint ? <Categories setMessage={setMessage} /> : null}

            <div className='blog-container'>
              {filtered.map(el => {
                return <Post
                  key={el.id}
                  data={el}
                  setDeletePostlIsUp={setDeletePostlIsUp}
                  setEditPostIsUp={setEditPostIsUp}
                  setPickedId={setPickedId}
                />
              })}

              <Modal isOpen={newPostIsUp} style={ADD_MODAL_STYLE}>
                <AddModalUI
                  setNewPostIsUp={setNewPostIsUp}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                />
              </Modal>

              <Modal isOpen={deletePostIsUp} style={DELETE_MODAL_STYLE}>
                <DeleteModalUI
                  setDeletePostlIsUp={setDeletePostlIsUp}
                  pickedId={pickedId}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                />
              </Modal>

              <Modal isOpen={editPostIsUp} style={EDIT_MODAL_STYLE}>
                <EditModalUI
                  setEditPostIsUp={setEditPostIsUp}
                  pickedId={pickedId}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                />
              </Modal>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default App;
