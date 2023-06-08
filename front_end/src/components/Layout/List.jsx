import { Link } from "react-router-dom" ;

const List = () => {
    return (
    <>
        <div id="board-list">
            <div className="container">
            <table className="board-table">
                <thead>
                <tr>
                    <th scope="col" class="th-num">번호</th>
                    <th scope="col" class="th-title">제목</th>
                    <th scope="col" class="th-date">등록일</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>6</td>
                    <th>
                      <Link to="/">[자유게시판]오늘의 점메추</Link>
                      <p>테스트</p>
                    </th>
                    <td>2023.06.08</td>
                </tr>
                <tr>
                    <td>5</td>
                    <th>
                      <Link to="/">[자유게시판]오늘도 출근합니다..</Link>
                      <p>테스트</p>
                    </th>
                    <td>2023.06.08</td>
                </tr>
                <tr>
                    <td>4</td>
                    <th>
                      <Link to="/">[Q&A게시판]이거는 어떻게 해야하나요?</Link>
                      <p>테스트</p>
                    </th>
                    <td>2023.06.08</td>
                </tr>
                <tr>
                    <td>3</td>
                    <th><Link to="/">[자유게시판]오늘 저는 React를 배웠어요.</Link></th>
                    <td>2023.06.08</td>
                </tr>

                <tr>
                    <td>2</td>
                    <th><Link to="/">[공지사항]Dlook 전체 중요 공지사항!</Link></th>
                    <td>2023.06.08</td>
                </tr>
                <tr>
                    <td>1</td>
                    <th><Link to="/">[공지사항]공지사항 안내입니다. 이용해주셔서 감사합니다.</Link></th>
                     <td>2023.06.08</td>
                </tr>
                </tbody>
            </table>
            </div>
         </div>
    </>
    );
}

export default List;