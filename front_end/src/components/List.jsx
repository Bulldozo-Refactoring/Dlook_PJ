<<<<<<< HEAD
import { Link } from "react-router-dom" ;


// title = 오늘의 점메추 
// date = 2023.06.08
// content = 오오
// 

const dummyList = [
    {
        id:1,
        author:"이정환",
        content:"하이 1",
        emotion:5,
        created_date: new Date()
=======
import BoardList from "./BoardContent/ListContent";


const dummyList = [
    {
        id:3,
        author:"이정현",
        title:"모든 국민은 직업선택의 자유를 가진다. 국가는 모성의 보호를 위하여 노력하여야 한다. ",
        created_date: "2023.06.09"
    },
    {
        id:2,
        author:"홍길동",
        title:"대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 이 헌법시행 당시의 대법원장과 대법원판사가.",
        created_date: "2023.06.09"
    },
    {
        id:1,
        author:"아무개",
        title:"학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.",
        created_date: "2023.06.09"
>>>>>>> main
    }
]

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
<<<<<<< HEAD
                    <th scope="col" class="th-date">등록일</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>i</td>
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
=======
                    <th scope="col" class="th-date">작성자</th>
                    <th scope="col" class="th-author">등록일</th>
                </tr>
                </thead>
                <tbody>
                    {dummyList.map((it) => {
                        return <BoardList boardList={it} />
                    })}
                    {/* <tr>
                        <td>i</td>
                        <th>
                        <NavLink to="/">오늘의 점메추</NavLink>
                        <p>테스트</p>
                        </th>
                        <td>황영수</td>
                        <td>2023.06.08</td>
                    </tr> */}
>>>>>>> main
                </tbody>
            </table>
            </div>
         </div>
    </>
    );
}

<<<<<<< HEAD
export default List;
=======


export default List;


  
>>>>>>> main
