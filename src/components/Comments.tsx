import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { addDoc, collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { Comment } from "../@types"
import CommentCard from "./CommentCard"


type Props = {
  characterID: string
}

const Comments = ({ characterID }: Props) => {
  const containerStyle: React.CSSProperties = { display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }
  const [inputValue, setInputValue] = useState("");
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    const toSubmit = {
      characterID: characterID,
      userID: user.uid,
      user: user.email || "",
      comment: inputValue,
      date: Date.now()
    }

    try {
      const docRef = await addDoc(collection(db, "comments"), toSubmit);
      console.log(docRef);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("date"), where("characterID", "==", characterID));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const placeHolder: Comment[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Comment;
        placeHolder.push({ ...data, id: doc.id })
      })
      console.log(placeHolder);
      setComments(placeHolder);
    });

    return () => unsubscribe();
  }, [characterID]);

  return (
    <div style={containerStyle}>
      <h1>Chat/Forum!</h1>
      <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "1em", alignItems: "flex-start" }}>
        {comments.map((comment) => {
          return (
            <CommentCard key={comment.id} comment={comment} />
          )
        })}
      </div>
      <form onSubmit={handleSubmit} style={containerStyle}>
        <textarea placeholder="write a message!" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Comments