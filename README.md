<div align="center">
    <img src="./Assets/img/Dlook_image.png" width = 85% height=400vh alt="profile logo">
</div>

------------------------------------------

## 1. ![Dlook_logo](./Assets/img/Dlook_logo.png) 소개

  ### **취업을 위해 매일 코딩테스트를 풀고 있는 개발자들을 위한 코딩 문제 추천 서비스**

  🌊 Naming : 개발자(Developer)는 항상 코드를 봐 (look)라는 의미를 가지고 있습니다.
  
    개발자라면 꾸준하게 이용하게 되는 코딩 테스트 사이트인 백준과 연동하여 문제를 추천하는 서비스 입니다.

------------------------------------------------------

## 2. ⚙️ 주요 기능

**🖋 WF 초안** <br/><br/>

  ![와이어프레임 초안](./Assets/img/Dlook_wireframe.png)


**🖋 Service Architecture** <br/><br/>

  ![서비스 아키텍처](./Assets/img/Dlook_architecture.png)


**🖋 메인 화면** <br/><br/>

  ![메인 화면](./Assets/img/Dlook_main.png)
  ![카테고리](./Assets/img/Dlook_category.png)
  ![내정보](./Assets/img/Dlook_information.png)


**1) 회원가입 및 로그인 기능 ( 이메일 인증 )** <br/><br/>
  
  ![회원가입](./Assets/img/Dlook_login.png)

  <div align="center">
    <img src="./Assets/img/Dlook_email.png" alt="이메일 인증">
  </div><br/>

  ![로그인](./Assets/img/Dlook_join.png)


**2) 알고리즘 문제 추천 기능**

    - 실력별 추천 : 풀고자 하는 난이도에 해당하는 문제 10개를 추천
    
        - SolvedAc api를 활용하여 난이도에 해당하는 문제 추천

        - 난이도를 고른 후 문제 리스트에서 문제 제목을 클릭하는 경우 백준 사이트의 해당 문제로 이동

    - 원하는 알고리즘별 추천 : 풀고자 하는 알고리즘에 해당하는 문제 추천
    
        - SolvedAc api를 활용하여 알고리즘에 해당하는 문제 추천

  ![알고리즘 카테고리](./Assets/img/Dlook_algorithm_category.png)
  ![알고리즘 실력별 추천](./Assets/img/Dlook_algorithm_level.png)
  ![알고리즘 문제로 이동](./Assets/img/Dlook_problem.png)
  ![알고리즘별 추천](./Assets/img/Dlook_algorithm.png)


**3) 문제 분석 및 랭킹**

    - 오답 유형 분석 : 알고리즘별 오답 유형 파악

    - 랭크 분석 : 최장 스트릭, 레이팅, 현재 티어, 푼 문제, 스트릭 현황을 확인
    
        - SolvedAc api와 연동하여 사용자의 정보 확인

  ![알고리즘별 오답 유형](./Assets/img/Dlook_algorithm_analyze.png)
  ![현재 자신의 랭크 현황](./Assets/img/Dlook_rank_analyze.png)


**4) 게시판 기능** <br/><br/>

  ![알고리즘 카테고리](./Assets/img/Dlook_boards.png)

------------------------------------------------------

## 3. ⛓ Tech Stack

