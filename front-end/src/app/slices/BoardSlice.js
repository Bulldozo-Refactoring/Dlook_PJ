import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// 서버
import instance from './Instance';

// 상태 초기화
const initialState = {
  // 게시글 리스트 담을 배열
  boardList: [],
  // 상세보기 담을 객체
  boardDetail: null,
  // 비동기 동작 중 로딩 상태를 저장할 변수
  loading: false,
  // 비동기 동작 중 발생한 에러를 저장할 변수
  error: null,
};

/**
 * 게시글 리스트 가져오기 - 비동기로 동작하도록 설계
 * createAsyncThunk 함수는 비동기 작업을 처리하는 액션 생성자
 * createAsyncThunk 함수를 사용하여 payload 또는 action을 생성할 수 있음
 */
export const boardList = createAsyncThunk(
  'board/', //액션 이름은 'board/'
  async (payload) => {
    //비동기 함수 정의
    try {
      /**
       * '/boards' 데이터를 요청하고 받아온 응답을 저장함
       * GET은 클라이언트에서 서버에 정보를 요청하기 위해 사용함
       * POST는 클라이언트에서 서버에 생성하거나 업데이트하기 위해 즉, 데이터를 보낼 때 사용함
       */
      const response = await instance.get('/boards', payload, { withCredentials: true });
      // 요청 받은 값에서 데이터 추출
      return response.data;
    } catch (error) {
      console.error('게시글 리스트 가져오기 실패');
    }
  }
);

export const boardDetail = createAsyncThunk(
  'board/detail/id', // 액션의 이름
  async (id) => {
    // id 값을 받아옴
    try {
      const response = await instance.get('/boards/detail/id', {}, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw Error('게시글 상세보기를 가져오는 데 실패했습니다.');
    }
  }
);

/**
 * boardSlice 생성 - createSlice
 * createSlice 함수는 리듀서와 액션 생성자를 간편하게 사용할 수 있는 기능
 */
const boardSlice = createSlice({
  name: 'board', // 슬라이스의 이름은 board
  // initialState, reducers, extraReducers를 포함하는 객체를 전달
  initialState,
  reducers: {
    /**
     * < 예시 >
     * actionName: (state, action) => {
     *   상태 변경 로직
     * }
     */
  },
  extraReducers: (builder) => {
    /**
     * extraReducers는 비동기 액션 상태의 변화를 처리하는 곳
     * 이때 builder라는 객체를 사용하여 변화를 처리함
     */

    builder
      /**
       * < pending >
       * 비동기 동작이 시작될 때 실행 [ 로딩 상태 true로 설정, 에러 상태 초기화 ]
       * < fulfilled >
       * 비동기 동작이 성공/완료인 경우만 실행 [로딩 상태 false 설정, 게시글 리스트 업데이트 ]
       * < rejected >
       * 비동기 동작이 실패했을 때 실행 [ 로딩 상태 false, error 업데이트 ]
       */
      .addCase(boardList.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(boardList.fulfilled, (state, action) => {
        state.loading = false;
        state.boardList = action.payload;
      })
      .addCase(boardList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(boardDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(boardDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.boardDetail = action.payload;
      })
      .addCase(boardDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardSlice.reducer;
