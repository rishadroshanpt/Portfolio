from flask import Flask,render_template,request,redirect

app=Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
    if request.method=='POST':
        name=request.form['name']
        email=request.form['email']
        msg=request.form['msg']
        print(name,email,msg)
        return redirect('/')
    return render_template('index.html')

app.run()