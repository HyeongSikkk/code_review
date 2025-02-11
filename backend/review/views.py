from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import History, Review, Problem

# Create your views here.
dataList= {
  "소수찾기": [
    {
      "type": 1,
      "name": "알고리즘 풀이",
    },
    {
      "type": 1,
      "name": "알고리즘 풀이 2차",
    },
    {
      "type": 2,
      "name": "최적화 방법",
    }
  ],
  "짝수찾기": [
    {
      "type": 2,
      "name": "최적화 방법",
    },
  ],
  "dfs 응용": [
    {
      "type": 1,
      "name": "완전 멘붕...",
    },
    {
      "type": 2,
      "name": "그치만 해냈쥬?ㅋㅋ"
    },
    {
      "type": 1,
      "name": "dfs 응용 너무 어렵다"
    },    
  ],
}
def getHistories(user_id) :
    global dataList
    print(user_id)
    # 히스토리 불러오는 코드 부분, review app에 분리해야할 부분으로 생각되어짐, 일단 구현
    histories = History.objects.filter(user_id=user_id).values('id', 'problem_id', 'name', 'created_at').order_by("-created_at")
    problem_dict_history_list= {}
    for history in histories :
    # 문제 아이디
        problem_id= history["problem_id"]
        if problem_id not in problem_dict_history_list :
            problem_dict_history_list[problem_id]= [history]
        else :
            problem_dict_history_list[problem_id].append(history)
              
    print(user_id)
    return dataList #problem_dict_history_list
