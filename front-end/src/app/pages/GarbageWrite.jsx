import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function Garbage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCategory, setSelectedCategory] = useState('');

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Container>
      <Title>글 작성</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RadioContainer>
          <RadioInput
            type="radio"
            id="category1"
            value="category1"
            {...register('category', { required: true })}
            checked={selectedCategory === 'category1'}
            onChange={handleCategoryChange}
          />
          <RadioLabel htmlFor="category1">화나요</RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioInput
            type="radio"
            id="category2"
            value="category2"
            {...register('category', { required: true })}
            checked={selectedCategory === 'category2'}
            onChange={handleCategoryChange}
          />
          <RadioLabel htmlFor="category2">힘들어요</RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioInput
            type="radio"
            id="category3"
            value="category3"
            {...register('category', { required: true })}
            checked={selectedCategory === 'category3'}
            onChange={handleCategoryChange}
          />
          <RadioLabel htmlFor="category3">슬퍼요</RadioLabel>
        </RadioContainer>

        {errors.category && <ErrorMessage>카테고리를 선택해주세요.</ErrorMessage>}

        <Button type="submit">글 작성</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const RadioLabel = styled.label`
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Garbage;
