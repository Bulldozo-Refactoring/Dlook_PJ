import BoardList from "./Board/ListContent";


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
                    <th scope="col" class="th-date">작성자</th>
                    <th scope="col" class="th-author">등록일</th>
                </tr>
                </thead>
                <tbody>
                    {dummyList.map((it) => {
                        return <BoardList boardList={it} />
                    })}
                </tbody>
            </table>
            </div>
         </div>
    </>
    );
}

export default List;