import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { useViewport } from './Hooks/useViewport';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import MsgBox from './Components/MsgBox/MsgBox';
import Post from './Components/Post/Post';
import AddModal from './Components/AddModal/AddModal';
import DeleteModal from './Components/DeleteModal/DeleteModal';
import EditModal from './Components/EditModal/EditModal';


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

  // Filtered Data
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
          {width > brakepoint ? <Categories /> : null}

          <div className='main-wr'>
            <h2>Welcomne to My Blog</h2>

            {message ? <MsgBox message={message} /> : null}

            <div className='newbtn-wr'>
              <button className='new-btn' onClick={() => setNewPostIsUp(true)}>Add Post</button>
            </div>

            {width < brakepoint ? <Categories /> : null}

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

              <AddModal
                newPostIsUp={newPostIsUp}
                setNewPostIsUp={setNewPostIsUp}
                data={data}
                setData={setData}
                setMessage={setMessage}
              />

              <DeleteModal
                deletePostIsUp={deletePostIsUp}
                setDeletePostlIsUp={setDeletePostlIsUp}
                pickedId={pickedId}
                data={data}
                setData={setData}
                setMessage={setMessage}
              />

              <EditModal
                editPostIsUp={editPostIsUp}
                setEditPostIsUp={setEditPostIsUp}
                pickedId={pickedId}
                data={data}
                setData={setData}
                setMessage={setMessage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default App;
