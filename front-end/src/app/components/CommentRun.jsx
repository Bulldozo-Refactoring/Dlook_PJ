import React, { useState } from "react";
import { styled } from "styled-components";

function CommentRun() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <Div>
      <h1>댓글</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 작성하세요"
          required
        />
        <Button type="submit">작성</Button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <Span>{comment}</Span>
            <Button onClick={() => handleDelete(index)}>삭제</Button>
          </li>
        ))}
      </ul>
    </Div>
  );
}

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 94%;
`;

const Button = styled.button`
  background: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover,
  &:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }
`;

const Span = styled.span`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
`;

const Div = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
`;



export default CommentRun;
