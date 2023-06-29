import { Title } from 'app/style/GlobalStyle';
import { Button, Container, ErrorMessage, Form, RadioContainer, RadioInput, RadioLabel } from 'app/style/StyleGarbage';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Garbage = () => {
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
};

export default Garbage;
