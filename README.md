# Node_TDD

## nods.js 기초 
크롬에서 사용하는 V8 엔진을 사용한다.
이벤트 기반의 비동기 I/O 프레임워크 
CommonJS를 구현한 모듈 시스템

### 모듈 시스템 
브라우저 에서는 원도우 컨텍스트를 사용하거나, RequireJS 같은 의존성 로더를 사용함.
노드는 파일형태로 모듈을 관리할 수 있는 CommonJS로 구현
- 기본 모듈
- 써드파티 모듈
- 사용자 정의 모듈


### 비동기 세계
노드는 기본적으로 비동기로 동작함

### Express.js
- 어플리케이션
익스프레스 인스턴스를 어플리케이션이라고 한다.
서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다.
라우팅 설정을 할 수 있다.
서버를 요청 대기 상태로 만들 수 있다.

- 미들웨어
미들웨어는 함수들의 연속이다.
로깅 미들웨어를 만들어 보자
써드파티 미들웨어를 사용해 보자
일반미들웨어 vs 에러 미들웨어
404, 500에러 미들웨어를 만들어 보자.

- 라우팅
요청 url에 대해 적절한 핸들러 함수로 연결해 주는 기능을 라우팅이라 부른다.
어플리케이션의 get(), post() 메소드로 구현할 수 있다.
라우팅을 위한 전용 Router 클래스를 사용할 수도 있다.

- 요청객체
클라이언트 요청 정보를 담은 객체를 요청객체라고 한다.
http 모듈의 request 객체를 래핑한 것이다.
req.params(), req.query(), req.body() 메소드를 주로 사용한다. 

- 응답객체
클라이언트 응답 정보를 담은 객체를 요청객체라고 한다.
http 모듈의 response 객체를 래핑한 것이다.
res.send(), res.status(), res.json() 메소드를 주로 사용한다. 

### HTTP 메서드
서버 자원에 대한 행동을 나타낸다.(동사로 표현)
-GET : 자원을 조회
-POST : 자원을 생성
-PUT : 자원을 갱신
-DELETE : 자원을 삭제

이는 익스프레스 어플리케이션의 메소드로 구현되어 있다.


### api 만들기
-GET /users
 : 사용자 목록을 조회하는 기능


### 테스트 주도 개발
TDD로 개발하자.
mocha, should, superTest

#### Mocha
모카는 테스트 코드를 돌려주는 테스트 러너.
테스트 슈트 : 테스트 환경으로 모카에서는 describe()으로 구현
테스트 케이스 : 실제 테스트를 말하며 모카에서는 it()으로 구현
