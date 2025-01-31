from flask import (
    Flask,
    render_template,
    url_for,
    request,
)
from flask_wtf.csrf import CSRFProtect
from forms import CodeReviewForm
from web_req import get_the_url
app= Flask(__name__)
app.config.from_mapping(
    SECRET_KEY= "my_dinner_is_bulgogi",
    WTF_CSRF_SECRET_KEY="guro3_fighting",
    WTF_CSRF_ENABLED=True,
)
csrf= CSRFProtect()
csrf.init_app(app)

@app.route("/")
def index() :
    return render_template("index.html")

@app.route("/code_review", methods=["GET", "POST"])
def code_review() :
    if request.method == "GET" :
        form= CodeReviewForm()
        print("code_review, GET")
        return render_template("code_review.html", form=form, do_print=False)
    elif request.method == "POST" :
        form= CodeReviewForm(request.form)
        result= get_the_url(form.data)
        print("code_review, POST")
        print(result.page)
        print(result.code)
        return render_template("code_review.html",form= form, do_print=True, result= result)