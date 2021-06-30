# todo-server

## Table
### Todos
|columns|description|
|---|---|
|id|기본키|
|content| 할 일 내용|   
|isClear| 할 일 완료 여부|   
|deadline| 할 일 완료 기한|   
|createdAt|작성일시|
|updatedAt|수정일시|

---
## base url: http://3.37.62.54:3000
## 메소드
|method|url|description|
|---|---|---|
|Get | /todo| 할 일 목록 보기 |
| Post | /todo| 할 일 추가하기 |
| Put | /todo| 할 일 수정하기 |
| Put | /todoIsClear/:id | 할 일 완료여부 토글 |
| Delete | /todo/:id | 할 일 삭제하기 |

#
### Get /todo 
#### 응답 - JSON
- msg - 성공/실패 메시지
- data - 할 일 목록
#

### Post /todo
#### 요청 바디
|key|value example|
|---|---|
|content| "하루 1 커밋" |   
|deadline| "2021-06-30" |   

#### 응답 - JSON
- msg - 성공/실패 메시지
#

### Put /todo
#### 요청 바디
|key|value example|
|---|---|
|id|1|
|content| "내용-수정"|   
|isClear| true |   
|deadline| "2021-06-20" |   

#### 응답 - JSON
- msg - 성공/실패 메시지
#

### Put /todoIsClear/:id
#### 응답 - JSON
- msg - 성공/실패 메시지
#


### Delete /todo/:id
#### 응답 - JSON
- msg - 성공/실패 메시지
#
