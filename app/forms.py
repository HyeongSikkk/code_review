from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired

class CodeReviewForm(FlaskForm) :
    # 코드 설명(url or 설명)
    description= TextAreaField(
        """코드 설명""",
    )
    
    # 코드 입력받는 폼
    code= TextAreaField(
        """코드""",
        validators=[
            DataRequired("코드를 기입해주세요."),
        ],
    )
    
    # 제출
    submit= SubmitField("리뷰 받기")