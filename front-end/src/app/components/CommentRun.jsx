import React, { useState } from "react";
import { styled } from "styled-components";

function CommentForm({ addComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 작성하세요"
        required
      />
      <Button type="submit">작성</Button>
    </form>
  );
}

function CommentList({ comments, deleteComment }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <Span>{comment}</Span>
          <Button onClick={() => deleteComment(index)}>삭제</Button>
        </li>
      ))}
    </ul>
  );
}

function CommentRun() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div>
      <h1>댓글</h1><hr />
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} deleteComment={deleteComment} />
    </div>
  );
}

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
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

export default CommentRun;
