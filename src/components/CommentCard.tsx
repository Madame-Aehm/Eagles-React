import { CSSProperties } from 'react';
import { Comment } from '../@types'
import { useAuth } from '../context/AuthContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

type Props = {
  comment: Comment
}

const CommentCard = ({ comment }: Props) => {
  const { user } = useAuth();
  const cardStyle: CSSProperties = { 
    border: "solid black 1px", 
    borderRadius: "1em", 
    padding: "1em", 
    width: "70%", 
    alignSelf: user?.uid === comment.userID ? "flex-end" : "",
    display: "flex",
    flexDirection: "column"
  }

  const handleDelete = async() => {
    if (!user || user.uid !== comment.userID) return;
    try {
      await deleteDoc(doc(db, "comments", comment.id));
      // if you are not using live update, you would need to handle state updates here
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={comment.id} style={cardStyle}>
      { user?.uid === comment.userID && 
        <button style={{ alignSelf: "flex-end" }} onClick={handleDelete}>X</button>
      }
      <p>{comment.user} - <i>{new Date(comment.date).toLocaleString()}</i></p>
      <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard