import requests
from bs4 import BeautifulSoup as BS
import subprocess

def get_the_url(data) :
    url= data["description"]
    code= data["code"]
    if 'programmers' in url :
        return Programmers(url, code)
    elif 'acmicpc' in url :
        return Acmicpc(url, code)
    else :
        raise NotSupportSite(f"{url}은(는) 지원하지 않는 사이트입니다.")
        
class Manager :
    def __init__(self, url, code) :
        self.url = url
        self.code= code
        self.get_page()
        if self.status :
            self.find_problem_description()
        
    def get_page(self):
        # 최대 시도 수 설정
        MAX_TRIES= 3
        for i in range(MAX_TRIES) :
            is_success= False
            try :
                header = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"}
                r = requests.get(self.url, headers = header)
                # 요청 성공 여부 확인
                if r.status_code == 200 :
                    is_success= True
                    self.page= BS(r.text, features="html.parser")
                    break
                else :
                    print(f"요청 {i+1}회 실패, {self.url}")
                    raise
            except :
                continue
        if is_success :
            self.status= True
        else :
            self.status= False
            
    def find_problem_description(self) :
        raise NotImplementedError()
            

    

class Programmers(Manager) :
    def __init__(self, url, code) :
        super().__init__(url, code)
        
    def find_problem_description(self) :
        self.description= self.page.find(id="tour2").find("div", {"class": "markdown"}).text
            

class Acmicpc(Manager) :
    def __init__(self, url, code) :
        super().__init__(url, code)
        
    def find_problem_description(self) :
        self.description= self.page.find(id="problem_description").find("p").text   
        
        
        
class NotSupportSite(Exception) :
    pass