<div align="center">
    <table border=""4>
        <th align="center">Role</th>
        <th style="text-align : center;" colspan="2">Framework</th>
        <!-- FrontEnd Stack -->
        <tr>
            <td rowspan="4" align="center"><b>FE</td>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/60b9eb2f-a59b-4c2f-9cfd-cbf70ded94a8" width="15px" alt="_icon" />&nbsp;&nbsp;<b>HTML</td>
            <td rowspan="3">Website Building Components</td>
        </tr>
        <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/15e86c4f-497f-417c-93b3-df11584f5790" width="15px" alt="_icon" />&nbsp;&nbsp;<b>CSS</td>
        </tr>
        <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/c9876d0b-0488-47f4-ade4-2bf81aa0c688" width="15px" alt="_icon"/>&nbsp;&nbsp;<b>JavaScript</b></td>
        </tr>
        <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/25191325-930f-4e5e-a91d-fcbdc7214f9f" width="15px" alt="_icon" />&nbsp;&nbsp;<b>React</b></td>
            <td>Frontend Framework</tdi>
        </tr>
        <!-- Backend Stack -->
        <tr>
            <td rowspan="4" align="center"><b>BE</td>
            <td><img src="https://user-images.githubusercontent.com/112257466/209075018-0a1f7f14-a910-4d16-a4e4-51929b99e1ae.png" width="15px" alt="_icon" />&nbsp;&nbsp;<b>Java11-Spring</td>
            <td rowspan="2">Spring Server Framework</td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/112257466/209075280-78be8487-7d6a-485c-92a8-d6677f0caab9.png" width="15px" alt="_icon" />&nbsp;&nbsp;<b>Spring Boot</td>
            <tr>
            <td><img src="https://user-images.githubusercontent.com/112257466/209076523-777fe02a-455f-48a0-a4b1-aeb9fff17b10.png" width="14px" alt="_icon" />&nbsp;&nbsp;<b>JPA & Data JPA</td>
            <td rowspan=1>Data Processing Skills</td>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/112257466/209078356-d9120e3d-9498-4ee4-a38d-139a263910f4.png" width="14px" alt="_icon" />&nbsp;&nbsp;<b>MySQL 8.0</td>
            <td>Back-End Main Database</td>
        </tr>     
        <!-- Tools --> 
        <tr>
            <td rowspan="4" align="center"><b>Tools</td>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/11e27614-1338-4963-8630-44b8dbd4b6a4" width="15px" alt="_icon" />&nbsp;&nbsp;<b>Git</td>
            <td>Version Control System (VCS)</td>
        </tr>
        <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/b2883ee7-9efe-46d0-ac19-be48846c61e7" width="15px" alt="_icon" />&nbsp;&nbsp;<b>Notion</td>
            <td>Collaborative Productivity Platform</td>
        </tr>
        <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/0b33547c-2a94-40c8-893e-81eff4627055" width="15px" alt="_icon" />&nbsp;&nbsp;<b>Google Slides</td>
            <td rowspan="2">Google Workspace Productivity Tools</td>
            <tr>
            <td><img src="https://github.com/noxknow/Java_study/assets/122594223/0aec4756-4dd2-43a4-904c-69f92dae8b72" width="14px" alt="_icon" />&nbsp;&nbsp;<b>Google Sheets</td>
        </tr>
    </table>
</div>
<br/><br/>

------------------------------------------------------

## 4. :octocat: Developers

<br/>
<div align="center">
    <table border=""4 width="50%">
        <tr>
            <th style="text-align : center;" colspan="2">FrontEnd</th>
            <th style="text-align : center;" colspan="2">Backend</th>
        </tr>
        <tr>
            <td align="center"><a href="https://github.com/OlMinJe"><img src="https://avatars.githubusercontent.com/u/118544134?v=4" width="180px;" style="vertical-align:top" alt=""></td>
            <td align="center"><a href="https://github.com/loadraw"><img src="https://avatars.githubusercontent.com/u/134680900?v=4" width="180px;" style="vertical-align:top" alt=""></td>
            <td align="center"><a href="https://github.com/noxknow"><img src="https://avatars.githubusercontent.com/u/122594223?v=4" width="180px;" style="vertical-align:top" alt=""></td>
            <td align="center"><a href="https://github.com/gyuonnn"><img src="https://avatars.githubusercontent.com/u/129468485?v=4" width="180px;" style="vertical-align:top" alt=""></td>
        </tr>
        <tr>
            <td align="center"><a href="https://github.com/OlMinJe">이민제</td>
            <td align="center"><a href="https://github.com/loadraw">황인환</td>
            <td align="center"><a href="https://github.com/noxknow">이치왕</td>
            <td align="center"><a href="https://github.com/gyuonnn">윤규원</td>
        </tr>
    </table>
</div>